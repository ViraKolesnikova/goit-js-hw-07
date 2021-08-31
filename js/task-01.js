const categoryItemEl = document.querySelectorAll('.item');
console.log(`В списке ${categoryItemEl.length} категории.`);

const itemsEl = document.querySelectorAll('.item > ul');
const titleEl = document.querySelectorAll('h2');

categoryItemEl.forEach(item => {
  const titleEl = item.querySelector('h2');
  console.log(`Категория: ${titleEl.textContent}`);
  const itemsEl = item.querySelector('.item > ul');
  console.log(`Количество элементов: ${itemsEl.children.length}`);  
})
