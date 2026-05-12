document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const closeMenu = document.getElementById('closeMenu');
    
    menuToggle.addEventListener('click', () => {
        sidebar.classList.add('open');
    });

    closeMenu.addEventListener('click', () => {
        sidebar.classList.remove('open');
    });

    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            // Если нужно, чтобы при открытии одной, другие закрывались, раскомментируй ниже:
            // serviceCards.forEach(c => { if (c !== card) c.classList.remove('active'); });
            card.classList.toggle('active');
        });
    });
});