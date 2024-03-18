document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for links with hashes
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Retro blink effect for navigation links
    const navLinks = document.querySelectorAll('nav a');
    setInterval(() => {
        navLinks.forEach(link => {
            link.style.visibility = (link.style.visibility === 'hidden' ? '' : 'hidden');
        });
    }, 500); // Blinks every 500ms
});