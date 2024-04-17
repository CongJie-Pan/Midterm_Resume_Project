// 獲取工具列
var nav = document.querySelector('nav');
// 紀錄上一個滾動位置
var prevScrollpos = window.pageYOffset;

// 監聽滾動事件
window.onscroll = function() {
    // 獲取當前滾動位置
    var currentScrollPos = window.pageYOffset;

    // 如果上一個滾動位置大於當前滾動位置，則顯示工具列
    if (prevScrollpos > currentScrollPos) {
        nav.style.top = "0";
    } else {
        // 否則隱藏工具列
        nav.style.top = "-60px";
    }

    // 更新上一個滾動位置
    prevScrollpos = currentScrollPos;
}

/* 工具列導引效果 */

/*
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// 滾動事件監聽器
window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
        }
    });
};

// 導航連結點擊事件監聽器
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // 防止點擊連結後跳轉
        let targetId = this.getAttribute('href'); // 獲取目標部分的 ID
        let targetElement = document.querySelector(targetId); // 獲取目標元素
        targetElement.scrollIntoView({ behavior: 'smooth' }); // 平滑滾動到目標元素

        // 添加或移除 active 類
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});*/

let navLinks = document.querySelectorAll('header nav a');

// 導航連結點擊事件監聽器
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // 防止點擊連結後跳轉
        let targetId = this.getAttribute('href'); // 獲取目標部分的 ID
        let targetElement = document.querySelector(targetId); // 獲取目標元素
        smoothScroll(targetElement, 1000); // 調用平滑滾動函數
    });
});

// 平滑滾動函數
function smoothScroll(target, duration) {
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

/*-------------------*/
/*--- 圓形狀進度條 ---*/
/*-------------------*/

// 第一個工作列動畫
let circularProgress1 = document.querySelector(".progress-1 .circular-progress");
let progressValue1 = document.querySelector(".progress-1 .progress-value");
let progressStartValue1 = 0;
let progressEndValue1 = 50;
let speed1 = 15;

let progress1 = setInterval(() => {
    progressStartValue1++;
    progressValue1.textContent = `${progressStartValue1}%`
    circularProgress1.style.background = `conic-gradient(#7d2ae8 ${progressStartValue1 * 3.6}deg, #ededed 0deg)`

    if(progressStartValue1 == progressEndValue1){
        clearInterval(progress1);
    }    
}, speed1);

// 第二個工作列動畫
let circularProgress2 = document.querySelector(".progress-2 .circular-progress");
let progressValue2 = document.querySelector(".progress-2 .progress-value");
let progressStartValue2 = 0;
let progressEndValue2 = 70;
let speed2 = 15;

let progress2 = setInterval(() => {
    progressStartValue2++;
    progressValue2.textContent = `${progressStartValue2}%`
    circularProgress2.style.background = `conic-gradient(#7d2ae8 ${progressStartValue2 * 3.6}deg, #ededed 0deg)`

    if(progressStartValue2 == progressEndValue2){
        clearInterval(progress2);
    }    
}, speed2);

// 第三個工作列動畫
let circularProgress3 = document.querySelector(".progress-3 .circular-progress");
let progressValue3 = document.querySelector(".progress-3 .progress-value");
let progressStartValue3 = 0;
let progressEndValue3 = 55;
let speed3 = 15;

let progress3 = setInterval(() => {
    progressStartValue3++;
    progressValue3.textContent = `${progressStartValue3}%`
    circularProgress3.style.background = `conic-gradient(#7d2ae8 ${progressStartValue3 * 3.6}deg, #ededed 0deg)`

    if(progressStartValue3 == progressEndValue3){
        clearInterval(progress3);
    }    
}, speed3);

// 第四個工作列動畫
let circularProgress4 = document.querySelector(".progress-4 .circular-progress");
let progressValue4 = document.querySelector(".progress-4 .progress-value");
let progressStartValue4 = 0;
let progressEndValue4 = 50;
let speed4 = 15;

let progress4 = setInterval(() => {
    progressStartValue4++;
    progressValue4.textContent = `${progressStartValue4}%`
    circularProgress4.style.background = `conic-gradient(#7d2ae8 ${progressStartValue4 * 3.6}deg, #ededed 0deg)`

    if(progressStartValue4 == progressEndValue4){
        clearInterval(progress4);
    }    
}, speed4);
