let form = document.querySelector('#form');
let userName = document.querySelector("#name");
let lastName = document.querySelector("#lastName");
let feedback = document.querySelector("#textarea");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert(`Thank you ${userName.value} ${lastName.value} for your feedback:\n"${feedback.value}"`);
    form.reset();
});
