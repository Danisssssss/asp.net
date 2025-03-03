// Прокрутка к секциям
document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu_item, .hero-more, .aboutme-bottom-btn, .header-logo");

    menuItems.forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault();
            
            const targetId = this.dataset.target;
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 100;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
        });
    });
});

// Анимация появления элементоа
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 1 });

// Смена темы
document.querySelectorAll('.hidden').forEach(el => observer.observe(el));

document.querySelector('.toggle-theme').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('.page').classList.toggle('dark');
});
