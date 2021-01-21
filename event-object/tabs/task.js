  const tabs = document.querySelectorAll('.tab')
  const tabsContent = document.querySelectorAll('.tab__content')
  
  
  for (let value in [...tabs]) {
    [...tabs][value].addEventListener('click', (event) => {
      const tabsActive = document.querySelector('.tab_active')
      tabsActive.classList.remove('tab_active')
      event.target.classList.add('tab_active')
      contSelection(value)
    })
  }

  function contSelection (index) {
    const tabsContentActive = document.querySelector('.tab__content_active')
    tabsContentActive.classList.remove('tab__content_active')
    tabsContent[index].classList.add('tab__content_active')
  }