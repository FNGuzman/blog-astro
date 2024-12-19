
const hamburger = document.querySelector(".hamburger");
if (hamburger) {
    // Verifica que el elemento exista antes de añadirle un event listener
    hamburger.addEventListener("click", () => {
        const navLinks = document.querySelector(".nav-links");
        if (navLinks) {
            // Verifica también este otro elemento antes de modificarlo
            navLinks.classList.toggle("expanded");
        }
    });
}
