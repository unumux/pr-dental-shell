// var header = document.querySelector(".willow-page-header");
// var open = document.querySelector(".willow-page-header__content-open");
// var close = document.querySelector(".willow-page-header__content-close");

// open.addEventListener("click", function(e) {
//     e.preventDefault();
//     header.setAttribute("data-content-open", "true");
// });
// close.addEventListener("click", function(e) {
//     e.preventDefault();
//     header.setAttribute("data-content-open", "false");
// });

let controller = document.querySelector("[data-expanded]");
let control = document.querySelector("[data-expanded] .dropdown-navControl");
let date = document.querySelector(".willow-page-footer__copyright-year");

date.innerText = new Date().getFullYear();

document.addEventListener("click", (e) => {
    let status = controller.getAttribute("data-expanded");

    if (status === "true") {
        controller.setAttribute("data-expanded", "false");
    } else if (e.target === control) {
        e.preventDefault();
        controller.setAttribute("data-expanded", "true");
    }
});
