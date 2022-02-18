/* eslint-disable no-unused-vars */
const btnShowAnswer = document.querySelector('.btnShowAnswer');
const answerText = document.querySelector('.answer');
const inputs = document.querySelectorAll('[data-js="input-area"]');



inputs?.forEach(item => {
  const inputCounter = item.querySelector('[data-js="input-counter"]');
  item.addEventListener('input', e => {
    if (item.value.length <= 100) {
      inputCounter.textContent = e.target.value.length + "/" + 100;
    // eslint-disable-next-line no-empty
    } else {
    }
  });
})              


























btnShowAnswer?.addEventListener('click', () => {
  answerText.classList.toggle('answer');
  if (btnShowAnswer.textContent === 'Show answer') {
    btnShowAnswer.textContent = 'Hide answer';
  } else {
    btnShowAnswer.textContent = 'Show answer';
  }
});









/*questionInput?.addEventListener("input", () => {
  if (questionInput.value.length <= 50) {
    questionCounter.textContent =
      questionInput.value.length + "/" + 50;
  // eslint-disable-next-line no-empty
  } else {
  }
});

answerInput?.addEventListener("input", () => {
  if (answerInput.value.length <= 100) {
    answerCounter.textContent =
      answerInput.value.length + "/" + 100;
  // eslint-disable-next-line no-empty
  } else {
  }
});
*/