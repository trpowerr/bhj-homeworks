const textArea = document.querySelector('#editor')
const textValue = []

function localStSave(e) {
  textValue.push(e.key)
  localStorage.setItem('value', textValue)
}

function reload() {
  textArea.value = localStorage.getItem('value').replace(/,/gi,'')
}

textArea.addEventListener('keypress', localStSave)
document.addEventListener('DOMContentLoaded', reload)