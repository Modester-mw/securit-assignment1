const form = document.getElementById('form');
const username = document.getElementById('username').value;
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');
const submit = document.getElementById('submit')

submit.addEventListener("click", checkInputs);
form.addEventListener('Register', function(event){
    event.preventDefault(); 

    checkInputs();
});

var is_visible = false;

function eye()
{
    var input = document.getElementById("password");
    var eye = document.getElementById("eye");
    
    if(is_visible)
    {
        input.type = 'password';
        is_visible = false; 
        eye.style.color='gray';
    }
    else
    {
        input.type = 'text';
        is_visible = true; 
        eye.style.color='#262626';
    }
    
}


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




function check()
{
    var input = document.getElementById("password").value;
    
    input=input.trim();
    document.getElementById("password").value=input;
    document.getElementById("length").innerText="Count-Password Length : " + input.length;
    if(input.length>=8)
    {
        document.getElementById("char8cter").style.color="green";
    }
    else
    {
       document.getElementById("char8cter").style.color="red"; 
    }
    
    if(input.length<=10)
    {
        document.getElementById("char10cter").style.color="green";
    }
    else
    {
       document.getElementById("char10cter").style.color="red"; 
    }
    
    if(input.match(/[0-9]/i))
    {
        document.getElementById("numcharacter").style.color="green";
    }
    else
    {
       document.getElementById("numcharacter").style.color="red"; 
    }
    
    if(input.match(/[^A-Za-z0-9-' ']/i))
    {
        document.getElementById("speccharacter").style.color="green";
    }
    else
    {
       document.getElementById("speccharacter").style.color="red"; 
    }
    
    
    
}


 



