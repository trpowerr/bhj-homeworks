const countDead = document.getElementById('dead')
const countLost = document.getElementById('lost')

let newCountDead = +countDead.textContent
let newCountLost = +countLost.textContent

for (i = 1; i < 10; i++) {
  let hole = document.getElementById('hole' + i)
  hole.onclick = function() {
    if (hole.className === 'hole hole_has-mole'){
      countDead.textContent = newCountDead++
    } else {
      countLost.textContent = newCountLost++
    }
    if (newCountDead === 10 || newCountLost === 5) {
      newCountLost === 5 ? alert('Lose') : alert('Win')
      countDead.textContent = 0
      countLost.textContent = 0
    }
  }
}
