
function navAnimation() {
    var nav = document.querySelector(".nav2")

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()
        tl.to("#nav-bottom", {
            height: "21vh"
        })
        tl.to(".nav2 h5", {
            display: "block",
            duration: 0.1
        })
        tl.to(".nav2 h5 span", {
            y: 0,
            stagger: {
                amount: 0.6
            }
        })
    })

    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()
        tl.to(".nav2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.1
            }
        })
        tl.to(".nav2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.1
        })
    })
}

navAnimation()

function page2Animation() {
    var rightElem = document.querySelectorAll(".right-elem")

    rightElem.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })
        elem.addEventListener("mousemove", function (dets) {
            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 50,
                y: dets.y - elem.getBoundingClientRect().y - 50
            })
        })
    })
}

page2Animation()

function page3videoanimation() {
    var page3play = document.querySelector(".page3-play")
    var video = document.querySelector("#page3 video")

    page3play.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0
        })
    })

    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px"
        })
        video.load()
    })
}

page3videoanimation()

function page5videoplay() {
    var sections = document.querySelector(".sec-right")

    sections.addEventListener("mouseenter", function () {
        sections.childNodes[3].style.opacity = 1
        sections.childNodes[3].play()
    })
    sections.addEventListener("mouseleave", function () {
        sections.childNodes[3].style.opacity = 0
        sections.childNodes[3].load()
    })

    var section = document.querySelector(".sec-right-1")
    section.addEventListener("mouseenter", function () {
        section.childNodes[3].style.opacity = 1
        section.childNodes[3].play()
    })
    section.addEventListener("mouseleave", function () {
        section.childNodes[3].style.opacity = 0
        section.childNodes[3].load()
    })


    var elem = document.querySelector(".sec-right")

    elem.addEventListener("mouseenter", function () {
        gsap.to(".circle-container-1", {
            opacity: 1,
            scale: 1
        })
    })
    elem.addEventListener("mouseleave", function () {
        gsap.to(".circle-container-1", {
            opacity: 0,
            scale: 0
        })
    })
    elem.addEventListener("mousemove", function (dets) {
        gsap.to(".circle-container-1", {
            x: dets.x - elem.getBoundingClientRect().x - 50,
            y: dets.y - elem.getBoundingClientRect().y - 50
        })
    })

    var elem1 = document.querySelector(".sec-right-1")

    elem1.addEventListener("mouseenter", function () {
        gsap.to(".circle-container-2", {
            opacity: 1,
            scale: 1
        })
    })
    elem1.addEventListener("mouseleave", function () {
        gsap.to(".circle-container-2", {
            opacity: 0,
            scale: 0
        })
    })
    elem1.addEventListener("mousemove", function (dets) {
        gsap.to(".circle-container-2", {
            x: dets.x - elem1.getBoundingClientRect().x - 50,
            y: dets.y - elem1.getBoundingClientRect().y - 50
        })
    })
}

page5videoplay()

function page6videoplays() {
        var techs = document.querySelector(".left2")
        var para = document.querySelector(".left1")

        techs.addEventListener("mouseenter", function () {
            techs.childNodes[3].style.opacity = 1
            techs.childNodes[3].play()
            para.style.display = "none"
        })

        techs.addEventListener("mouseleave", function () {
            techs.childNodes[3].style.opacity = 0
            techs.childNodes[3].load()
            para.style.display = "block"
        })

        var techs1 = document.querySelector(".left-2")
        var para1 = document.querySelector(".left-1")

        techs1.addEventListener("mouseenter", function () {
            techs1.childNodes[3].style.opacity = 1
            techs1.childNodes[3].play()
            para1.style.display = "none"
        })

        techs1.addEventListener("mouseleave", function () {
            techs1.childNodes[3].style.opacity = 0
            techs1.childNodes[3].load()
            para1.style.display = "block"
        })

}

page6videoplays()

