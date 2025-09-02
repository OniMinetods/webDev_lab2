// Task 1 - 2

const likeButton = document.getElementById('task-1');
const disLikeButton = document.getElementById('task-2');

likeButton.addEventListener('click', () => {
  const disLikeButtonState = disLikeButton.hasAttribute('active');
  if (disLikeButtonState) {
    likeButton.toggleAttribute('active');
    disLikeButton.toggleAttribute('active');
  } else {
    likeButton.toggleAttribute('active');
  }
});

disLikeButton.addEventListener('click', () => {
  const likeButtonState = likeButton.hasAttribute('active');
  if (likeButtonState) {
    likeButton.toggleAttribute('active');
    disLikeButton.toggleAttribute('active');
  } else {
    disLikeButton.toggleAttribute('active');
  }
});

// Task 3
let counter = 0;

function addInto() {
  counter += 1;
  document.getElementById('counter-value').textContent = counter;
}

const buttons = document.querySelectorAll('.img');
buttons.forEach((button) => {
  button.addEventListener('click', addInto);
});

// Task 4

const arr = [2, 4, 3, 5, 1];
const arr2 = arr.slice();
const outputDiv = document.getElementById('output');
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

const buttonUp = document.getElementById('btn-1');
const buttonDown = document.getElementById('btn-2');
const buttonDefault = document.getElementById('btn-3');

buttonUp.addEventListener('click', sortUp);
buttonDown.addEventListener('click', sortDown);
buttonDefault.addEventListener('click', sortDefault);

// Task 5
document.addEventListener('click', (event) => {
  const coordDisplay = document.getElementById('location');
  coordDisplay.textContent = `X = ${event.clientX}, Y = ${event.clientY}`;
});
