const img = document.getElementById('cookie')
const count = document.getElementById('clicker__counter')
const speed = document.getElementById('clicker__speed')
let newDate = Date.now()
let newCount = +count.textContent
img.onclick = function() {
  const diffTime = ((1 / (Date.now() - newDate)) * 1000).toFixed(2)
  newDate = Date.now()
  speed.textContent = diffTime
  count.textContent = newCount++
  img.width === 150 ? img.width = 200 : img.width = 150
}