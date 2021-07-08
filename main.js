

//SELECT
let roundsDiv = document.querySelector('.rounds');
let diceImage = document.querySelector('#dice');
let headers = document.querySelectorAll('header');
let mains = document.querySelectorAll('main');
let footers = document.querySelectorAll('footer');
let image = document.querySelectorAll(".image");
let image1 = document.querySelectorAll(".image1");
let btn = document.querySelector(".btn");

btn.addEventListener("click",askForNames)

//start values
let round = 0;
let player1Score = 0;
let player2Score = 0;
let turn = 1;
// AskForNames

// RollDice
// DisplayScore
// DisplayWinner
function askForNames(){
    let player1 = prompt('Enter player1 name')
    let player2 = prompt('Enter player2 name')
    headers[0].innerHTML = player1;
    headers[1].innerHTML = player2;
    rollDice();
}
function displayScore(dice){
    if(turn === 1){
        image[round].setAttribute('src',`dice-${dice}.png`);
        mains[0].innerHTML = dice;
        player1Score+=dice;
        footers[0].innerHTML = "Total : "+player1Score;
        turn++;
        rollDice();
    }else{
        image1[round].setAttribute('src',`dice-${dice}.png`);
        round++;
        roundsDiv.innerHTML = round;
        mains[1].innerHTML = dice;
        player2Score+=dice;
        footers[1].innerHTML = "Total : "+player2Score;
        
        turn--;
        
        if(round < 4){
            rollDice();
        }else{
            displayWinner()
        }
    }
}
function displayWinner(){
    if(player1Score > player2Score){
        mains[0].style.background = "red";
        mains[0].innerHTML = "<h4 style=font-size:40px>Winner!!!</h4>";
    }else if(player1Score < player2Score){
        mains[1].style.background = "red";
        mains[1].innerHTML = "<h4 style=font-size:40px>Winner!!!</h4>";
    }else{
        mains[0].style.background = "red";
        mains[1].style.background = "red";
    }
}

function rollDice(){
    let counter = 0;
    let loop = setInterval(function(){
        let rand = Math.ceil(Math.random()*6);
        counter++;
        diceImage.setAttribute("src",`dice-${rand}.png`);
        if(counter > 30){
            clearInterval(loop);
            displayScore(rand);
        }
    },40)
}

