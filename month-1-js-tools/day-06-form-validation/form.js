const userName = document.querySelector('#name');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const feedback = document.querySelector('#textarea');
const formWrapper = document.querySelector('#form-wrapper')


formWrapper.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('form submitted');
    
})
