document.querySelectorAll('.menu_item, .hero-more, .aboutme-bottom-btn, .header-logo').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.dataset.target; // Получаем ID секции
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 100; // Отступ в 100px
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 1 });

document.querySelectorAll('.hidden').forEach(el => observer.observe(el));