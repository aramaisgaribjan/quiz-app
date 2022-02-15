const btnShowAnswer = document.querySelector('.btnShowAnswer');
const answerText = document.querySelector('.answer');

btnShowAnswer.addEventListener('click', () => {
  answerText.classList.toggle('answer');
  if (btnShowAnswer.textContent === 'Show answer') {
    btnShowAnswer.textContent = 'Hide answer';
  } else {
    btnShowAnswer.textContent = 'Show answer';
  }
});
