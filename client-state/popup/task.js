//document.cookie = 'stateActiveClass=; Expires=Thu, 01 Jan 1970 00:00:00 GMT'; //  чистка куков
const newModal = document.querySelector('.modal')
const closeModal = document.querySelector('.modal__close')
if(document.cookie.includes('true')||!document.cookie.length) {
  document.cookie = 'stateActiveClass=true'
}

function modalClose() {
  newModal.classList.remove('modal_active')
  document.cookie = 'stateActiveClass=false'
}

function reload() {
  if(document.cookie.includes('false')) {
    newModal.classList.remove('modal_active')
  }
}

closeModal.addEventListener('click', modalClose)
document.addEventListener('DOMContentLoaded', reload)
