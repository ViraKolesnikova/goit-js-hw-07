const categoryItemEl = document.querySelectorAll('.item');
console.log(`В списке ${categoryItemEl.length} категории.`);

const titleEl = document.querySelectorAll('h2');
const itemsEl = document.querySelectorAll('.item > ul');

const newCategoryItemEl = [...itemsEl].forEach(item => {
  console.log(`Количество элементов: ${item.children.length}`);
})

  



// for (let i = 0; i < titleEl.length; i += 1) {
//   console.log(`Категория: ${titleEl[i].textContent}`);
// }
// for (let item of itemsEl) {
//   console.log(`Количество элементов: ${item.children.length}`);
// }


// const categoriesForEl = document.querySelector('ul#categories');
// const categories = categoriesForEl.querySelectorAll('li.item');

// let totalCategories = categories.length;
// console.log(`В списке ${totalCategories} категории.`);

// const itemNew = [...categories];
// console.log(itemNew);
// console.log(categories);
// const ItemsEl = itemNew.map(element => {
//   console.log('Категория: ', element.querySelector(`.item > h2`).innerHTML);
//   const listEl = element.querySelectorAll([`.item > ul >li`]);
//   console.log('Количество элементов: ', listEl.length);
// });