const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const yourscore = document.getElementById('yourscore');
const compscore = document.getElementById('compscore');
const outcome1 = document.getElementById('outcome1');
const outcome2 = document.getElementById('outcome2');

let playerChoice = "";
let compMove = "";
let random = "";
let you = 0;
let comp = 0;
let result = "";

function randomNum() {
    let random = Math.random();

    if (random <= 1/3) {
        compMove = "rock";
    } else if (random <= 2/3) {
        compMove = "paper";
    } else {
        compMove = "scissors";
    }
}

btn1.addEventListener('click', () => {
    playerChoice = "rock";
    choice();
});
btn2.addEventListener('click', () => {
    playerChoice = "paper";
    choice();
});
btn3.addEventListener('click', () => {
    playerChoice = "scissors";
    choice();
});

function choice() {
    randomNum();

    outcome1.innerText = `You picked ${playerChoice}`;
    outcome2.innerText = `Computer picked ${compMove}`;

    if (playerChoice === compMove) {
        return;
    }

    if (playerChoice === "rock") {
        if (compMove === "paper") {
            result = "loss";
            comp ++;
        } else
        if (compMove === "scissors") {
            result = "win";
            you ++;
        }
        yourscore.innerText = you;
        compscore.innerText = comp;
    }

    if (playerChoice === "paper") {
        if (compMove === "rock") {
            you ++;
        } else
        if (compMove === "scissors") {
            comp ++;
        }
        yourscore.innerText = you;
        compscore.innerText = comp;
    }

    if (playerChoice === "scissors") {
        if (compMove === "rock") {
            comp ++;
        } else
        if (compMove === "paper") {
            you ++;
        }
    }
}
