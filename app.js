"use strict"
//globel veriable
let timeLeft;
let timerInterval;
let isRunning=false;
let displayredColor;
let inputValueTimer;

const timerDisplay=document.getElementById('timer');
const startBtn=document.getElementById('startBtn');



// inputValue
function inputValue(){
    const inputTimer=document.getElementById('inputTimer');
     inputValueTimer=document.getElementById('inputTimer').value;
   
    console.log(inputValueTimer);
}



const startTimer=(duration)=>{
    
    let timer =duration;
   timerInterval= setInterval(()=>{
    const minute=parseInt(timer/60,10);
    const secound=parseInt(timer % 60,10);

    const displayMinute= minute < 10? "0"+ minute:minute;
    const displaySecond= secound < 10? "0"+ secound : secound;
   
   
    // change color
   
    function changeOrage(){
         secound ==0 ? timerDisplay.style.color="red": secound;
      
        // minute && secound == 20 ?  playAudio(): secound;
        // minute  &&  secound == 10?  playAudio(): secound;
        minute == 0 ?  playAudio(): secound;
        inputTimer.value="";
       
        
    }
    function changeRed(){
       
        //  secound > 6 ? timerDisplay.style.color="black ": secound;
        //  secound > 11 ? timerDisplay.style.color="black ": secound;

    }
          secound > 11 ? timerDisplay.style.color="green ": secound;
        //   secound > 11 ? playAudio(): secound;

    timerDisplay.style.color=changeOrage();
    timerDisplay.style.color=changeRed();
    //  secound > 6 ? timerDisplay.style.color="black ": secound;

    //  secound < 11 ? timerDisplay.style.color="orange ": secound;
    //  secound > 11 ? timerDisplay.style.color="black ": secound;

    timerDisplay.textContent=displayMinute+':'+displaySecond;
    if(--timer <0){
       
        clearInterval(timerInterval);
        playAudioTwo()
        timerDisplay.textContent='Complete The Work Stop & New Value'
      
    //     setTimeout(() => {
    //         startTimer(timeLeft);
    //         playAudioTwo()
    //          timerDisplay.textContent='Breath In'
            
    //     },5000);
     }


  


   },1000);

}   

// console.log('hellow')


const stopTimer =()=>{
    clearInterval(timerInterval);
    timerDisplay.textContent='Add New Value'
    isRunning=false;

}



// Click button

const stopBtn=document.getElementById('stopBtn');
startBtn.addEventListener("click",function(){
   if(!isRunning){
    timeLeft=inputValueTimer;
    startTimer(timeLeft);
   }
   inputValue()
   isRunning=true;
   if(inputValueTimer ==""){
    alert('jui Empty value please set up value ')
}
});




stopBtn.addEventListener("click",function(){
    stopTimer();
    isRunning=false;
  
});
const audio=document.getElementById('audio');
const audioTwo=document.getElementById('audioTwo');

function playAudio(){
    audio.play()
}

function playAudioTwo(){
    audioTwo.play()
}


