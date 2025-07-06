const userName = document.querySelector('#name');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const feedback = document.querySelector('#textarea');
const formWrapper = document.querySelector('#form-wrapper')


formWrapper.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('form submitted');
    formWrapper.innerHTML = `
                            <div class="submitted-form">
                        <h1>Form Successfully Submitted!!!</h1>
                        <p>Thank you for submitting your feedback!</p>
                        <button id="reset-form">Reset Form</button>
                        </div>  
                  `
    let resetBtn = document.querySelector('#reset-form');
resetBtn.addEventListener('click', () => {
    formWrapper.reset()
})
})

