"use strict";

function gameBot (number) {
    const answer = prompt('Угадай число от 1 до 100?');

    if(isNaN(parseFloat(answer))){
        console.log("Введи число!");
        gameBot(number);
    }else if(+answer === number){
        alert('Поздравляю, Вы угадали!!!');
    }else if (+answer > number) {
        console.log("Загаданное число меньше");
        gameBot(number);
    } else if (+answer < number) {
        console.log("Загаданное число больше");
        gameBot(number);
    } else if (+answer === false) {
        console.log ("Игра окончена")
    } else {
        gameBot(number);
    }    
}

gameBot(22);



