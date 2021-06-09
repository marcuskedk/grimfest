var icon = document.querySelector("#icon")

icon.addEventListener("click", function (event) {
    var menu = document.querySelector("header");
    var iconMenu = document.querySelector(".menu-icon i");
    var body = document.querySelector("body");
    menu.classList.toggle("show");
    if (iconMenu.className == "fa fa-bars") {
        iconMenu.className = "fa fa-close";
    } else {
        iconMenu.className = "fa fa-bars";
    }
    body.classList.toggle("overflow-hidden");
});