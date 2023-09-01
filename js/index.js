const btn  = document.getElementById('action');
const modal = document.querySelector('.layout')
const content = modal.querySelector('.layout-content')

function openModal(){
   modal.classList.add('show')
   content.classList.add('isOpacity')
}

function closeModal(){
   modal.classList.remove('show')
   content.classList.remove('isOpacity')
}

btn.addEventListener('click', openModal)

modal.addEventListener('click', e => {
   if(e.target.classList.contains('layout')){
      closeModal()
   }
})