const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// ===============Розв’язок=============
const ingredientsItems = [];
ingredients.map(item => {
  const element = document.createElement('li')
  element.textContent = item;
  return ingredientsItems.push(element);
})

// console.log(...ingredientsItems);
const ingredientsEl = document.querySelector('ul#ingredients');
ingredientsEl.append(...ingredientsItems);