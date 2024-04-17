const categoriesUl = document.getElementById('categories');
const categories = categoriesUl.querySelectorAll('.item');
const numberOfCategories = categories.length;
    console.log('Number of categories: ' + numberOfCategories);
categories.forEach(function(category) {
const categoryTitle = category.querySelector('h2').innerText;
const categoryItems = category.querySelectorAll('li');
const numberOfItems = categoryItems.length;
  console.log('Category: ' + categoryTitle);
  console.log('Elements: ' + numberOfItems);
});