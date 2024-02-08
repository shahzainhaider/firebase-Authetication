import {
  createUserWithEmailAndPassword,
  auth,
  sendEmailVerification,set,ref,db
} from "../firebaseConfig.js";

let email = document.getElementById("email");
let password = document.getElementById("password");
let cPassword = document.getElementById("cPassword");

document.getElementById('form').addEventListener('submit',handleSubmit)


function handleSubmit(e){
  e.preventDefault()
  // if (password.value !== cPassword.value) {
  //   alert("incorrect confirm password");
  //   email.value = "";
  //   password.value = "";
  //   cPassword.value = "";
  //   return;
  // }

  let data  = {
    email:email.value,
    role:'admin'
  }
  let timeStamp = new Date().getTime()
  set(ref(db,`users/${timeStamp}`),data)
  .then((snap)=>{
    console.log('user added')

  })
  .catch((error) => {
    console.log(error.message);
  });     
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
