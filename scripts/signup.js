import {
  createUserWithEmailAndPassword,
  auth,
  sendEmailVerification
} from "../firebaseConfig.js";

let email = document.getElementById("email");
let password = document.getElementById("password");
let cPassword = document.getElementById("cPassword");

document.getElementById('form').addEventListener('submit',handleSubmit)


function handleSubmit(e){
  e.preventDefault()
  if (password.value !== cPassword.value) {
    alert("incorrect confirm password");
    email.value = "";
    password.value = "";
    cPassword.value = "";
    return;
  }
  // user creating
  createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((data) => {
    console.log('User created successfully')
    verifyUserEmail(data.user)
  })
  .catch((error) => {
    console.log(error.message);
  });
}

function verifyUserEmail(user){
  sendEmailVerification(user)
  .then(()=>{
    alert('Email send successfully')
    window.location.pathname = '/pages/login'
  })
  .catch((error)=>{
    console.log(error.message)
  })


}
