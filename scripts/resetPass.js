import {auth, sendPasswordResetEmail } from "../firebaseConfig.js";


let email = document.getElementById("email");

document.getElementById('form').addEventListener('submit',handleSubmit)


function handleSubmit(e){
    e.preventDefault()

    sendPasswordResetEmail(auth,email.value)
    .then(()=>{
        alert(`Email has Successfully send to ${email.value} !!`)
    })
    .catch((error)=>{
        console.log(error.message)
    })
}

