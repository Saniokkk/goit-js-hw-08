import throttle from 'lodash/throttle';


const feedbackForm = document.querySelector('.feedback-form');
let feedbackFormState = {};
checkLocaleStorage()

feedbackForm.addEventListener('input', throttle(completeInputInStorage, 500));
feedbackForm.addEventListener('submit', clickOnSubmit);

function completeInputInStorage(event) {   

    feedbackFormState[event.target.name] = event.target.value;

    localStorage.setItem("feedback-form-state", JSON.stringify(feedbackFormState)); 
    
};

function clickOnSubmit(event) {
    event.preventDefault();
    if (event.target.email.value === ''
        || event.target.message.value === '') {
        alert('Все поля должны быть заполнены!!!');
    } else {
        event.currentTarget.reset();
        console.log(feedbackFormState);
        localStorage.removeItem("feedback-form-state");
        feedbackFormState = {};
    }
};

function checkLocaleStorage() {
    const localStorageData = JSON.parse(localStorage.getItem("feedback-form-state"));

    if (!localStorageData) {
        return;
    }
    if (localStorageData.message) {
        feedbackForm.message.value = localStorageData.message;
    }
    if (localStorageData.email) {
        feedbackForm.email.value = localStorageData.email;
    }
}
