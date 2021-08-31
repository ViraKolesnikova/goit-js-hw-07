const textInputEl = document.querySelector('#name-input');
const guestNameEl = document.querySelector('#name-output')

textInputEl.addEventListener('input', onInputChange) 
  

function onInputChange(event) {
  // console.log(event.currentTarget.value);
  return event.currentTarget.value ? guestNameEl.textContent = event.currentTarget.value : guestNameEl.textContent = 'незнакомец'
}