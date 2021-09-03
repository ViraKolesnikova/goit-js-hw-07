const amountInputEl = document.querySelector('input');
const createBtnEl = document.querySelector('[data-action = "render"]');
const removeBtnEl = document.querySelector('[data-action = "destroy"]');
const boxesContainerEl = document.querySelector('#boxes');


createBtnEl.addEventListener('click', createBoxes);
removeBtnEl.addEventListener('click', removeBoxes);


function createBoxes() {
  const boxes = [];
  
  for (let i = 1; i <= getAmountValue(); i += 1) {
    const newBox = document.createElement('div');
    newBox.style.width = '30px';
    newBox.style.height = '30px';
    newBox.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
    boxes.push(newBox);
  }  
  
  for (let i = 1; i < boxes.length; i += 1){
    boxes[i].style.height = Number.parseInt(boxes[0].style.height) + 10 * i + 'px';
    boxes[i].style.width = Number.parseInt(boxes[0].style.width) + 10 * i + 'px';
  };

  boxesContainerEl.append(...boxes);
  amountInputEl.value = '';
}

function getAmountValue() {
 let result = amountInputEl.value;
  return result;
}

function removeBoxes() {
  boxesContainerEl.innerHTML = '';
  amountInputEl.value = '';
}
