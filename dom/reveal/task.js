const contentBlock = document.querySelectorAll('.reveal')

for(let value in [...contentBlock]) {
  document.addEventListener('scroll', () => {
    const viewport = window.innerHeight
    const elTop = [...contentBlock][value].getBoundingClientRect().top
    if (viewport > (elTop + 100) && elTop > -100) {
      //значения ±100 только для демонстрации работы
      [...contentBlock][value].classList.add('reveal_active')
    } else {
      [...contentBlock][value].classList.remove('reveal_active')
    }
  })
}