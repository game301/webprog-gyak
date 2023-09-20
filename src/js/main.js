//"use strict"
import { timeline } from "./animation.js"
//console.log(timeline)

const darkModeButton = document.querySelector("#nav-dark-mode-toggle")

darkModeButton.addEventListener("click", () => {
    console.log(darkModeButton)
    darkModeButton.firstElementChild.classList.toggle("fa-sun")
    darkModeButton.firstElementChild.classList.toggle("fa-moon")
})

window.onload = () => {
    window.scrollTo(0, 0)
}
