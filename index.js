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