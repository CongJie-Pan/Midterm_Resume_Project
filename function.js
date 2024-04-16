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



