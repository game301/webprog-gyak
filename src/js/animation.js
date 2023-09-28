export const timeline = gsap.timeline({ defaults: { duration: 1 } })
timeline
    .from("header", {
        y: "-100%",
        ease: "bounce",
    })
    .from("#main-heading", {
        opacity: 0,
        y: "-10%",
        ease: "ease-in",
    })
