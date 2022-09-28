'use strict';



let modal = document.querySelector('.modal')

let btncloseModal = document.querySelector('.close-modal')

let btnshowModal = document.querySelectorAll('.show-modal')

let overlay = document.querySelector('.overlay')

function showModal() {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

function closeModal(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

for (let i = 0; i < btnshowModal.length; i++)

btnshowModal[i].addEventListener('click', showModal)

btncloseModal.addEventListener('click', closeModal)

overlay.addEventListener('click',  closeModal)

document.addEventListener('keydown', function(e){
    if (e.key === 'Escape'){
        if (!modal.classList.contains('hidden'))
    closeModal()
}})





