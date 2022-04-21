const buttons = document.querySelectorAll(".btn-menu, .menu-closer")
const collapse = document.querySelector(".navbar-collapse")


buttons.forEach(button => {
    button.addEventListener("click", () => {
        collapse.classList.toggle("active")
    })
})