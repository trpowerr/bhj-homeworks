const itemPrev = document.querySelector('.slider__arrow_prev')
const itemNext = document.querySelector('.slider__arrow_next')
const sliderItem = document.querySelectorAll('.slider__item')
const sliderDotItem = document.querySelectorAll('.slider__dot')
let itemNum = 0

itemPrev.onclick = () => {
  sliderDotItem[itemNum].classList.remove('slider__dot_active')
  sliderItem[itemNum].classList.remove('slider__item_active')
  if (itemNum == 0) {
    itemNum = 4
  } else {
    itemNum -= 1
  }
  sliderDotItem[itemNum].classList.add('slider__dot_active')
  sliderItem[itemNum].classList.add('slider__item_active')
}

itemNext.onclick = () => {
  sliderDotItem[itemNum].classList.remove('slider__dot_active')
  sliderItem[itemNum].classList.remove('slider__item_active')
  if (itemNum == 4) {
    itemNum = 0
  } else {
    itemNum += 1
  }
  sliderDotItem[itemNum].classList.add('slider__dot_active')
  sliderItem[itemNum].classList.add('slider__item_active')
}



// for (i = 0; i < 4; i++) {
//   sliderDotItem.item(i).onclick = (event) => {
//     const dotItem = document.getElementsByClassName('slider__dot_active')
//     dotItem[0].classList.remove('slider__dot_active')
//     //dotItem[i].classList.add('slider__dot_active')
//     event.target.classList.add('slider__dot_active')
//     console.log(event)
//   }
// }
