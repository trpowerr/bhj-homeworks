const rotCase = document.querySelectorAll('.rotator__case')

function rotate(){
  let value = 0;
  return function (){
    const prevCase = document.querySelector('.rotator__case_active')
    prevCase.classList.remove('rotator__case_active');
    [...rotCase][value].classList.add('rotator__case_active');
    value === ([...rotCase].length - 1) ? value = 0 : value++;
  }
}

setInterval(rotate(), 1000)