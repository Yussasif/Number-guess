'use strict';
let secretNumber = Math.trunc(Math.random() * 20 + 1)



let score = 20
let highScore = 0


document.querySelector('.check').addEventListener('click',

function () {


let guess = Number(document.querySelector('.guess').value)




if (!guess){

    document.querySelector('.message').textContent = 'Enter A Number Greater Than Zero...'
}
else if(guess === secretNumber){

    document.querySelector('.message').textContent = 'Number Correct...'

    document.querySelector('.number').textContent = secretNumber

    document.querySelector('body').style.backgroundColor = '#60b347'

    document.querySelector('.number').style.width = '30rem'

    modal.style.backgroundColor = '#0e3103'
        modalBigText.textContent = 'YOU W0N'
        document.querySelector('.play-again').textContent = 'Play Again'

    openModal()

    if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }

    document.getElementById('check-btn').disabled = true

}
else if(guess > secretNumber && guess <= 20){
   
    if(score > 1){
        document.querySelector('.message').textContent = 'Your Guess is High...'
        score--
        score = Number(document.querySelector('.score').textContent = score)
        document.querySelector('.modal-score').textContent ='Your Score: '+ score
    }
    else{
        document.querySelector('.message').textContent = 'You Lost Try Again...'
        score = Number(document.querySelector('.score').textContent = 0)

        modal.style.backgroundColor = '#e90606'
        modalBigText.textContent = 'YOU LOST'
        document.querySelector('.play-again').textContent = 'Try Again'
        openModal()

    }
}
else if(guess < secretNumber){

    if(score > 1){
        document.querySelector('.message').textContent = 'Your Guess is Low...'
        score--
        score = Number(document.querySelector('.score').textContent = score)
    }
    else{
        document.querySelector('.message').textContent = 'You Lost Try Again...'
        score = Number(document.querySelector('.score').textContent = 0)

        modal.style.backgroundColor = '#e90606'
        modalBigText.textContent = 'YOU LOST'
        document.querySelector('.play-again').textContent = 'Try Again'
        openModal()
    }
}
else if (guess > 20){
    document.querySelector('.message').textContent = 'Your Guess should be between 1 and 20...'
}

}
)


document.addEventListener('keydown',

function(e) {

    if (e.key === 'Enter') {

let guess = Number(document.querySelector('.guess').value)




if (!guess){

    document.querySelector('.message').textContent = 'Enter A Number Greater Than Zero...'
}
else if(guess === secretNumber){

    document.querySelector('.message').textContent = 'Number Correct...'

    document.querySelector('.number').textContent = secretNumber

    document.querySelector('body').style.backgroundColor = '#60b347'

    document.querySelector('.number').style.width = '30rem'

    openModal()

    if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }

    document.getElementById('check-btn').disabled = true

}
else if(guess > secretNumber && guess <= 20){
   
    if(score > 1){
        document.querySelector('.message').textContent = 'Your Guess is High...'
        score--
        score = Number(document.querySelector('.score').textContent = score)
        document.querySelector('.modal-score').textContent ='Your Score: '+ score
    }
    else{
        document.querySelector('.message').textContent = 'You Lost Try Again...'
        score = Number(document.querySelector('.score').textContent = 0)

        modal.style.backgroundColor = '#e90606'
        modalBigText.textContent = 'YOU LOST'
        document.querySelector('.play-again').textContent = 'Try Again'
        openModal()

    }
}
else if(guess < secretNumber){

    if(score > 1){
        document.querySelector('.message').textContent = 'Your Guess is Low...'
        score--
        score = Number(document.querySelector('.score').textContent = score)
    }
    else{
        document.querySelector('.message').textContent = 'You Lost Try Again...'
        score = Number(document.querySelector('.score').textContent = 0)

        modal.style.backgroundColor = '#e90606'
        modalBigText.textContent = 'YOU LOST'
        document.querySelector('.play-again').textContent = 'Try Again'
        openModal()
    }
}

else if (guess > 20){
    document.querySelector('.message').textContent = 'Your Guess should be between 1 and 20...'
}

}
}
)




document.querySelector('.again').addEventListener('click', function (){

    score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('.message').textContent = 'Start Guessing...';

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem'

  document.getElementById('check-btn').disabled = false
}
)


document.querySelector('.play-again').addEventListener('click', function (){

    score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('.message').textContent = 'Start Guessing...';

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem'

  document.getElementById('check-btn').disabled = false
  closeModal()
}
)









let modal = document.querySelector('.modal')
let btncloseModal = document.querySelector('.close-modal')
let overlay = document.querySelector('.overlay')
function closeModal (){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')

}

function openModal(){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

btncloseModal.addEventListener('click', closeModal)

document.addEventListener('keydown', function(e){
    if (e.key === 'Escape'){
        if (!modal.classList.contains('hidden'))
        closeModal()
    }

})


let modalBigText = document.querySelector('.modal-h1')
