/* eslint-disable no-unused-vars */
const btnShowAnswer = document.querySelector('.btnShowAnswer');
const answerText = document.querySelector('.answer');
const inputs = document.querySelectorAll('[data-js="textarea"]');

inputs.forEach(item => {
  const inputCounter = item.querySelector('[data-js="input-counter"]');
  const inputArea = item.querySelector('[data-js="input-area"]');
  inputArea.addEventListener('input', () => {
    if (inputArea.value.length <= 100) {
      inputCounter.textContent = inputArea.value.length + '/' + 100;
      // eslint-disable-next-line no-empty
    } else {
    }
  });
});

btnShowAnswer?.addEventListener('click', () => {
  answerText.classList.toggle('answer');
  if (btnShowAnswer.textContent === 'Show answer') {
    btnShowAnswer.textContent = 'Hide answer';
  } else {
    btnShowAnswer.textContent = 'Show answer';
  }
});
