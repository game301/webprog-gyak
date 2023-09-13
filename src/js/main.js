const navBtn = document.querySelectorAll("[data-navLink]")
console.log(navBtn)

console.log(navBtn[0].dataset.navLink)

navBtn.forEach((element) => {
    element.addEventListener("click", () => {
        if (navBtn[0].dataset.navLink == 1) {
            alert("kys")
        }
    })
})
