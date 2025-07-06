const userName = document.querySelector('#name');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const feedback = document.querySelector('#textarea');
const formWrapper = document.querySelector('#form-wrapper');
const innerWrapper = document.querySelector('.inner-wrapper');
const submitted = document.querySelector('.submitted-form')
const submittedForm = document.querySelector('.submitted-form');

formWrapper.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('form submitted');

  formWrapper.style.display = 'none';
  submittedForm.style.display = 'flex';
});

const resetBtn = document.querySelector('#reset-form');

resetBtn.addEventListener('click', () => {
  formWrapper.reset(); // resets all fields
  formWrapper.style.display = 'flex';
  submittedForm.style.display = 'none';
});
