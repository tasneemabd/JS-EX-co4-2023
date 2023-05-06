// let hadeing=document.createElement("div");

// let Mylabel=document.createElement("label");
// let MylabelText=document.createTextNode("username");
// Mylabel.appendChild(MylabelText);
// hadeing.appendChild(Mylabel);


// let Mypassword=document.createElement("label");
// let MypasswordText=document.createTextNode("password");


// Mypassword.appendChild(MypasswordText);
// hadeing.appendChild(Mypassword);

// document.body.appendChild(hadeing);
//----------------------------------------------

//Q1 +2
const usernamelbl = document.querySelector("label[for='usernameInput']");
const passwordlbl = document.querySelector("label[for='passInput']");
const confPasslbl = document.querySelector("label[for='confPassInput']");

// // Set the text content of each label
usernamelbl.textContent = "Username:";
passwordlbl.textContent = "Password:";
confPasslbl.textContent = "Confirm password:";

//Q3
function validation() {
    let x = document.forms['myform']['usernameInput'].value;
    let y = document.forms['myform']['passwordInput'].value;
    let z = document.forms['myform']['confirmPasswordInput'].value;
   
  if (x==="" || y==="" || z==="") {
    alert(`does not have any text entered. `);}
   else  if (x!=="" || y!=="" || z!==""){
    alert(`welcome `);}
   }
 
////Q4
//    function validationpass() {
 
//     let y = document.forms['myform']['passwordInput'].value;
//     let z = document.forms['myform']['confirmPasswordInput'].value;
   
//   if (z===y && x!=="") {
//     alert(`login successful`);}
//    else  {
//     alert(`invalid login `);}
//    }
  //Q5
  //  const nameInput = document.getElementById('usernameInput');
  //  const passwordInput = document.getElementById('passwordInput');
  //  const confirmPasswordInput = document.getElementById('confirmPasswordInput');
  //  const registerButton = document.getElementById('register-button');

  //  function validationbtn() {
  //   const nameValue = nameInput.value.trim();
  //   const passwordValue = passwordInput.value.trim();
  //   const confirmPasswordValue = confirmPasswordInput.value.trim();
  //   if (nameValue !== '' && passwordValue !== '' || confirmPasswordValue !== ''|| passwordValue === confirmPasswordValue) {
  //     registerButton.disabled = false;
  //   } else {
  //     registerButton.disabled = true;
  //   }
  // }
  // nameInput.addEventListener('input',validationbtn);
  // passwordInput.addEventListener('input',validationbtn);
  // confirmPasswordInput.addEventListener('input',validationbtn);
  // registerButton.addEventListener('click',validationbtn);

      
//Q6
   const nameInput = document.getElementById('usernameInput');
   const passwordInput = document.getElementById('passwordInput');
   const confirmPasswordInput = document.getElementById('confirmPasswordInput ');
   const registerButton = document.getElementById('register-button');
function showError(input, message) {
  const errorSpan = document.getElementById(`${input.id}-error`);
  errorSpan.innerHTML = message;
  input.classList.add('error');
}

function removeError(input) {
  const errorSpan = document.getElementById(`${input.id}-error`);
  errorSpan.innerHTML = '';
  input.classList.remove('error');
}
  function validation() {
    const nameValue = nameInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const confirmPasswordValue = confirmPasswordInput.value.trim();
  
    if (nameValue === '') {
      showError(nameInput, 'Name is required');
    } else {
      removeError(nameInput);
    }


    if (passwordValue === '') {
      showError(passwordInput, 'Password is required'); 
    } else {
      removeError(passwordInput);
    }

    if (confirmPasswordValue === '') {
      showError(confirmPasswordInput, 'Confirm Password is required');
   
      removeError(confirmPasswordInput);
    }
  }