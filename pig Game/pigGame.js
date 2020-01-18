var score = [0,0];
var currentScore = 0;
var activePlayer = 0;


document.querySelector('#diceImg').style.display = 'none';

document.querySelector('#rollDice').addEventListener('click',function(){
    var dice = Math.floor(Math.random()*6)+1;

    var DiceObj = document.querySelector("#diceImg");
    DiceObj.style.display = 'block';
    DiceObj.src = 'dice-'+dice+'.png';

    if(dice!==1){
        currentScore+=dice;
        document.getElementById("current-"+activePlayer).innerHTML = currentScore;
        console.log(activePlayer);
        
    }else{
        currentScore = 0;
        console.log(activePlayer);
        document.getElementById("current-"+activePlayer).innerHTML = currentScore;
        activePlayer===0 ? activePlayer = 1 : activePlayer = 0;    
    }
    

});

document.querySelector("#hold").addEventListener('click',function(){

    console.log(activePlayer);
    
    score[activePlayer] += currentScore;

    document.getElementById('score-'+activePlayer).innerHTML = score[activePlayer];

    if(score[activePlayer]>=100){
        //document.getElementById('score-'+activePlayer).innerHTML = score[activePlayer];
        //document.getElementById("winner").innerHTML = '<b> Player '+(activePlayer+1)+' is Winner</b>';
        alert("Player : "+(activePlayer+1)+' is Winner..');
        location.reload();
    }

    currentScore = 0;

    activePlayer===0 ? activePlayer = 1 : activePlayer = 0;

    
});

document.querySelector('#newGame').addEventListener('click',function(){
    location.reload();
});