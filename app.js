const computerChoiceDisplay=document.getElementById('computer-choice')
const userChoiceDisplay=document.getElementById('user-choice')
const resultDisplay=document.getElementById('result')
const next=document.getElementById('next')
const Score=document.getElementById('score')
const compScore=document.getElementById('compscore')
const finalResult=document.getElementById('final')



let userImg=document.getElementById('userImg')
let compImg=document.getElementById('compImg')
const item = ["rock", "paper", "scissors"];
let userChoice
let compChoice
let result
let game = true
let score=0
let compscore=0;
let round=1


const possibleChoice=document.querySelectorAll('.button')

// Selecting Option (rock or paper or scissors)
possibleChoice.forEach(possiblechoice => possiblechoice.addEventListener('click',(e)=>{
    userChoice=e.target.id
    
    userChoiceDisplay.innerText=userChoice
    userImg.src='img/'+userChoice+'.png';
    game=false
    computerChoice()
    getResult()
    possibleChoice.forEach(possiblechoice => possiblechoice.disabled = true)
}))

// Next Button
next.addEventListener('click',()=>{
    if(round===10){
        if(score>compscore){
            finalResult.innerHTML='YOU WON 🥳!!!'
        }
        if(score<compscore){
            finalResult.innerHTML='YOU LOST 😥!!!'
        }
        else{
            finalResult.innerHTML='ITS A DRAW 🤔!!!'
        }
        score=0
        compscore=0
        round=0
        
    }
    else{
        userImg.src='';
        game=true
        possibleChoice.forEach(possiblechoice => possiblechoice.disabled = false)
        resultDisplay.innerHTML=''
        Score.innerHTML=score
        compScore.innerHTML=compscore
        finalResult.innerHTML=round
        round++
    }
})

function computerChoice(){
    const rand=Math.floor(Math.random()*3) +1     //Random Number generatd from 1 2 3

    if(rand===1){
        compChoice='rock'
    }
    if(rand===2){
        compChoice='scissors'
    }
    if(rand===3){
        compChoice='paper'
    }
    compImg.src='img/comp'+compChoice+'.png'
    computerChoiceDisplay.innerText=compChoice
}


function getResult(){
    if(compChoice===userChoice){
        result="Draw"
    }
    if((compChoice==='rock'&&userChoice==='scissors')||(compChoice==='scissors'&&userChoice==='paper')||compChoice==='paper'&&userChoice==='rock'){
        result="Lose"
        compscore++
        console.log(score+' comp score: '+compscore)
    }
    if((compChoice==='rock'&&userChoice==='paper')||(compChoice==='scissors'&&userChoice==='rock')||compChoice==='paper'&&userChoice==='scissor'){
        result="Win"
        score++
    }
    resultDisplay.innerHTML=result
    // console.log('User Choice= ',userChoice)
    // console.log('Computer Choice= ',compChoice)
    // console.log(result)
}
let count=0
function start(delay) {

    setInterval(()=> {
      if(game){
        compImg.src='img/comp'+item[count]+'.png'
        count++
        if(count===3){
          count=0
        }
      }
    }, delay)

  }
  


start(200)



