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
    .from(
        "#cult-title",
        {
            opacity: 0,
            scale: 2,
            //boxShadow: "0px 0px 10px 10px rgba(255,255,255,1)",
            //textShadow: "10px 25px 50px rgba(255,255,255,1)",
            filter: "drop-shadow(-30px 20px 20px)",

            //backgroundColor: "rgba(255,255,255,1)",
            fontWeight: "600",
            ease: "ease-in",
            duration: 1.5,
        },
        "<"
    )

    .to(
        "#cult-sylphie",
        {
            opacity: 1,
            duration: 0,
        },
        "<1"
    )
    .to(
        "#cult-roxy",
        {
            opacity: 1,
            duration: 0,
        },
        "<0.5"
    )
    .to(
        "#cult-eris",
        {
            opacity: 1,
            duration: 0,
        },
        "<0.5"
    )
