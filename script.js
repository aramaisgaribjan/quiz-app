/* eslint-disable no-unused-vars */
const btnShowAnswer = document.querySelector('.btnShowAnswer');
const answerText = document.querySelector('.answer');
const questionInput = document.querySelector('[data-js="question-input-area"]');
const counter = document.querySelector('[data-js="input-counter"]');
const answerInput = document.querySelector('[data-js="answer-input-area"]');

btnShowAnswer?.addEventListener('click', () => {
  answerText.classList.toggle('answer');
  if (btnShowAnswer.textContent === 'Show answer') {
    btnShowAnswer.textContent = 'Hide answer';
  } else {
    btnShowAnswer.textContent = 'Show answer';
  }
});

questionInput?.addEventListener("input", () => {
  if (questionInput.value.length <= 50) {
    counter.textContent =
      questionInput.value.length + "/" + 50;
  // eslint-disable-next-line no-empty
  } else {
  }
});

questionInput?.addEventListener("input", () => {
  if (questionInput.value.length <= 50) {
    counter.textContent =
      questionInput.value.length + "/" + 50;
  // eslint-disable-next-line no-empty
  } else {
  }
});