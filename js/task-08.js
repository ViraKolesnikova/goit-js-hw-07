const amountInputEl = document.querySelector('input');
const createBtnEl = document.querySelector('[data-action = "render"]');
const removeBtnEl = document.querySelector('[data-action = "destroy"]');
const boxesContainerEl = document.querySelector('#boxes');

amountInputEl.addEventListener('blur', getAmountValue);
createBtnEl.addEventListener('click', createBoxes);
// removeBtnEl.addEventListener('click', removeBoxes);

function getAmountValue() {
  let result = amountInputEl.value
  return result;
}

function createBoxes(amount) {
  const boxes = [];
  console.log(boxes);
  while (boxes.length !== amount) {
    boxes.push(document.createElement('div'));
  }
  console.log(boxes);
}

// function removeBoxes() {
//   boxesContainerEl.innerHTML = '';
// }
