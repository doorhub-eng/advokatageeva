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

    // Инициализация EmailJS
    if (typeof emailjs !== 'undefined') {
        emailjs.init("H3uOakJn_nTVbJW3t");
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const btn = contactForm.querySelector('.submit-btn');
            const originalText = btn.textContent;
            btn.textContent = 'Отправка...';
            btn.disabled = true;

            emailjs.sendForm('service_fatz985', 'template_j150eji', this)
                .then(function() {
                    alert('Сообщение успешно отправлено!');
                    contactForm.reset();
                }, function(error) {
                    alert('Ошибка при отправке. Попробуйте позже.');
                    console.error('EmailJS Error:', error);
                })
                .finally(function() {
                    btn.textContent = originalText;
                    btn.disabled = false;
                });
        });
    }
});