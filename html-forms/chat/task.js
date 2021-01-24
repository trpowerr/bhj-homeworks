const widgetOpen = document.querySelector('.chat-widget')
const messages = document.querySelector('.chat-widget__messages')
const inputUser = document.querySelector('.chat-widget__input')
const date = new Date()

widgetOpen.addEventListener('click', () => {
  widgetOpen.classList.add('chat-widget_active')
})

document.addEventListener('keydown', (event) => {
  if(event.key == 'Enter' && inputUser.value != '') {
    message()
    message()
  } 
})

function message() {
  messages.innerHTML += `
  <div class="${inputUser.value ? 'message_client':'message'}">
    <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
    <div class="message__text">
      ${inputUser.value ? inputUser.value : 'Оператора нет'}
    </div>
  </div>
  `;
  inputUser.value = ''
}
