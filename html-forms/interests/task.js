document.addEventListener('click', (event) => {
  const element = event.target.closest('li.interest').querySelectorAll('.interest__check')
  for (let value in [...element]) {
    [...element][0].checked ? [...element][value].checked = true : [...element][value].checked = false
  }
})