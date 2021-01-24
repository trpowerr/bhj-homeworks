const fontSize = document.querySelectorAll('.font-size')

for (let value in [...fontSize]) {
  [...fontSize][value].addEventListener('click', (event) => {
    event.preventDefault()
    const fontSizeActiv = document.querySelector('.font-size_active')
    const fontSizeToggle = event.target.getAttribute('data-size')
    fontSizeActiv.classList.remove('font-size_active')
    event.target.classList.add('font-size_active')
    bookSize(fontSizeToggle)
  })
}

function bookSize(size) {
  const book = document.querySelector('.book')
  book.className = 'book'
  if (size != null) {
    book.classList.add(`book_fs-${size}`)
  }
}