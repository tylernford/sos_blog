/* Toggle menu button transform */
document.querySelector("#menu-button").addEventListener("click", function() {
    this.classList.toggle("menu-open");
});

/* Show/hide nav */
(function() {

    function transformStart() {
        document.querySelector(".nav").classList.toggle("is-visible");
        document.querySelector("body").classList.toggle("overflow-hidden");
    }

    document.querySelector(".hamburger").addEventListener("click", transformStart);

})();

/* Hide nav on link click on mobile */
function myFunction(x) {
    if (x.matches) { // If media query matches
        (function() {
            function transformStart() {
                document.querySelector(".nav").classList.toggle("is-visible");
                document.querySelector(".nav").classList.toggle("is-hidden");
                document.querySelector("body").classList.toggle("overflow-hidden");
                document.querySelector("#menu-button").classList.toggle("menu-open");
            }
            document.querySelector(".nav-link-one").addEventListener("click", transformStart);
            document.querySelector(".nav-link-two").addEventListener("click", transformStart);
            document.querySelector(".nav-link-three").addEventListener("click", transformStart);
            document.querySelector(".nav-link-four").addEventListener("click", transformStart);
        })();
    } else {

    }
}

var x = window.matchMedia("(max-width: 70em)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
