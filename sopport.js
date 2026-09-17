// Get Started

function showMessage() {

    alert(
        "Welcome to InvestX! Your investment journey starts here."
    );

}


// FAQ Toggle

function toggleFAQ(button) {

    const answer =
        button.nextElementSibling;

    const icon =
        button.querySelector("span");


    if (answer.classList.contains("active")) {

        answer.classList.remove("active");

        icon.textContent = "+";

    } else {

        answer.classList.add("active");

        icon.textContent = "−";

    }

}


// Search FAQ

function searchFAQ() {

    const input =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const items =
        document.querySelectorAll(".faq-item");


    items.forEach(function(item) {

        const text =
            item.textContent.toLowerCase();

        if (text.includes(input)) {

            item.style.display = "block";

        } else {

            item.style.display = "none";

        }

    });

}


// Contact form

function submitForm(event) {

    event.preventDefault();

    alert(
        "Thank you! Your message has been submitted."
    );

    event.target.reset();

}


// Navbar shadow

window.addEventListener("scroll", function() {

    const navbar =
        document.querySelector(".navbar");

    if (window.scrollY > 20) {

        navbar.style.boxShadow =
            "0 3px 15px rgba(0, 0, 0, 0.08)";

    } else {

        navbar.style.boxShadow = "none";

    }

});

