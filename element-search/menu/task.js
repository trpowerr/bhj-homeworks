const itemMenuLink = document.querySelectorAll('a.menu__link')

for (i = 0; i < 9; i++) {
  itemMenuLink.item(i).onclick = function() {
    const itemMenuSubActive = document.querySelector('ul.menu_active')
    const closeItem = itemMenuSub.classList.contains('menu_active')
    
    if (itemMenuSubActive !== null) {
      itemMenuSubActive.classList.remove('menu_active')
    }
    if (closeItem === false && itemMenuSub !== null) {
      itemMenuSub.classList.add('menu_active')
    }
    return false
  }
  const itemMenuSub = itemMenuLink.item(i).closest('li.menu__item').querySelector('ul.menu.menu_sub')
}