// ========================= 1 ====================
let r = Math.random();
r = r * 9;
r = Math.round(r);
console.log(r);

let userNum = document.querySelector('#user-num');

document.querySelector('#btn').onclick = checkNum;

function checkNum() {
    let num = userNum.value;
    num = parseInt(num);
    console.log(num);
    if (!isNaN(num)) {
        if (num == r) {
            alert('Вы угадали!!');
            location.reload();
        }
        else if (num > r) {
            alert('Загаданное число меньше');
        }
        else {
            alert('Загаданное число больше');
        }
    }
    else {
        alert('Введите корректное число');
    }
}


let count = 0;
let text = document.querySelector('#text');

text.onclick = function(){
	count++;
	if (count == 1) {
        text.innerHTML = 'Не нажимать';
        alert('оставшихся попыток - 2');
    }
	else if  (count == 2) {
        alert('оставшихся попыток - 1');
    } 
    else if (count == 3) {
        alert('оставшихся попыток - 0');
        text.style.display = 'none';
    } 
}

// ========================= 3 ====================
let userNum1 = document.querySelector('#user-num1');
let userNum2 = document.querySelector('#user-num2');

document.querySelector('#btn2').onclick = compareNumbers;

function compareNumbers() {
    let num1 = userNum1.value;
    num1 = parseInt(num1);
    let num2 = userNum2.value;
    num2 = parseInt(num2);

    if (!isNaN(num1) && !isNaN(num2)) {
        if (num1 > num2) {
            alert(num1);
        }
        else {
            alert(num2);
        }
    }
    else {
        alert('Введите корректное число');
    }
}

// ========================= 4 ====================
let userDay = document.querySelector('#day');
let userMonth = document.querySelector('#month');

document.querySelector('#btn3').onclick = checkZodiacSign;

function checkZodiacSign() {
    let d = userDay.value;
    let m = userMonth.value;

    if (m == 12 && d >=22) {
        alert ("козерог");
    }
    else if (m == 1 && d <= 20) {
        alert ("козерог");
    }
    else if (m == 1 && d >= 21) {
        alert ("водолей");
    } 
    else if (m == 2 && d <= 19) { 
        alert ("водолей");
    } 
    else if (m == 2 && d >= 20) { 
        alert ("рыба");
    } 
    else if (m == 3 && d <= 20) { 
        alert ("рыба");
    } 
    else if (m == 3 && d >= 21) { 
        alert ("овен");
    } 
    else if (m == 4 && d <= 20) { 
        alert ("овен");
    } 
    else if (m == 4 && d >= 21) { 
        alert ("телец");
    } 
    else if (m == 5 && d <= 21) { 
        alert ("телец");
    } 
    else if (m == 5 && d >= 22) { 
        alert ("близнецы");
    } 
    else if (m == 6 && d <= 21) { 
        alert ("близнецы");
    } 
    else if (m == 6 && d >= 22) { 
        alert ("рак");
    } 
    else if (m == 7 && d <= 23) { 
        alert ("рак");
    } 
    else if (m == 7 && d >= 24) { 
        alert ("лев");
    } 
    else if (m == 8 && d <= 23) { 
        alert ("лев");
    } 
    else if (m == 8 && d >= 24) { 
        alert ("дева");
    } 
    else if (m == 9 && d <= 23) { 
        alert ("дева");
    } 
    else if (m == 9 && d >= 24) { 
        alert ("весы");
    } 
    else if (m == 10 && d <= 23) { 
        alert ("весы");
    }
    else if (m == 10 && d >= 24) { 
        alert ("скорпион");
    } 
    else if (m == 11 && d <= 22) { 
        alert ("скорпион");
    }
    else if (m == 11 && d >= 23) { 
        alert ("стрелец");
    } 
    else if (m == 12 && d <= 21) { 
        alert ("стрелец");
    }
}

// ========================= 5 ====================
let userYear = document.querySelector('#year');

document.querySelector('#btn4').onclick = checkChineseСalendar;

function checkChineseСalendar() {
    let year = userYear.value;

    if (year % 12 == 4) {
        alert('год крысы');
    }
    else if (year % 12 == 5) {
        alert('год быка');
    }
    else if (year % 12 == 6) {
        alert('год тигра');
    }
    else if (year % 12 == 7) {
        alert('год зайца');
    }
    else if (year % 12 == 8) {
        alert('год дракона');
    }
    else if (year % 12 == 9) {
        alert('год змеи');
    }
    else if (year % 12 == 10) {
        alert('год лошади');
    }
    else if (year % 12 == 11) {
        alert('год барана');
    }
    else if (year % 12 == 0) {
        alert('год обезъяны');
    }
    else if (year % 12 == 1) {
        alert('год петуха');
    }
    else if (year % 12 == 2) {
        alert('год собаки');
    }
    else if (year % 12 == 3) {
        alert('год кабана');
    }
}






























