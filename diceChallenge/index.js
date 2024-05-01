
let randomNumber = function(){
    let number = parseInt(Math.random() * 6) + 1;
    return number;
};

let numero1 = randomNumber();
let numero2 = randomNumber();

let title;
if(numero1 > numero2){
    title = "Player 1 Wins";
} else if (numero1 === numero2){
    title = "Draw";
} else {
    title = "Player 2 Wins";
}


window.addEventListener('load', function(){
    this.document.getElementsByClassName('title')[0].innerHTML = title;
    this.document.querySelector('.player1 img').setAttribute('src', `./res/dice${numero1}.png`);
    this.document.querySelector('.player2 img').setAttribute('src', `./res/dice${numero2}.png`);
    
})

