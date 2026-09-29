// Mobile navigation

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close navigation after clicking a link

document.querySelectorAll("#navLinks a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// Menu filtering

const filterButtons =
    document.querySelectorAll(".filter-btn");

const foodCards =
    document.querySelectorAll(".food-card");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const category =
            button.getAttribute("data-category");


        // Remove active state

        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });

        button.classList.add("active");


        // Show matching items

        foodCards.forEach(function (card) {

            const cardCategory =
                card.getAttribute("data-category");


            if (
                category === "all" ||
                category === cardCategory
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


// Reservation button

const reserveBtn =
    document.getElementById("reserveBtn");

reserveBtn.addEventListener("click", function () {

    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });

});


// Contact form

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (!name || !email || !message) {

        formMessage.textContent =
            "Please fill in all fields.";

        return;

    }


    formMessage.textContent =
        "Thank you, " + name +
        "! We received your message.";

    contactForm.reset();

});