const buttonsEl = document.querySelectorAll('#counter button');
const counterValue = document.querySelector('#value');


console.log(buttonsEl[0].dataset.action);
console.log(buttonsEl[1].dataset.action);
buttonsEl[0].addEventListener('click', onDecrementBtnClick);
buttonsEl[1].addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick(event) {
  if(counterValue.textContent>0) 
  return counterValue.textContent -= 1;  
}

function onIncrementBtnClick(event) {
  return counterValue.textContent = Number(counterValue.textContent) + 1;
}