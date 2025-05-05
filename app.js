window.setupThemeToggle = function () {
    const toggle = document.getElementById("btnSwitch");
    if (!toggle) {
        console.warn("btnSwitch element not found");
        return;
    }

    // Apply saved theme on load
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        toggle.checked = true;
    }

    toggle.addEventListener("change", function () {
        if (toggle.checked) {
            document.body.classList.add("dark-theme");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-theme");
            localStorage.setItem("theme", "light");
        }
    });
};


// Apply saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark-theme';
    document.body.classList.add(savedTheme);
});

        // Initialize AOS
AOS.init({
    duration: 1000,
    once: false,     // Allow animation to repeat
    mirror: true     // Animate elements when scrolling back
});


