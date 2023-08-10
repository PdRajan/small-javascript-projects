let randomNumber = parseInt((Math.random()*100)+1)

const submit = document.querySelector('#submit')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHigh')
const startOver = document.querySelector('.resultParas')


const p = document.createElement('p')
let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess) || guess < 1 || guess > 100){
        alert("Please enter a number from 1 to 100.")
    }else{
        prevGuess.push(guess)
        
        if(numGuess > 10){
            DisplayGuess(guess)
            DisplayMessage(`Game Over! the random number was ${randomNumber}`)
            endGame()
        }else{
            DisplayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    if(guess === randomNumber){
        DisplayMessage(`You Guessed it right`)
        endGame()
    }else if(guess < randomNumber){
        DisplayMessage(`Guess Higher`)
        
    }else if(guess > randomNumber){
        DisplayMessage(`Guess Lower`)
        
    }
    
}
function DisplayGuess(guess){
    userInput.value = ""
    guessSlot.innerHTML += `${guess} `
    numGuess++
    remaining.innerHTML = `${11-numGuess}`
}
function DisplayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
    userInput.value = ""
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}
function newGame(){
    const newGameButton = document.querySelector('#newGame')
    
    newGameButton.addEventListener('click',function(e){
        let randomNumber = parseInt((Math.random()*100)+1)
        prevGuess = []
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true 
    })
}

