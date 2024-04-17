
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
