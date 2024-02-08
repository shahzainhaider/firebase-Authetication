import {
  auth,
  get,
  child,
  query,
  equalTo,
  orderByChild,
  ref,
  db,
  signInWithEmailAndPassword,
  googleProvider,
  signInWithPopup,
  githubProvider,
  facebookProvider,
} from "../firebaseConfig.js";

let email = document.getElementById("email");
let password = document.getElementById("pass");
let googleBtn = document.getElementById("googleBtn");
let githubBtn = document.getElementById("githubBtn");
let fbBtn = document.getElementById("fbBtn");

window.onload = () => {
  let user = localStorage.getItem("user");
  if (user !== null) {
    window.location.pathname = "/";
  }
};

//Google login
googleBtn.addEventListener("click", handleGoogleAuth);
function handleGoogleAuth() {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      localStorage.setItem("user", JSON.stringify(result.user));
      window.location.pathname = "/";
    })
    .catch((error) => {
      console.log(error.message);
    });
}

//github login
githubBtn.addEventListener("click", handleGithubAuth);
function handleGithubAuth(e) {
  signInWithPopup(auth, githubProvider)
    .then((result) => {
      localStorage.setItem("user", JSON.stringify(result.user));
      window.location.pathname = "/";
    })
    .catch((error) => {
      console.log(error.message);
    });
}

//facebook login
fbBtn.addEventListener("click", handleFacebookAuth);
function handleFacebookAuth() {
  signInWithPopup(auth, facebookProvider)
    .then((result) => {
      localStorage.setItem("user", JSON.stringify(result.user));
      window.location.pathname = "/";
    })
    .catch((error) => {
      console.log(error.message);
    });
}

// normal login
document.getElementById("form").addEventListener("submit", handleSubmit);

async function handleSubmit(e) {
  e.preventDefault();
  var userRef = ref(db, "users");
  var data = query(userRef, orderByChild("email"), equalTo(email.value));
   let user = await get(data)
   console.log(user.val())

  // .then((data) => {
  //   console.log("hello");
  //   console.log(data.val());
  //   let user = Object.values(data.val())[0]
  //   console.log(user)
    localStorage.setItem('user',JSON.stringify(Object.values(user.val())[0]))
  // })
  // .catch((error) => {
  //   console.log(error.message);
  // });

 
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log("Successfully login");
      // if (data.user.emailVerified === false) {
      //   alert("please verify your email");
      //   return;
      // }
      // localStorage.setItem("user", JSON.stringify(data.user));
      window.location.pathname = "/";
    })
    .catch((error) => {
      console.log(error.message);
    });
}
