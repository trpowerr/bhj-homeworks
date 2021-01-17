const newModal = document.getElementById('modal_main')
newModal.classList.add('modal_active')

const success = document.getElementsByClassName('show-success')
const newModalSuccess = document.getElementById('modal_success')
success.item(0).onclick = function() {
  newModal.classList.remove('modal_active')
  newModalSuccess.classList.add('modal_active')
}

const close = document.querySelectorAll('div.modal__close_times')
const modal = document.querySelector('.modal__content')
function f ([...param]){
  for (let value in param) {
    param[value].onclick = function() {
      modal.closest('.modal').classList.remove('modal_active')
    }
  }
}
f(close)

const btnGoodJob = document.querySelector('a.btn_success')
btnGoodJob.onclick = function() {
  newModalSuccess.classList.remove('modal_active')
}

