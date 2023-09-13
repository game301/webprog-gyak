let container = document.querySelector("#mt-background-container")

let leftArrow = window.getComputedStyle(container, ":before")
//alert(leftArrow.getPropertyValue("background"))
console.log(leftArrow.x)

document.addEventListener("click", () => {
    leftArrow.x == leftArrow.x + 300
})
