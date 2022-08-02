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


function bussinessAccountPage() {
  var signUpPage = document.getElementById("signUp-Body");
  var bznsRegPage = document.getElementById("Bzns-form-page");
  signUpPage.classList.remove("signUpBody");
bznsRegPage.classList.toggle("active");
}



function userAccountPage() {
  var signUpPage = document.getElementById("signUp-Body");
  var ctmrRegPage = document.getElementById("cA-form-page");

  signUpPage.classList.remove("signUpBody");
ctmrRegPage.classList.toggle("active");

}




// account Section ends


  // view Recipe 1 rice

  function viewReipe1(){
    var recipe = document.getElementById("recipy-detail");
      recipe.classList.toggle("active");
    }
    
    // remove Recipe
    
    function removeRecipe1(){
      var recipe = document.getElementById("recipy-detail");
      recipe.classList.remove("active");
    }
  



// view Recipe 2 potato

function viewReipe2(){
  var recipe = document.getElementById("recipy-detail2");
    recipe.classList.toggle("active");
  }
  
  // remove Recipe
  
  function removeRecipe2(){
    var recipe = document.getElementById("recipy-detail2");
    recipe.classList.remove("active");
  }



  // view Recipe 3 chicken

function viewReipe3(){
  var recipe = document.getElementById("recipy-detail3");
    recipe.classList.toggle("active");
  }
  
  // remove Recipe
  
  function removeRecipe3(){
    var recipe = document.getElementById("recipy-detail3");
    recipe.classList.remove("active");
  }
  

    // view Recipe 4 Dessert

function viewReipe4(){
  var recipe = document.getElementById("recipy-detail4");
    recipe.classList.toggle("active");
  }
  
  // remove Recipe
  
  function removeRecipe4(){
    var recipe = document.getElementById("recipy-detail4");
    recipe.classList.remove("active");
  }
  
      // view Recipe 5 vegetarian

function viewReipe5(){
  var recipe = document.getElementById("recipy-detail5");
    recipe.classList.toggle("active");
  }
  
  // remove Recipe
  
  function removeRecipe5(){
    var recipe = document.getElementById("recipy-detail5");
    recipe.classList.remove("active");
  }

        // view Recipe 6 drinks

function viewReipe6(){
  var recipe = document.getElementById("recipy-detail6");
    recipe.classList.toggle("active");
  }
  
  // remove Recipe
  
  function removeRecipe6(){
    var recipe = document.getElementById("recipy-detail6");
    recipe.classList.remove("active");
  }


          // view Recipe 7 beef

function viewReipe7(){
  var recipe = document.getElementById("recipy-detail7");
    recipe.classList.toggle("active");
  }
  
  // remove Recipe
  
  function removeRecipe7(){
    var recipe = document.getElementById("recipy-detail7");
    recipe.classList.remove("active");
  }
