let role = document.getElementById('role')
let navigation = document.getElementById('navigation')
let signout = document.getElementById('signout')
let user = undefined
    if(!(localStorage.getItem('user'))){
        window.location.pathname = '/pages/login'
    }
    if(localStorage.getItem('user')){
         user = JSON.parse(localStorage.getItem('user'))
        role.innerText = user.role

    }
console.log(user)
let userNav = [
    {
        name:'home',
        link:'/'
    },
    {
        name:'products',
        link:'/pages/products/'
    }
]
let adminNav = [
    {
        name:'home',
        link:'/'
    },
    {
        name:'admin',
        link:'/pages/admin/'
    }
]


function nav(role){
    role.map((e,id)=>{
        return navigation.innerHTML += `
     <li key=${id}>
     <a href='${e.link}'>${e.name}</a>
     </li>
     `
     })
}

if(user.role ==='admin'){
    nav(adminNav)
}else{
    nav(userNav)
}

signout.addEventListener('click',handleSignout)
function handleSignout (){
    localStorage.removeItem('user')
    location.reload()
}

