const menuItems = [{
        title: "Обо мне",
        target: "aboutme"
    },
    {
        title: "Мои навыки",
        target: "skills"
    },
    {
        title: "Работы",
        target: "works"
    },
    {
        title: "Контакты",
        target: "contact"
    }
];

const profileData = {
    firstName: "Данис",
    lastName: "Яхьяев",
    experienceYears: 5,
    projectsCount: 20,
    aboutMeText: "Я веб-разработчик с 5-летним опытом. Работал над 20+ проектами в разных сферах, включая e-commerce.",
    skills: {
        frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
        backend: ["Node.js", "Express", "PostgreSQL", "Prisma", "C#"]
    },
    works: [{
            title: "Интернет-магазин",
            description: "Разработка e-commerce платформы на Next.js и PostgreSQL.",
            image: "https://placehold.co/800x400"
        },
        {
            title: "Финтех-сервис",
            description: "Система управления финансами с Node.js и Prisma.",
            image: "https://placehold.co/800x400"
        },
        {
            title: "Корпоративный сайт",
            description: "Разработка сайта для компании с CMS на React.",
            image: "https://placehold.co/800x400"
        }
    ],
    contact: {
        address: "Астрахань, ул. Татищева, 10",
        phone: "+7 (999) 123-45-67",
        email: "danis.yahyaev@mail.ru"
    },
    footerCopyright: "© 2025 Данис Яхьяев. Все права защищены."
};

document.addEventListener("DOMContentLoaded", () => {
    // Header
    const menuContainer = document.querySelector(".header-menu");

    menuItems.forEach(item => {
        const link = document.createElement("a");
        link.href = "#";
        link.classList.add("menu_item");
        link.setAttribute("data-target", item.target);
        link.textContent = item.title;
        menuContainer.appendChild(link);
    });

    // Hero
    const nameElement = document.querySelector(".hero-name");
    if (nameElement) {
        nameElement.textContent = `${profileData.lastName} ${profileData.firstName}`;
    }

    // Aboutme
    document.querySelector(".about-experience").textContent = `${profileData.experienceYears} лет работы`;
    document.querySelector(".about-projects").textContent = `${profileData.projectsCount} проектов`;
    document.querySelector(".about-text").textContent = profileData.aboutMeText;

    // Skills
    const skillsContainer = document.querySelector(".skills-top");

    if (skillsContainer) {
        skillsContainer.innerHTML = "";

        Object.entries(profileData.skills).forEach(([category, skills]) => {
            const skillSection = document.createElement("div");
            skillSection.classList.add("skills-item");

            const skillTitle = document.createElement("p");
            skillTitle.classList.add("skills-item-title");
            skillTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);

            const skillList = document.createElement("div");
            skillList.classList.add("skills-item-list");

            skills.forEach(skill => {
                const skillItem = document.createElement("div");
                skillItem.classList.add("skills-item-list-item");

                skillItem.innerHTML = `
                <div class="skills-item-list-item-icon">
                    <i class="fa-solid fa-circle-check"></i>
                </div>
                <div class="skills-item-list-item-title">${skill}</div>
            `;

                skillList.appendChild(skillItem);
            });

            skillSection.appendChild(skillTitle);
            skillSection.appendChild(skillList);
            skillsContainer.appendChild(skillSection);
        });
    }


    // Works
    const worksList = document.querySelector(".works-list");

    if (worksList) {
        worksList.innerHTML = profileData.works
            .map(work =>
                `<div class="works-item">
                    <div class="works-item-image">
                        <img src="${work.image}" alt="${work.title}">
                    </div>
                    <div class="works-item-title">${work.title}</div>
                </div>`
            )
            .join("");
    }

    // Contact
    document.querySelector(".contact-address").textContent = profileData.contact.address;
    document.querySelector(".contact-phone").textContent = profileData.contact.phone;
    document.querySelector(".contact-email").textContent = profileData.contact.email;

    // Footer
    const footerElement = document.querySelector(".footer-copyright");
    if (footerElement) {
        footerElement.textContent = profileData.footerCopyright;
    }
});