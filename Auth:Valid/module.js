const form = document.getElementById('form');
const username = document.getElementById('username').value;
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');
const submit = document.getElementById('submit')

submit.addEventListener("click", checkInputs);
form.addEventListener('submit', function(event){
    event.preventDefault(); 

    checkInputs();
});

function checkInputs(){
    /**get value inputs */
    //const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const confirmpasswordValue = confirmpassword.value;

    if(username === '' ){
        alert('hi')

        /*show erro and add error class*/
        setErrorFor(username, 'username cannot be blank');
    } else {
        setSuccessFor(username);
        //add success class

    }

    if(emailValue === ''){
        setErrorFor(email, 'emails accanot be blank');

    }

    if(passwordValue === ''){
        setErrorFor(password, 'password cannot be blank');
    } else {
        setSuccessFor(password);
    }

    if(confirmpasswordValue === ''){
        setErrorFor(confirmpassword, 'confirmpassword cannot be blank');
    } else if(passwordValue != confirmpasswordValue) {
        setErrorFor(confirmpassword, 'password does not match');

    } else{setSuccessFor(confirmpassword);

    }
        
    
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //add error messae inside email
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


 



