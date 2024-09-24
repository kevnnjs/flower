onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        const message = document.querySelector('.flower-message');
        message.style.opacity = 1; // Torna o letreiro visível
        clearTimeout(c);
    }, 1000);
};
