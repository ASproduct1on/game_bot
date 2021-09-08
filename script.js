"use strict";

function gameBot (number) {
    const answer = prompt('Угадай число от 1 до 100?');

    if(isNaN(parseFloat(answer))){
        alert("Введи число!");
        gameBot(number);
    }else if(+answer === number){
        alert('Поздравляю, Вы угадали!!!');
    }else if (+answer > number) {
        alert("Загаданное число меньше");
        gameBot(number);
    } else if (+answer < number) {
        alert("Загаданное число больше");
        gameBot(number);
    } else if (+answer === false) {
        alert("Игра окончена");
    } else {
        gameBot(number);
    }    
}

gameBot(22);



