const form = document.getElementById('form');
const fname = document.getElementById('first name');
const lname = document.getElementById('last name');
const email = document.getElementById('email');
const textarea = document.getElementById('textarea');


// Show input error message
function showError(input, message){
    const formControl = input.parentElement; 
    formControl.className = 'real-form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
    
}

// Show Success outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'real-form-control success';
}

//Check email is valid
function checkEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if( re.test(input.value.trim())) {
        showSuccess(input.value);
    } else {
        showError(input, 'Email is not Valid');
    }
}

// Check required fields
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

// Get fieldname
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listeners
form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([fname, lname, email]);
    checkEmail(email);
});