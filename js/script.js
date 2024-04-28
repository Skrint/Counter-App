const div = document.querySelector('.app');

let counter = document.createElement('h1');
counter.textContent = 0;

const buttonIncreaseCounter = document.createElement('button');
buttonIncreaseCounter.textContent = '+1 Бассейн';
buttonIncreaseCounter.classList.add('btn', 'btn-primary', 'fs-3', 'mb-3');

const buttonResetCounter = document.createElement('button');
buttonResetCounter.textContent = 'Сбросить';
buttonResetCounter.classList.add('btn', 'btn-danger', 'fs-3');

div.prepend(counter, buttonIncreaseCounter, buttonResetCounter);

buttonIncreaseCounter.addEventListener('click', () => {
  counter.textContent++;
});

buttonResetCounter.addEventListener('click', () => {
  counter.textContent = 0;
});
