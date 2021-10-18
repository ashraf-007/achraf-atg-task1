//DOM elements
const createAccount = document.getElementById('create-account')
const loginAvatar = document.getElementById('login-avatar')
const join = document.getElementById('btn-join')
const leave = document.getElementById('btn-leave')
const locationInput = document.getElementById('location-input')
const joinLeaveBtn = document.getElementById('join')
const terms = document.getElementById('terms')
const google = document.getElementById('google')
const fb = document.getElementById('fb')
const formCta = document.getElementById('form-cta')
const confirmPasword = document.getElementById('confirm-password')
const names = document.getElementById('names')
const title = document.getElementById('title')
const signInBtn = document.getElementById('sign-in-btn')
const email = document.getElementById('email')
const signInText = document.getElementById('sign-in')
const formActionMobile = document.getElementById('form-action')
const forgotPasswordText = document.getElementById('forgot-password')
const navbar = document.getElementById("nav")
const inputToggleIcon = document.getElementById('input-toggle-icon')

let width
//Booleans
let haveAccount = false
let isIn = true
let isLogged = false

//Mobile Nav Logic
joinLeaveBtn.addEventListener('click', () => {
   isIn = !isIn
   joinLeaveBtn.innerText = isIn ? 'Join Group' : 'Leave Group'
})


//Handle Hide Elements
function hideElement(nav, btn) {
   nav.style.display = 'none'
   btn.style.display = 'none'
}

//Handle Show Elements

function showElement(nav, btn) {
   nav.style.display = 'block'
   btn.style.display = 'block'
}

// Toggle Elements Function
function toggleElements() {
   if (isLogged) {
      hideElement(createAccount, join)
      showElement(loginAvatar, leave)
      inputToggleIcon.src = './assets/x-icon.svg'
      locationInput.value = ''
   }
   if (!isLogged) {
      hideElement(loginAvatar, leave)
      showElement(createAccount, join)
      inputToggleIcon.src = './assets/edit-icon.svg'
      locationInput.value = 'Noida, India '
   }
}

// Desktop Nav bar Login Logic
createAccount.addEventListener('click', () => {
   isLogged = !isLogged
   toggleElements()
})

loginAvatar.addEventListener('click', () => {
   isLogged = !isLogged
   toggleElements()
})

// Toggle Form elements Fucntion
function toggleForm() {

   haveAccount = !haveAccount
   signInText.innerHTML = !haveAccount ? 'Already have an account ? <span id="sign-in-btn" class="font-weight-bold">Sign In</span>' : 'Don’t have an account yet? <span id="sign-in-btn" class="font-weight-bold">Create new for free!</span>'
   google.children[1].innerText = haveAccount ? 'Sign In with Google' : 'Sign up with Google'
   fb.children[1].innerText = haveAccount ? 'Sign In with Facebook' : 'Sign up with Facebook'
   formCta.innerText = haveAccount ? 'Sign In' : 'Create Account'
   terms.style.display = haveAccount ? 'none' : 'block'
   names.style.display = haveAccount ? 'none' : 'block'
   confirmPasword.style.display = haveAccount ? 'none' : 'block'
   email.style.borderTop = haveAccount ? 'none' : '1px solid #D9D9DB'
   formActionMobile.innerText = !haveAccount ? 'or, Sign in' : 'or, Create account'
   forgotPasswordText.innerText =  haveAccount ? 'Forgot Password?' : 'By signing up, you agree to our Terms & conditions, Privacy policy'
   handleForgotPassword()

}

// Toggle Form Events
signInText.addEventListener('click', toggleForm)
formActionMobile.addEventListener('click', toggleForm)



// Sticky Nav Bar Logic

function handleStickyNav() {
   let sticky = navbar.offsetTop

   if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
   } else {
      navbar.classList.remove("sticky")
   }

}

function handleForgotPassword(){

if(width === true  || window.innerWidth <=955 ){
   forgotPasswordText.style.display = 'block'
   title.innerText = haveAccount ? 'Welcome Back!' : 'Create Account'

}else{   
   title.innerText = haveAccount ? 'Sign In' : 'Create Account'

   if(haveAccount === true){
      forgotPasswordText.style.display = 'block'

   }else{
      forgotPasswordText.style.display = 'none'
   }
}
}


   function handleWindowResize(){
      let widthCondition = window.innerWidth <= 995
      width = widthCondition 
      handleForgotPassword()
   }

window.addEventListener('resize' ,handleWindowResize)
window.addEventListener('scroll', handleStickyNav)
window.addEventListener('load', handleForgotPassword)