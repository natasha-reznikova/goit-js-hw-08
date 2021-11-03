import throttle from 'lodash.throttle'

const form = document.querySelector('.feedback-form')

const STORAGE_KEY = 'feedback-form-state';
let formData = {};
    

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInputData, 500))

initForm();


function onInputData(evt) {
    console.log(evt.target.name)
    console.log(evt.target.value)
    formData[evt.target.name] = evt.target.value;
    console.log(formData)
     const message = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, message);
}


// (отправка формы, запись в localStorage)
function onFormSubmit(evt) {
    evt.preventDefault();
    const formElements = evt.target;
    let email = formElements.email.value;
    let message = formElements.message.value;
    if (email === '' || message === '') {
        alert('введите данные')
        return;
    }
    console.log('отправкa');
    evt.target.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = {};
   }
   
    
//(восстановление из localStorage)
function initForm(evt) {
    let savedMessage = localStorage.getItem(STORAGE_KEY)
    savedMessage = JSON.parse(savedMessage)

    // console.log(savedMessage)
    if (savedMessage) {
        form.email.value = savedMessage.email;
        form.message.value = savedMessage.message;
    }
}
