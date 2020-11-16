// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI elements
const game = document.getElementById("game"),
      minNum = document.querySelector(".min-num"),
      maxNum = document.querySelector(".max-num"),
      guessBtn = document.getElementById("guess-value"),
      guessInput = document.getElementById("guess-input"),
      message = document.querySelector(".message");

// Assign UI min and max
minNum.textContent = min
maxNum.textContent = max

// play again event listener
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    // reload page
    window.location.reload()
  }
})

// Create event listener
guessBtn.addEventListener("click", function(){
  // console.log("button clicked")
  
  let guess = parseInt(guessInput.value)

  // console.log(`Value of guess ${guess}`)

  // validate
  if(isNaN(guess) || guess < min || guess > max){
    // console.log("Set message about to be called")
    setMessage(`Please enter a number between ${min} and ${max}`, 'red')
  }

  // Check if won
  if(guess === winningNum){
    // Game over won

    gameOver(true, `${winningNum} is correct. You win`)

  } else {
    // Wrong number
    guessesLeft -= 1

    if(guessesLeft === 0){
      // Game over lost
      // Disable input
      gameOver(false, `Game over, you lost. The correct number was ${winningNum}`)

    } else {
      // Game continues - answer wrong
      // Make border green
      guessInput.style.borderColor = 'red'
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left.`, 'red')

      guessInput.value = ''
    }
  }
})


function setMessage(msg, color){
  // console.log("inside setMessage")
  // console.log(`Value of message ${msg}`)
  message.style.color = color
  message.textContent = msg
}

function gameOver(won, msg){
    let color;

    won === true ? color = 'green': color = 'red'
    //  Disable input
    guessInput.disabled = true

    guessInput.style.borderColor = color

    setMessage(msg, color)
    
    // Play again
    guessBtn.value = "Play again"
    guessBtn.className += 'play-again'
}


function getRandomNum(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}










