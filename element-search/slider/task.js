const itemPrev = document.querySelector('.slider__arrow_prev')
const itemNext = document.querySelector('.slider__arrow_next')
const sliderItem = document.querySelectorAll('.slider__item')
const sliderDotItem = document.querySelectorAll('.slider__dot')
let itemNum = 0

function changeSlide(itemNum) {
  sliderItem[itemNum].classList.add('slider__item_active')
}

itemPrev.onclick = () => {
  sliderItem[itemNum].classList.remove('slider__item_active')
  if (itemNum == 0) {
    itemNum = (sliderItem.length - 1)
  } else {
    itemNum -= 1
  }
  changeSlide(itemNum)
}

itemNext.onclick = () => {
  sliderItem[itemNum].classList.remove('slider__item_active')
  if (itemNum == (sliderItem.length - 1)) {
    itemNum = 0
  } else {
    itemNum += 1
  }
  changeSlide(itemNum)
}
