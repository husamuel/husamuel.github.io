(function() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    function setTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
        localStorage.setItem('theme', theme);
        updateIcon();
    }
    
    function updateIcon() {
        const themeIcon = document.getElementById('themeIcon');
        if (themeIcon) {
            const isDark = document.body.classList.contains('dark-mode');
            themeIcon.textContent = isDark ? '☀️' : '🌙';
        }
    }
    
    // Aplica tema ao carregar
    setTheme(savedTheme);
    
    // Listener do botão
    window.addEventListener('load', function() {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', function(e) {
                e.preventDefault();
                const isDark = document.body.classList.contains('dark-mode');
                setTheme(isDark ? 'light' : 'dark');
            });
        }
    });
})();
