const count = document.getElementById('timer')
let i = +count.textContent
const newCount = setInterval(() => {
  if (i === 0) {
    location.assign("https://lh3.googleusercontent.com/proxy/DkT149dZ-8ZIxz-1wSem3x9nI32Zy46uOERnAUok_rdCdPIKjO03YhcOvcNsh5sl8NzUrj0O4x8Kx_j3mg539SNO8VY");
    alert('Вы победили в конкурсе')
    clearInterval(newCount)
  }
  if (i < 10) {
    count.textContent = `00:00:0${i--}`
  } else {
    count.textContent = `00:00:${i--}`
  }
}, 1000);
