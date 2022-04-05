let order =[];
let clickOrder = [];
let score = 0;

//0 = verde
//1 = vermelho
//2 = amarelo
//3 = azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('yellow')

//cria ordem aleatória
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('.selected');
    }, number -250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//checa se os botos clicados estão na ordem correta
let checkOrder = () => {
    for(let i in clickOrder) {
        if(clickOrder[i] != order[i]) {
            gameOver()
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert('Pontuação: ${score}\nVocê acertou! Iniciando próximo nível.');
        nextLevel();
    }
}

//funcção para clicar nas cores
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    elementColor(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
    
}

//função que retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if (color == 1){
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

//função para o próximo nivel
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//função para game over
let gameOver = () => {
    alert(`pontuação:  ${score}!\nVoceperdeu o jogo!\nClique em ok para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

//funcção de inicio de cores
let playGame = () => {
    alert('benvido ao genius, iniciando o jogo!')
    score = 0;

    nextLevel();
}

//funcção de inicio das cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();



