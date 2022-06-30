// header starts

var menu = document.querySelector('#drawer');
var navbar = document.querySelector('.navbar');
var searchForm = document.querySelector('.search-form');
var dropDown = document.querySelector('#dropdown');
var dropDown_content = document.querySelector('.dropdown-content');


menu.addEventListener('click', function(){
  menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    dropDown_content.classList.remove('active');

})

window.addEventListener('scroll', function(){
  menu.classList.remove('fa-times');
    navbar.classList.remove('active')
    dropDown_content.classList.remove('active');

})


document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    dropDown_content.classList.remove('active');

}


dropDown.addEventListener('click', function(){
  dropDown_content.classList.toggle('active');
  searchForm.classList.remove('active');

})

//header ends



// account Section Starts

function emptyFieldValues(){
  var email = document.getElementById('email');
  var pswd = document.getElementById('password');

  email.value= "";
pswd.value = "";

}
function fieldValues() {
var email = document.getElementById('email').value;
var pswd = document.getElementById('password').value;

if (email === '') {
  alert('Email is Required');
} else {
  console.log(`Email = ${email}  Password = ${pswd}`);
}
emptyFieldValues();
}


function goToSignUp() {
  var signUpPage = document.getElementById("signUp-Body");
    var signInPage = document.getElementById("signIn-Body");
    signInPage.classList.toggle("signIn");
    signUpPage.classList.toggle("signUpBody");

}


// var accountBack = document.querySelector('.signIn-Body');

// document.querySelector('div .signup').onclick = () =>{
//   alert("hello");
//   // searchForm.classList.toggle('active');
//   // navbar.classList.remove('active');
//   // dropDown_content.classList.remove('active');

// }
// var accountBack = document.querySelector('.signIn-Body');
// var SignUp = document.querySelector('.signup');
// SignUp.addEventListener('click', function(){
// alert("hello")
// })


// account Section ends