const menuBtn = document.querySelector("#menuButton");
const menu = document.querySelector("#menu");
const contactBtn = document.querySelector("#contacts");
const aboutEl = document.querySelector("#about");
const servicesEl = document.querySelector("#services");
const testimonialsEl = document.querySelector("#testimonials");
const aboutBtn = document.querySelector("#aboutBtn");
const servicesBtn = document.querySelector("#servicesBtn");
const testimonialsBtn = document.querySelector("#testimonialsBtn");
const logoFooterEl = document.querySelector("#logoFooter");

if (window.innerWidth >= 1024) {
    console.log("desktop");
    console.log(window.innerWidth);
    menu.classList.remove("desactive");
} else {
    console.log("mobile");
    menu.classList.add("desactive");
}

menuBtn.addEventListener("click", () => {
    window.scrollTo(0, 0);

    menu.classList.toggle("desactive");

    if (!menu.classList.contains("desactive")) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
});

aboutBtn.addEventListener("click", () => {
    if (window.innerWidth >= 1024) {
        window.scrollTo({ left: 0, top: aboutEl.offsetTop, behavior: "smooth" });
    } else {
        menu.classList.add("desactive");
        document.body.style.overflow = "auto";
        window.scrollTo({ left: 0, top: aboutEl.offsetTop, behavior: "smooth" });
    }
});

servicesBtn.addEventListener("click", () => {
    if (window.innerWidth >= 1024) {
        window.scrollTo({ left: 0, top: servicesEl.offsetTop, behavior: "smooth" });
    } else {
        menu.classList.add("desactive");
        document.body.style.overflow = "auto";
        window.scrollTo({ left: 0, top: servicesEl.offsetTop, behavior: "smooth" });
    }
});

testimonialsBtn.addEventListener("click", () => {
    if (window.innerWidth >= 1024) {
        window.scrollTo({ left: 0, top: testimonialsEl.offsetTop, behavior: "smooth" });
    } else {
        menu.classList.add("desactive");
        document.body.style.overflow = "auto";
        window.scrollTo({ left: 0, top: testimonialsEl.offsetTop, behavior: "smooth" });
    }
});

contactBtn.addEventListener("click", () => {
    if (window.innerWidth >= 1024) {
        window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
    } else {
        menu.classList.add("desactive");
        document.body.style.overflow = "auto";
        window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
    }
});

logoFooterEl.addEventListener("click", () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
})

// 4280
