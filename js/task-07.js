const inputEl = document.querySelector('input#font-size-control');
const textEl = document.querySelector('#text');


inputEl.addEventListener("input", () => {
  // console.log(inputEl.value);
  textEl.style.fontSize = Number.parseInt(inputEl.value) + 'px';
})
