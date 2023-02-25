var tl = gsap.timeline()

tl.from("#nav h4",{
    y:-50,
    duration:0.8,
    delay:0.3,
    stagger:0.3,
    opacity:0
})
.from("#circle",{
    scale:0,
    duration:0.8,
    opacity:0,
    rotateX:360
})
.from("#text",{
    opacity:0,
    duration:1.4
})
.from("#admi",{
    opacity:0,
    y:200,
    duration:0.9
})