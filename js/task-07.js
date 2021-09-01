const inputEl = document.querySelector('input#font-size-control');
const textEl = document.querySelector('#text');

inputEl.min = '0';
inputEl.max = '100';
inputEl.step = '1';

textEl.style.fontSize = '20px';
let inputValue = Number(inputEl.value);


inputEl.addEventListener("input", () => {
  console.log(inputValue);
  textEl.style.fontSize = inputValue + 'px';
})



// function onTextElFontSizeChange(event) {
//   console.log(inputValue);
// }