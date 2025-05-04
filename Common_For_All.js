window.startTypingEffect = function () {
    const words = ["C# Developer", "Blazor Enthusiast", "Azure Certified", ".NET Core Specialist","Javascript","Jquery"];
    let i = 0, j = 0;
    let isDeleting = false;
    let currentWord = "";
    let speed = 500;

    function type() {
        const el = document.getElementById("type-text");
        if (!el) return; // Exit if element is missing

        currentWord = words[i];
        const visibleText = isDeleting ? currentWord.substring(0, j--) : currentWord.substring(0, j++);
        el.innerHTML = visibleText;

        if (speed > 30) speed -= 5;

        if (!isDeleting && j === currentWord.length + 1) {
            isDeleting = true;
            speed = 80;
            setTimeout(type, 1000);
        } else if (isDeleting && j === 0) {
            isDeleting = false;
            i = (i + 1) % words.length;
            speed = 200;
            setTimeout(type, 300);
        } else {
            setTimeout(type, speed);
        }
    }

    type();
};

// Polling function to start typing effect only when element is available
function ensureTypingEffect() {
    let attempts = 0;
    const maxAttempts = 20;

    const check = setInterval(() => {
        const el = document.getElementById("type-text");

        if (el) {
            clearInterval(check);
            startTypingEffect();
        }

        if (++attempts > maxAttempts) {
            clearInterval(check);
        }
    }, 300);
}

// Call on initial load
document.addEventListener("DOMContentLoaded", ensureTypingEffect);

window.initializeScript = () => {
    window.startTypingEffect = function () {
        const words = ["C# Developer", "Blazor Enthusiast", "Azure Certified", ".NET Core Specialist"];
        let i = 0, j = 0;
        let isDeleting = false;
        let currentWord = "";
        let speed = 500;

        function type() {
            const el = document.getElementById("type-text");
            if (!el) return; // Exit if element is missing

            currentWord = words[i];
            const visibleText = isDeleting ? currentWord.substring(0, j--) : currentWord.substring(0, j++);
            el.innerHTML = visibleText;

            if (speed > 30) speed -= 5;

            if (!isDeleting && j === currentWord.length + 1) {
                isDeleting = true;
                speed = 80;
                setTimeout(type, 1000);
            } else if (isDeleting && j === 0) {
                isDeleting = false;
                i = (i + 1) % words.length;
                speed = 200;
                setTimeout(type, 300);
            } else {
                setTimeout(type, speed);
            }
        }

        type();
    };
};
