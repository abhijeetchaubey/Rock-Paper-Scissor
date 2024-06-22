
// const rock= document.querySelector('.rock')
// const paper= document.querySelector('.paper')
// const scissor= document.querySelector('.scissor')


// rock.addEventListener('click',()=>{
//     console.log('you clicked me!');
// });

const button=document.querySelectorAll('.button')
const result=document.querySelector('.game-result')

let userScore=0
let computerScore=0

button.forEach((button)=>{
    button.addEventListener('click',()=>{
        const Result=playRound(button.id,computerPlay());
        console.log(Result);
        result.innerHTML=Result

        if(Result.includes('you win')){
            userScore++
        }
        else if(Result.includes('you Loose')){
            computerScore++
        }

        document.getElementById("user-score").innerHTML=userScore
        document.getElementById("computer-score").innerHTML=computerScore

    });
});


function computerPlay() {
    const choices=['rock','paper','scissors'];
    const randomChoice=Math.floor(Math.random()*choices.length);
    console.log(randomChoice);
    return choices[randomChoice]
}


function playRound(playerSelection,computerselection){
    if(playerSelection===computerselection){
        return `It's a tie!`
    }
    else if (
        (playerSelection==="rock" && computerselection==="scissors") ||
        (playerSelection==="paper" && computerselection==="rock") ||
        (playerSelection==="scissors" && computerselection==="paper")
    ){
        return `you win! ${playerSelection} beats ${computerselection}`
    }
    else{
        return `you Loose! ${computerselection}  beats ${playerSelection}`
    }
}

