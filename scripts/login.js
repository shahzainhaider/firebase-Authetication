import { auth, signInWithEmailAndPassword } from "../firebaseConfig.js";


let email = document.getElementById('email')
let password = document.getElementById('pass')

window.onload=()=>{
    let user  = localStorage.getItem('user')
    if(user !== null){
        window.location.pathname='/'
    }
}

document.getElementById('form').addEventListener('submit',handleSubmit)

function handleSubmit(e){
    e.preventDefault()

    signInWithEmailAndPassword(auth,email.value,password.value)
    .then((data)=>{
        console.log("Successfully login")
        if(data.user.emailVerified ===false){
            alert('please verify your email')
            return
        }

        localStorage.setItem('user',JSON.stringify(data.user))
        window.location.pathname = '/'

    })
    .catch((error)=>{
        console.log(error.message)
    })


}