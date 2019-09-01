// ========================= 1 ====================
let modal = document.querySelector('#modal');
let show = document.querySelector('.show');
let hidden = document.querySelector('.hidden');

show.onclick = showModal;
hidden.onclick = hiddenModal;

function showModal() {
    modal.style.display = 'block';
};

function hiddenModal() {
    modal.style.display = 'none';
};

// ========================= 2 ====================
let count = document.querySelector('.count');

count.onclick = countNumbers;

function countNumbers() {
    console.log(15 + 20);
};

// ========================= 3 ====================
let hello = document.querySelector('.hello');

hello.onclick = toBeHello;

function toBeHello() {
    alert('Hello');
};

// ========================= 4 ====================
let double = document.querySelector('.double');

double.onclick = doubleAlert;

function doubleAlert() {
    alert('Hello');
    alert('Word');
};

// ========================= 5 ====================
let hidden2 = document.querySelector('.hidden2');

hidden2.onclick = hideYourself;

function hideYourself() {
    hidden2.style.display = 'none';
};

// ========================= 6 ====================
let text = document.querySelector('.text');

text.onclick = changeText;

function changeText() {
    text.innerHTML = 'Не нажимать';
};









































