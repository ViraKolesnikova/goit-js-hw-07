const categoryItemEl = document.querySelectorAll('.item');
console.log(`В списке ${categoryItemEl.length} категории.`);


categoryItemEl.forEach(item => {
  const titleEl = item.querySelector('h2');
  console.log(`Категория: ${titleEl.textContent}`);
  const itemsEl = item.querySelector('.item > ul');
  console.log(`Количество элементов: ${itemsEl.children.length}`);  
})
