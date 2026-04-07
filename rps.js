const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const yourscore = document.getElementById('yourscore');
const compscore = document.getElementById('compscore');
const outcome1 = document.getElementById('outcome1');
const outcome2 = document.getElementById('outcome2');

let playerChoice = "";
let compMove = "";
let you = 0;
let comp = 0;
let result = "";

function randomNum() {
    let random = Math.random();

    if (random <= 1/3) {
        compMove = "rock";
        document.getElementById('compchoice').innerHTML =
        `<button><i class="fa-solid fa-hand-back-fist"></i></button>`;
    } 
    else if (random <= 2/3) {
        compMove = "paper";
        document.getElementById('compchoice').innerHTML =
        `<button><i class="fa-solid fa-hand-paper"></i></button>`;
    } 
    else {
        compMove = "scissors";
        document.getElementById('compchoice').innerHTML =
        `<button><i class="fa-solid fa-hand-scissors"></i></button>`;
    }
}

btn1.addEventListener('click', () => {
    playerChoice = "rock";
    choice();
    document.getElementById('yourchoice').innerHTML = `<button><i class="fa-solid fa-hand-back-fist"></i></button>`;
});
btn2.addEventListener('click', () => {
    playerChoice = "paper";
    choice();
    document.getElementById('yourchoice').innerHTML =`<button><i class="fa-solid fa-hand-paper"></i></button>`;
});
btn3.addEventListener('click', () => {
    playerChoice = "scissors";
    choice();
     document.getElementById('yourchoice').innerHTML = `<button><i class="fa-solid fa-hand-scissors"></i></button>`;
});

function choice() {
    randomNum();

    if (playerChoice === compMove) {
        return;
    }

    if (playerChoice === "rock") {
        if (compMove === "paper") {
            result = "loss";
            comp ++;
            outcome1.innerText = `YOU LOSE`;
        } else
        if (compMove === "scissors") {
            result = "win";
            you ++;
            outcome1.innerText = `YOU WON`;
        }
        yourscore.innerText = you;
        compscore.innerText = comp;
    }

    if (playerChoice === "paper") {
        if (compMove === "rock") {
            you ++;
            outcome1.innerText = `YOU WON`;
        } else
        if (compMove === "scissors") {
            comp ++;
            outcome1.innerText = `YOU LOSE`;
        }
        yourscore.innerText = you;
        compscore.innerText = comp;
    }

    if (playerChoice === "scissors") {
        if (compMove === "rock") {
            comp ++;
            outcome1.innerText = `YOU LOSE`;
        } else
        if (compMove === "paper") {
            you ++;
            outcome1.innerText = `YOU WON`;
        }
        yourscore.innerText = you;
        compscore.innerText = comp;
    }
}