function page7play() {
        var open = document.querySelector(".ux")
        var project = document.querySelector(".page-container")
        var show = document.querySelector(".uiux")

        show.addEventListener("click", function () {
            if (project.classList.contains("hidden")) {
                project.classList.remove("hidden");
                open.src = "/assets/chevron-up-solid.svg";
                project.style.display = "block";
            }
            else {
                project.classList.add("hidden");
                open.src = "/assets/chevron-down-solid.svg";
                project.style.display = "none";
            }
        })
    
        var open1 = document.querySelector(".ux-1")
        var project1 = document.querySelector(".page-container-1")
        var show1 = document.querySelector(".product")

        show1.addEventListener("click", function () {
            if (project1.classList.contains("hidden")) {
                project1.classList.remove("hidden");
                open1.src = "/assets/chevron-up-solid.svg";
                project1.style.display = "block";
            }
            else {
                project1.classList.add("hidden");
                open1.src = "/assets/chevron-down-solid.svg";
                project1.style.display = "none";
            }
        })
}
page7play()

function page8play() {
        gsap.from(".btm8 h4", {
            x: 0,
            duration: 2,
            scrollTrigger: {
                trigger: ".btm8 h4",
                scroller: "body",
                start: "top 80%",
                end: "top 10%",
                scrub: true
            }
        }) 
}

page8play()

function loadanimation() {
    var tl = gsap.timeline()
    tl.from("#page1", {
        opacity: 0,
        duration: 0.3,
        delay: 0.2
    })
    tl.from("#page1", {
        transform: "scaleX(0.7) scaleY(0) translateY(80%)",
        borderRadius: "100px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from("#page1 h1, #page1 p, #page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
}
loadanimation()

var Elem = document.querySelectorAll(".listimg")

Elem.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        gsap.to(elem, {
            opacity: 1
        })
    })
    elem.addEventListener("mouseleave", function () {
        gsap.to(elem, {
            opacity: 0
        })
    })
    elem.addEventListener("mousemove", function (dets) {
        gsap.to(elem, {
            x: dets.x - elem.getBoundingClientRect().x - 50,
            y: dets.y - elem.getBoundingClientRect().y - 50
        })
    })
})

function page10play() {
    var open = document.querySelector(".c-img")
    var project = document.querySelector(".lists")
    var show = document.querySelector(".year")

    show.addEventListener("click", function () {
        if (project.classList.contains("hidden")) {
            project.classList.remove("hidden");
            open.src = "/assets/chevron-up-solid.svg";
            project.style.display = "block";
        }
        else {
            project.classList.add("hidden");
            open.src = "/assets/chevron-down-solid.svg";
            project.style.display = "none";
        }
    })

    var open1 = document.querySelector(".c-img1")
    var project1 = document.querySelector(".lists1")
    var show1 = document.querySelector(".year1")

    show1.addEventListener("click", function () {
        if (project1.classList.contains("hidden")) {
            project1.classList.remove("hidden");
            open1.src = "/assets/chevron-up-solid.svg";
            project1.style.display = "block";
        }
        else {
            project1.classList.add("hidden");
            open1.src = "/assets/chevron-down-solid.svg";
            project1.style.display = "none";
        }
    })
}

page10play()

function page11play() {
    var open = document.querySelector(".p11img")
    var project = document.querySelector(".para")
    var show = document.querySelector(".cont-list")

    show.addEventListener("click", function () {
        if (project.classList.contains("hidden")) {
            project.classList.remove("hidden");
            open.src = "/assets/chevron-up-solid.svg";
            project.style.display = "block";
        }
        else {
            project.classList.add("hidden");
            open.src = "/assets/chevron-down-solid.svg";
            project.style.display = "none";
        }
    })


    var show1 = document.querySelectorAll(".cont-list2")

    show1.forEach(function (elem) {
        elem.addEventListener("click", function () {
            elem.classList.toggle("active")
        })
    })
}

page11play()





