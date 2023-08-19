import throttle from 'lodash.throttle';
const data = { };
const form = document.querySelector(".feedback-form");
const email = document.querySelector('[name="email"]')
const textarea = document.querySelector('[name="message"]')
const LOCALST_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onInput, 500));
function onInput(event) {
    data[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(data))
}
form.addEventListener('submit', onSubmit);
function onSubmit() {
    localStorage.removeItem('feedback-form-state');
    reset(form);
}
window.addEventListener('load', onLoad);
function onLoad() {
    const dataOn = JSON.parse(localStorage.getItem('feedback-form-state'))
    console.log(dataOn)
    
    if (dataOn) {
        textarea.value = dataOn.message? dataOn.message : '' ;
        email.value = dataOn.email
    }
    
    console.log()

}