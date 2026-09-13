function selectPlan(plan) {

    alert(
        "You selected the " + plan + " plan."
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
