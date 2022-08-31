let question = document.querySelectorAll(".questions .box .head");
let answer = document.querySelectorAll(".questions .box p");
let spans = document.querySelectorAll(".questions .box .head span");

let togglefunc = function (e) {
    let x = 0;
    e.classList.toggle("active");
    question.forEach((ele) => {
        if (ele.classList.contains("active")) {
            x += 1;
        }
    })
    if (x > 1) {
        question.forEach((e) => {
            e.classList.remove("active");
        })
        e.classList.add("active");
    }
}

question.forEach((e) => {
    e.onclick = function () {
        togglefunc(e);
        apper();
    }
})
let apper = function () {
    for (let i = 0; i < question.length; i++) {
        if (question[i].classList.contains("active")) {
            answer[i].style.display = "block";
            spans[i].style.transform = "rotate(-45deg)"
        }
        else {
            answer[i].style.display = "none";
            spans[i].style.transform = "rotate(0deg)"
        }
    }
}