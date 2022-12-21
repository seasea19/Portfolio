const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

const img = document.querySelectorAll("#imgs img");

let idx = 0;

let interval = setInterval(run, 2000);

function run() {
    idx++;
    changeImage();
}

function changeImage() {
    if (idx > img.length - 1) {
        idx = 0;
    } else if (idx < 0) {
        idx = img.length - 1;
    }
    imgs.style.transform = `translateX(${-idx * 500}px)`;
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000);
}

rightBtn.addEventListener("click", () => {
    idx++;
    changeImage();
    resetInterval();
});

leftBtn.addEventListener("click", () => {
    idx--;
    changeImage();
    resetInterval();
});

$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $(".scroll-up-btn").addClass("show");
        } else {
            $(".scroll-up-btn").removeClass("show");
        }
    });

    // slide-up script
    $(".scroll-up-btn").click(function () {
        $("html").animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $("html").css("scrollBehavior", "auto");
    });

    $(".navbar .menu li a").click(function () {
        // applying again smooth scroll on menu items click
        $("html").css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $(".menu-btn").click(function () {
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });

    var typed = new Typed(".typing-2", {
        strings: [
            "Generation USA Student",
            "Entrepreneur",
            "Cybersecurity Enthusiast",
            "Hacking Learner",
            "Web developer",
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });
});

alert('Message box is still in progress! Do not write there yet!')
