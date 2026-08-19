import { PasswordChecker, PasswordAnalysis } from './PasswordChecker';

const $ = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;
const chars = { lowercase: 'abcdefghijklmnopqrstuvwxyz', uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', numbers: '0123456789', symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?' };

class VaultCheckApp {
    private passwordInput = $('passwordInput') as HTMLInputElement;
    private compareInput = $('compareInput') as HTMLInputElement;
    private currentAnalysis: PasswordAnalysis = PasswordChecker.analyze('');

    constructor() {
        this.bindEvents();
        this.loadHistory();
        this.analyze();
        const isLocalDevelopment = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
        if (isLocalDevelopment && 'serviceWorker' in navigator) {
            navigator.serviceWorker.getRegistrations().then(registrations => registrations.forEach(registration => registration.unregister()));
            caches.keys().then(keys => keys.filter(key => key.startsWith('vaultcheck-')).forEach(key => caches.delete(key)));
        }
        if (!isLocalDevelopment && 'serviceWorker' in navigator) {
            navigator.serviceWorker.register('./sw.js').catch(() => undefined);
        }
    }

    private bindEvents(): void {
        this.passwordInput.addEventListener('input', () => this.analyze());
        $('togglePassword').addEventListener('click', () => this.toggleVisibility(this.passwordInput, $('togglePassword')));
        $('copyPassword').addEventListener('click', () => this.copy(this.passwordInput.value));
        $('generatePassword').addEventListener('click', () => this.generate(true));
        $('regeneratePassword').addEventListener('click', () => this.generate(false));
        $('copyGenerated').addEventListener('click', () => this.copy($('generatedPassword').textContent || ''));
        $('lengthRange').addEventListener('input', () => { $('lengthValue').textContent = ($('lengthRange') as HTMLInputElement).value; });
        $('compareToggle').addEventListener('click', () => { $('comparePanel').toggleAttribute('hidden'); this.compareInput.focus(); });
        this.compareInput.addEventListener('input', () => this.compare());
        const themeToggle = $('themeToggle');
        const savedTheme = localStorage.getItem('vaultcheck-theme');
        if (savedTheme === 'light') document.body.classList.add('light-theme');
        themeToggle.setAttribute('aria-pressed', String(document.body.classList.contains('light-theme')));
        themeToggle.addEventListener('click', () => {
            const isLight = document.body.classList.toggle('light-theme');
            localStorage.setItem('vaultcheck-theme', isLight ? 'light' : 'dark');
            themeToggle.setAttribute('aria-pressed', String(isLight));
        });
        $('languageSelect').addEventListener('change', () => this.translate(($('languageSelect') as HTMLSelectElement).value));
    }

    private analyze(): void {
        const password = this.passwordInput.value;
        this.currentAnalysis = PasswordChecker.analyze(password);
        const analysis = this.currentAnalysis;
        $('strengthBar').style.width = `${analysis.score}%`;
        $('strengthBar').className = `strength-bar ${analysis.level.replace(' ', '-')}`;
        $('strengthLevel').textContent = this.label(analysis.level);
        $('scoreValue').textContent = String(analysis.score);
        $('entropyValue').textContent = `${this.entropy(password)} bits`;
        $('timeToCrack').textContent = password ? PasswordChecker.estimateTimeToCrack(password, analysis.score) : 'Bekliyor';
        new UIAdapter().render(analysis, password);
        this.checkBreach(password);
    }

