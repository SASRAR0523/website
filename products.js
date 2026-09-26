
// Get Started button

function showMessage() {

    alert(
        "Welcome to InvestX! Your investment journey starts here."
    );

}


// Product Learn More button

function productMessage(event) {

    event.preventDefault();

    alert(
        "This product page will be available soon."
    );

}


// Navbar shadow

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 20) {

        navbar.style.boxShadow =
            "0 3px 15px rgba(0, 0, 0, 0.08)";

    } else {

        navbar.style.boxShadow = "none";

    }

});

