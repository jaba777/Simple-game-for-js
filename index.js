const StartGameBtn=document.getElementById('start-game-btn');

const ROCK='Rock';
const PAPER='Paper';
const SCISSORS='Scissors';
const DEFAULT_USER_CHOISE=ROCK;

const RESULT_DRAW='Draw';
const RESULT_PLAYER_WINS='PLAYER_WINS';
const RESULT_COMPUTER_WINS='COMPUTER_WINS';

let gameIsRunning=false;

const getPlayerChoise=()=>{
    const selection=prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`,'');
    if(selection!== ROCK&& 
       selection !== PAPER&& 
       selection!== SCISSORS
       ){
      alert(`Invalid choise, We choose ${DEFAULT_USER_CHOISE} for you`);
      return;
    }

    return selection;
};


const getComputerChoise=()=>{
    const randomValue= Math.random();
    if(randomValue<0.34){
      return ROCK;
    } else if(randomValue <0.67){
      return PAPER;
    } else {
      return SCISSORS;
    }
};

const getWinner=(cChoise,pChoise=DEFAULT_USER_CHOISE)=>//{

    cChoise===pChoise ? RESULT_DRAW :
    (cChoise===ROCK && pChoise===PAPER) ||
    (cChoise===PAPER && pChoise===SCISSORS) ||
    (cChoise === SCISSORS && pChoise === ROCK)?
    RESULT_PLAYER_WINS:
    RESULT_COMPUTER_WINS;


    /*if(cChoise===pChoise){
        return RESULT_DRAW;
    } else if(
        cChoise===ROCK && pChoise===PAPER ||
        cChoise===PAPER && pChoise===SCISSORS ||
        cChoise === SCISSORS && pChoise === ROCK
    ){
        return RESULT_PLAYER_WINS;
    } else {
        return RESULT_COMPUTER_WINS;
    }*/
//}


StartGameBtn.addEventListener('click', ()=>{
    if(gameIsRunning){
        console.log('jabsona');
    }
    gameIsRunning=true;
    console.log('Game is Starting ...');
   const PlayerChoise= getPlayerChoise();
   const ComputerChoise=getComputerChoise();
   let winner;

   if(PlayerChoise){
       winner=getWinner(ComputerChoise,PlayerChoise);
   } else{
    winner=getWinner(ComputerChoise,0);
   }


   let message= `You picked ${PlayerChoise || DEFAULT_USER_CHOISE}, Computer picked ${ComputerChoise}, therefore you`;
   
   if(winner === RESULT_DRAW){
    message+=` had a draw.`;
   } else if(winner === RESULT_PLAYER_WINS){
    message+=` Won.`;
   } else {
    message+=` Lost.`;
   }

   alert(message);
   gameIsRunning=false;
});


const sumUp=(resultHandler,...numbers)=>{
 const validateNumber=(number)=>{
    return isNaN(number) ? 0 : number;
 }
let sum=0;
 for(num of numbers){
     sum+=validateNumber(num);
 }
 resultHandler(sum,'The result after adding all numbers is:');
}

const subtractUp= function(resultHandler, ...numbers){
    let sum=0;
 for(num of numbers){
     sum-=num;
 }
 resultHandler(sum , 'The result after adding all numbers is:');
}

const showResult=(result,message)=>{
    alert(message+' '+result);
}

//console.log(sumUp([1,5,10,-3,6,10]));
console.log(sumUp(showResult,1,5,10,'fsda',-3,6,10));

console.log(subtractUp(showResult,1,5,10,-3,6,10));