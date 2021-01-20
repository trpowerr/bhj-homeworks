const dropDownList = document.querySelector('.dropdown__list')
const dropDownValue = document.querySelector('.dropdown__value')
const dropDownItem = document.querySelectorAll('li.dropdown__item')


dropDownValue.addEventListener('click', function(){
  dropDownList.classList.toggle('dropdown__list_active')
})

for (let value in [...dropDownItem]){
  [...dropDownItem][value].addEventListener('click', function(event){
    event.preventDefault()
    console.log(event.target.textContent)
    dropDownValue.textContent = event.target.textContent
    dropDownList.classList.remove('dropdown__list_active')
  })
}