var menuActived = false
var options = window.document.querySelector("div.options")

window.addEventListener('resize', resetMenu)

function toggleMenu() {
    if(options.style.display == "none") {
        options.style.display = "flex"
    } else { options.style.display = "none"}
}

function resetMenu() {
    if(window.innerWidth >= 600) {
        options.style.display = "flex"
    } else { options.style.display = "none"}
}