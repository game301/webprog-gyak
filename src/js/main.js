//"use strict"
import { timeline } from "./animation.js"
//console.log(timeline)

window.onload = () => {
    window.scrollTo(0, 0)
}

const darkModeButton = document.querySelector("#nav-dark-mode-toggle")

darkModeButton.addEventListener("click", () => {
    console.log(darkModeButton)
    darkModeButton.firstElementChild.classList.toggle("fa-sun")
    darkModeButton.firstElementChild.classList.toggle("fa-moon")
})

const hamburgerMenuButton = document.querySelector("#nav-hamburger-menu-toggle")

hamburgerMenuButton.addEventListener("click", () => {
    console.log(hamburgerMenuButton)
    hamburgerMenuButton.firstElementChild.classList.toggle("fa-bars")
    hamburgerMenuButton.firstElementChild.classList.toggle("fa-xmark")
})
