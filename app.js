const menu = document.querySelector('.mobile-menu');
const menuItems = document.querySelector('.nav-items')

menu.addEventListener('click', e => {
    menu.classList.toggle('active');
    menuItems.classList.toggle('active');
});

// Displaying Signup Section
const signupNav = document.querySelector('.nav-item-btn');
const signupBtn = document.querySelector('.signup-btn');

const signupSection = document.querySelector('.signup-section');


signupBtn.addEventListener('click', e => {
    e.preventDefault();
    signupSection.style.display = "block";
});

signupNav.addEventListener('click', e => {
    e.preventDefault();
    signupSection.style.display = "block";
});

// Closing Sign up Section

const signupClose = document.querySelector('.signup-close');

signupClose.addEventListener('click', e => {
    // e.preventDefault();
    signupSection.style.display = "none";
});

signupSection.addEventListener('click', e => {
    // e.preventDefault();
    if(e.target.className === "signup-section"){
        signupSection.style.display = "none";
    }
});

// Validation
function showEerror(input, message){
    const error = input.parentElement.querySelector('p');
    error.style.display = "block";
    error.innerText = message;
    input.classList.remove('valid');
    input.classList.add('error');
}
function noError(input){
    const error = input.parentElement.querySelector('p');
    error.style.display = "none";
    input.classList.remove('error');
    input.classList.add('valid');
}

function checkField(inputArr){
    let count = 0;
    let message = "";
    let noErrorCount = 0;
    inputArr.forEach(input => {
        
        count += 1;
        // console.log(input);
        if(input.value.trim().length < 1){
            message = `${input.getAttribute('name').charAt(0).toUpperCase()}${input.getAttribute('name').slice(1)} Required`;
        }

        switch(count){
            case 1: if(input.value.trim().length < 4){
                message = `Name must atleast 4 characters long.`;
            }else if(input.value.trim().length > 8){
                message = `Name must be less than 8 characters`;
            }
            break;
            case 3: if(input.value.trim() !== inputArr[3].value.trim()){
                message = "Passwords does not match!";
            } 
            break;
            case 4: if(input.value.trim() !== inputArr[2].value.trim()){
                message = "Passwords does not match!";
            } 
            break;
        }

        if(message){
            noErrorCount -= 1;
            showEerror(input, message);
            message="";
        }else{
            noError(input);
            noErrorCount += 1;
        }

        
    });
    if(noErrorCount === 4){
        console.log(noErrorCount);
        return true;
    }else{
        return false;
    }
}

const form = document.querySelector('.signup-form');
form.addEventListener('submit', e => {
    e.preventDefault();
    const valid = checkField([form.name, form.email, form.password[0], form.password[1]]);
    // form.reset();
    console.log(valid);
    if(valid){
        form.reset();
        form.name.classList.remove("error");
        form.name.classList.remove("valid");
        form.password[0].classList.remove("error");
        form.password[0].classList.remove("valid");
        form.password[1].classList.remove("error");
        form.password[1].classList.remove("valid");
        form.email.classList.remove("error");
        form.email.classList.remove("valid");
        
        signupSection.style.display = "none";
    }


});