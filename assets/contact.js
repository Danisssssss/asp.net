document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector(".contact-form");
    const modal = document.getElementById("modal");
    const modalClose = document.querySelector(".modal-close");
    const modalName = document.getElementById("modal-name");
    const modalEmail = document.getElementById("modal-email");
    const modalMessage = document.getElementById("modal-message");

    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Отмена стандартной отправки формы

            const formData = {
                name: document.querySelector("#name").value.trim(),
                email: document.querySelector("#email").value.trim(),
                message: document.querySelector("#message").value.trim(),
            };

            modalName.textContent = formData.name;
            modalEmail.textContent = formData.email;
            modalMessage.textContent = formData.message;

            modal.style.display = "flex";

            // contactForm.reset();
        });
    }

    modalClose.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});