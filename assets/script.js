document.querySelectorAll('.menu_item, .hero-more, .aboutme-bottom-btn').forEach(link => {
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