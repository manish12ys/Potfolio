// Theme toggle functionality
class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.themeIcon = document.getElementById('themeIcon');
        this.themeText = document.getElementById('themeText');
        this.body = document.body;
        
        this.init();
    }

    init() {
        // Check for saved theme preference or default to dark
        const currentTheme = localStorage.getItem('theme') || 'dark';
        
        // Apply the saved theme
        this.applyTheme(currentTheme);
        
        // Add event listeners
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
        document.addEventListener('keydown', (e) => this.handleKeyboardShortcut(e));
    }

    applyTheme(theme) {
        if (theme === 'light') {
            this.body.classList.add('light-mode');
            this.themeIcon.textContent = '☀️';
            this.themeText.textContent = 'Light';
        } else {
            this.body.classList.remove('light-mode');
            this.themeIcon.textContent = '🌙';
            this.themeText.textContent = 'Dark';
        }
    }

    toggleTheme() {
        const isLightMode = this.body.classList.contains('light-mode');
        const newTheme = isLightMode ? 'dark' : 'light';
        
        this.applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    handleKeyboardShortcut(e) {
        // Ctrl/Cmd + T for theme toggle
        if ((e.ctrlKey || e.metaKey) && e.key === 't') {
            e.preventDefault();
            this.toggleTheme();
        }
    }
}

// Initialize theme manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
}); 