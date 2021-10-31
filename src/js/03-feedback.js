
import throttle from 'lodash.throttle'

const form = document.querySelector('.feedback-form')


const STORAGE_KEY = 'feedback-form-state';
const formData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', saveInLocalStorage);
form.addEventListener('input', throttle(onInputData, 500))


function onInputData(evt) {
    console.log(evt.target.name)
    console.log(evt.target.value)
    formData[evt.target.name] = evt.target.value;
    console.log(formData)
}


initForm();


// (отправка формы)
function onFormSubmit(evt) {
    evt.preventDefault();
    console.log('отправкa');
    evt.target.reset();
    localStorage.removeItem(STORAGE_KEY);
}

    
 // (запись в localStorage)
function saveInLocalStorage(evt) {
    const message = JSON.stringify(formData);
    // console.log(message)
    localStorage.setItem(STORAGE_KEY, message)
}
    
//(восстановление из localStorage)
function initForm(evt) {
    let savedMessage = localStorage.getItem(STORAGE_KEY)
    // console.log(savedMessage)
if (savedMessage) {
    savedMessage = JSON.parse(savedMessage)
    Object.entries(savedMessage).forEach(([email, message]) => {
        console.log([email, message])
        form.elements[email].value = message;
    })
}
  }
  


