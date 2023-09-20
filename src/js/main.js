//"use strict"
import { timeline } from "./animation.js"
//console.log(timeline)

document.addEventListener("click", () => {
    const darkModeButton = document.querySelector("#nav-dark-mode-toggle")
    console.log(darkModeButton)
    darkModeButton.firstElementChild.classList.toggle("fa-sun")
    darkModeButton.firstElementChild.classList.toggle("fa-moon")
})
