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
