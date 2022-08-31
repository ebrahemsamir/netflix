let searchbtn = document.querySelector("nav .search i");
let search = document.querySelector("nav .search");
let input = document.querySelector("nav .search input");

searchbtn.onclick = function () {
    search.classList.toggle("active");
    if (search.classList.contains("active")) {
        search.style.border = "1px solid white";
        search.style.padding = "10px";
        input.style.display = "block";
        input.style.animation = "leftmove 0.3s forwards";
    }
    else {
        search.style.padding = "0";
        input.style.display = "none";
        input.style.animation = "leftmove 0.3s reverse";
        search.style.border = "none";
    }
}

let background = document.querySelector(".landing");
let started = false;
let video = document.querySelector(".landing video");
let icons = document.querySelectorAll(".landing .container .text .restart");
let p = document.querySelector(".landing .container .text p")
let img = document.querySelector(".landing .container .text img")
console.log(icons[1]);
window.onload = () => {
    setTimeout(() => {
        console.log("NOW")
    }, 1000);
    if (scrollY == background.offsetTop) {
        if (!started) {
            setTimeout(() => {
                video.style.zIndex = "1";
                video.play();
                icons[0].classList.remove("active");
                icons[2].classList.add("active");
                icons.forEach((e) => {
                    e.onclick = function () {
                        if (icons[2].classList.contains("active")) {
                            icons[2].classList.remove("active");
                            icons[1].classList.add("active");
                            video.play();
                        }
                        else {
                            icons[1].classList.remove("active");
                            icons[2].classList.add("active");
                        }
                    }
                })
            }, 1000);
        }
        if (video.play())
            setTimeout(() => {
                p.style.display = "none";
                img.style.width = "300px";
            }, 5000);
        setTimeout(() => {
            video.pause();
            icons[2].classList.remove("active");
            icons[1].classList.remove("active");
            icons[0].classList.add("active");
            video.style.zIndex = "-1";
            p.style.display = "block";
            img.style.width = "400px";
        }, 15000);
        started = true;
    }
}
