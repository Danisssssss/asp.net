const menuItems = [
    { title: "Обо мне", target: "aboutme" },
    { title: "Мои навыки", target: "skills" },
    { title: "Работы", target: "works" },
    { title: "Контакты", target: "contact" }
];

const profileData = {
    firstName: "Иван",
    lastName: "Петров",
    experienceYears: 5,
    projectsCount: 20,
    aboutMeText: "Я веб-разработчик с 5-летним опытом. Работал над 20+ проектами в разных сферах, включая e-commerce и финтех.",
    skills: {
        frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
        backend: ["Node.js", "Express", "PostgreSQL", "Prisma", "C#"]
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const menuContainer = document.querySelector(".header-menu");

    menuItems.forEach(item => {
        const link = document.createElement("a");
        link.href = "#";
        link.classList.add("menu_item");
        link.setAttribute("data-target", item.target);
        link.textContent = item.title;
        menuContainer.appendChild(link);
    });

    const themeToggle = document.createElement("a");
    themeToggle.href = "#";
    themeToggle.classList.add("toggle-theme");
    themeToggle.innerHTML = `
        <i class="fa-classic fa-solid fa-moon fa-fw toggle-theme-moon"></i>
        <i class="fa-classic fa-solid fa-sun fa-fw toggle-theme-sun"></i>
    `;
    menuContainer.appendChild(themeToggle);

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
    const frontendList = document.querySelector(".skills-frontend");
    const backendList = document.querySelector(".skills-backend");

    if (frontendList) {
        frontendList.innerHTML = profileData.skills.frontend
            .map(skill => `<li>${skill}</li>`)
            .join("");
    }

    if (backendList) {
        backendList.innerHTML = profileData.skills.backend
            .map(skill => `<li>${skill}</li>`)
            .join("");
    }
});
