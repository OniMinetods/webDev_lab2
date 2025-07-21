// Task 1 - 2

const likeButton = document.getElementById('task-1');
const disLikeButton = document.getElementById('task-2');

likeButton.addEventListener('click', () => {
  if (disLikeButton.classList.contains('active')) {
    disLikeButton.classList.remove('active');
    console.log('Кнопка 2 деактивирована!');
  }

  likeButton.classList.toggle('active');

  if (likeButton.classList.contains('active')) {
    console.log('Кнопка 1 активирована!');
  } else {
    console.log('Кнопка 1 деактивирована!');
  }
});

disLikeButton.addEventListener('click', () => {
  if (likeButton.classList.contains('active')) {
    likeButton.classList.remove('active');
    console.log('Кнопка 1 деактивирована!');
  }

  disLikeButton.classList.toggle('active');

  if (disLikeButton.classList.contains('active')) {
    console.log('Кнопка 2 активирована!');
    likeButton.removeEventListener('click', () => {});
  } else {
    console.log('Кнопка 2 деактивирована!');
  }
});

// Task 3

const item = document.getElementById('img');
let counter = 0;

function addInto() {
  counter++;
  document.getElementById('counter-value').textContent = counter;
  console.log('Товар добавлен в корзину!');
}

// Task 4

let arr = [2, 4, 3, 5, 1];
let arr2 = arr.slice();
let outputDiv = document.getElementById('output');
let listItems = outputDiv.querySelectorAll('li');
arr.forEach((item) => {
  const li = document.createElement('li');
  li.textContent = item;
  outputDiv.appendChild(li);
});

function sortUp() {
  outputDiv.textContent = '';
  arr.sort();
  arr.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    outputDiv.appendChild(li);
  });
}

function sortDown() {
  outputDiv.textContent = '';
  arr.sort();
  arr.reverse();
  arr.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    outputDiv.appendChild(li);
  });
}

function sortDefault() {
  outputDiv.textContent = '';
  arr2.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    outputDiv.appendChild(li);
  });
}

// Task 5