    private entropy(password: string): number { const pool = (/[a-z]/.test(password) ? 26 : 0) + (/[A-Z]/.test(password) ? 26 : 0) + (/\d/.test(password) ? 10 : 0) + (/[^a-zA-Z0-9]/.test(password) ? 33 : 0); return password ? Math.round(password.length * Math.log2(pool || 1)) : 0; }
    private label(level: string): string { return ({ empty: 'Değerlendiriliyor...', 'very weak': 'Çok zayıf', weak: 'Zayıf', medium: 'Orta', strong: 'Güçlü', 'very strong': 'Çok güçlü' } as Record<string, string>)[level] || level; }
    private toggleVisibility(input: HTMLInputElement, button: HTMLElement): void { input.type = input.type === 'password' ? 'text' : 'password'; button.textContent = input.type === 'password' ? 'GÖSTER' : 'GİZLE'; }
    private secureRandom(max: number): number { const values = new Uint32Array(1); crypto.getRandomValues(values); return values[0] % max; }
    private generate(useMainInput: boolean): void {
        const length = Number(($('lengthRange') as HTMLInputElement).value);
        const selected = Object.entries(chars).filter(([key]) => ($(`${key}Option`) as HTMLInputElement).checked).map(([, value]) => value);
        if (!selected.length) return;
        const pool = selected.join('');
        let password = selected.map(set => set[this.secureRandom(set.length)]).join('');
        while (password.length < length) password += pool[this.secureRandom(pool.length)];
        password = password.split('').sort(() => this.secureRandom(2) - .5).join('');
        $('generatedPassword').textContent = password;
        this.saveHistory(password);
        if (useMainInput) { this.passwordInput.value = password; this.passwordInput.type = 'text'; $('togglePassword').textContent = 'GİZLE'; this.analyze(); }
    }
    private async copy(value: string): Promise<void> { if (!value || value.includes('üretin')) return; await navigator.clipboard?.writeText(value); this.toast('Panoya kopyalandı'); }
    private toast(message: string): void { const toast = document.createElement('div'); toast.className = 'toast-message'; toast.setAttribute('role', 'status'); toast.setAttribute('aria-live', 'polite'); toast.textContent = message; document.body.appendChild(toast); setTimeout(() => toast.remove(), 1800); }
    private saveHistory(password: string): void { const history = [password, ...JSON.parse(localStorage.getItem('vaultcheck-history') || '[]')].slice(0, 5); localStorage.setItem('vaultcheck-history', JSON.stringify(history)); this.loadHistory(); }
    private loadHistory(): void { const history = JSON.parse(localStorage.getItem('vaultcheck-history') || '[]') as string[]; $('historyList').innerHTML = history.length ? history.map(item => `<li>${item}</li>`).join('') : '<li>Henüz kayıt yok</li>'; }
    private compare(): void { const other = this.compareInput.value; const result = other ? `Bu parola ${PasswordChecker.analyze(other).score >= this.currentAnalysis.score ? 'daha güçlü veya eşit' : 'daha zayıf'}.` : ''; $('compareResult').textContent = result; }
    private async checkBreach(password: string): Promise<void> { if (!password) { $('privacyBadge').textContent = '● CİHAZDA'; return; } try { const data = new TextEncoder().encode(password); const hash = Array.from(new Uint8Array(await crypto.subtle.digest('SHA-1', data))).map(value => value.toString(16).padStart(2, '0')).join('').toUpperCase(); const response = await fetch(`https://api.pwnedpasswords.com/range/${hash.slice(0, 5)}`, { headers: { 'Add-Padding': 'true' } }); const found = (await response.text()).split('\n').some(line => line.startsWith(hash.slice(5))); $('privacyBadge').textContent = found ? '● BREACH BULUNDU' : '● TEMİZ GÖRÜNÜYOR'; } catch { $('privacyBadge').textContent = '● SADECE CİHAZDA'; } }
    private translate(language: string): void { const text: Record<string, string> = { tr: 'Parolaları savunmaya dönüştür.', en: 'Turn passwords into defense.', de: 'Machen Sie Passwörter zur Verteidigung.', fr: 'Transformez les mots de passe en défense.', es: 'Convierte contraseñas en defensa.' }; document.querySelector('h1')!.innerHTML = text[language] || text.tr; }
}

class UIAdapter {
    render(analysis: PasswordAnalysis, password: string): void {
        const criteria = [{ key: 'length', text: 'En az 12 karakter' }, { key: 'hasLowercase', text: 'Küçük harf içeriyor' }, { key: 'hasUppercase', text: 'Büyük harf içeriyor' }, { key: 'hasNumbers', text: 'Rakam içeriyor' }, { key: 'hasSpecialChars', text: 'Özel karakter içeriyor' }, { key: 'noRepeatingChars', text: 'Tekrarlanan karakter yok' }, { key: 'notWeakPassword', text: 'Yaygın sözlükte yok' }, { key: 'noSequentialChars', text: 'Sıralı karakter yok' }];
        $('criteriaList').innerHTML = criteria.map(item => `<li class="criteria-item"><span class="criteria-icon">${analysis.criteria[item.key as keyof typeof analysis.criteria] ? '✓' : '×'}</span><span>${item.text}</span></li>`).join('');
        $('feedbackContent').innerHTML = analysis.feedback.map(item => `<div class="feedback-item"><span class="feedback-icon">•</span><span>${item}</span></div>`).join('');
        $('suggestionsContent').innerHTML = analysis.suggestions.map(item => `<p>${item.replace('• ', '')}</p>`).join('');
        if (!password) { $('feedbackContent').innerHTML = '<p class="initial-message">Parolanızı yazmaya başladığınızda analiz burada görünür.</p>'; $('suggestionsContent').innerHTML = '<p class="initial-message">Daha güçlü olmak için öneriler burada görünür.</p>'; }
    }
}

new VaultCheckApp();
