const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputElFocusOut);
inputEl.addEventListener('focus', onInputElFocus);

function onInputElFocusOut(event) {
  // console.log(inputEl.value.length);
  // console.log(inputEl.dataset.length);
  let allowedInputLength = Number(inputEl.dataset.length);
  
  if (inputEl.value.length === allowedInputLength) {
    return inputEl.classList.add('valid');
  }
  return inputEl.classList.add('invalid');
}

function onInputElFocus(event) {
  return inputEl.classList.remove('invalid', 'valid');
}
