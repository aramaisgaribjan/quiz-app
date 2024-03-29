/* eslint-disable no-unused-vars */
const buttons = document.querySelectorAll('[data-js="btnArea"]');

buttons.forEach(answer => {
  const answers = answer.querySelector('[data-js="answers"]');
  const btnShowAnswer = answer.querySelector('[data-js="btnShowAnswer"]');
  btnShowAnswer.addEventListener('click', () => {
    answers.classList.toggle('answer');
    if (btnShowAnswer.textContent === 'Show answer') {
      btnShowAnswer.textContent = 'Hide answer';
    } else {
      btnShowAnswer.textContent = 'Show answer';
    }
  });
});

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

const btnHome = document.querySelector('a[href="#index"]');
const btnCreate = document.querySelector('a[href="#create"]');
const createSection = document.querySelector('#create');
const homeSection = document.querySelector('#index');

btnCreate?.addEventListener('click', () => {
  createSection.classList.remove('displayNone');
  hideHomeSection();
});

btnHome?.addEventListener('click', () => {
  homeSection.classList.remove('displayNone');
  hideCreateSection();
});

function hideHomeSection() {
  homeSection.classList.add('displayNone');
}
function hideCreateSection() {
  createSection.classList.add('displayNone');
}
