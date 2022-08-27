// header starts

var menu = document.querySelector('#drawer');
var navbar = document.querySelector('.navbar');
var searchForm = document.querySelector('.search-form');
var dropDown = document.querySelector('#dropdown');
var dropDown_content = document.querySelector('.dropdown-content');


menu.addEventListener('click', function () {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
  dropDown_content.classList.remove('active');

})

window.addEventListener('scroll', function () {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active')
  dropDown_content.classList.remove('active');

})


document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
  dropDown_content.classList.remove('active');

}


dropDown.addEventListener('click', function () {
  dropDown_content.classList.toggle('active');
  searchForm.classList.remove('active');

})

//header ends



// account Section Starts

function emptyFieldValues() {
  var email = document.getElementById('email');
  var pswd = document.getElementById('password');

  email.value = "";
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



// recipe drawer
function visibleDrawer() {
  var navbarr = document.querySelector('.recipe-navbar');
  navbarr.classList.toggle('active');
}
function visible() {
  var dropDown_content = document.querySelector('.rspy-dropdown-content');
  dropDown_content.classList.toggle('active');

}


// window.addEventListener('scroll', function(){
//   var navbarr = document.querySelector('.recipe-navbar');
//   navbarr.classList.remove('active');

// })

// view Recipe 1 rice

function viewReipe1() {
  var recipe = document.getElementById("recipy-detail");
  recipe.classList.toggle('active');
}

// remove Recipe

function removeRecipe1() {
  var recipe = document.getElementById("recipy-detail");
  recipe.classList.remove("active");
}




// view Recipe 2 potato

function viewReipe2() {
  var recipe = document.getElementById("recipy-detail2");
  recipe.classList.toggle("active");
}

// remove Recipe

function removeRecipe2() {
  var recipe = document.getElementById("recipy-detail2");
  recipe.classList.remove("active");
}



// view Recipe 3 chicken

function viewReipe3() {
  var recipe = document.getElementById("recipy-detail3");
  recipe.classList.toggle("active");
}

// remove Recipe

function removeRecipe3() {
  var recipe = document.getElementById("recipy-detail3");
  recipe.classList.remove("active");
}


// view Recipe 4 Dessert

function viewReipe4() {
  var recipe = document.getElementById("recipy-detail4");
  recipe.classList.toggle("active");
}

// remove Recipe

function removeRecipe4() {
  var recipe = document.getElementById("recipy-detail4");
  recipe.classList.remove("active");
}

// view Recipe 5 vegetarian

function viewReipe5() {
  var recipe = document.getElementById("recipy-detail5");
  recipe.classList.toggle("active");
}

// remove Recipe

function removeRecipe5() {
  var recipe = document.getElementById("recipy-detail5");
  recipe.classList.remove("active");
}

// view Recipe 6 drinks

function viewReipe6() {
  var recipe = document.getElementById("recipy-detail6");
  recipe.classList.toggle("active");
}

// remove Recipe

function removeRecipe6() {
  var recipe = document.getElementById("recipy-detail6");
  recipe.classList.remove("active");
}


// view Recipe 7 beef

function viewReipe7() {
  var recipe = document.getElementById("recipy-detail7");
  recipe.classList.toggle("active");
}

// remove Recipe

function removeRecipe7() {
  var recipe = document.getElementById("recipy-detail7");
  recipe.classList.remove("active");
}

// deal section count down work
var countDate = new Date('august 15, 2022 00:00:00').getTime();

function countDown() {
  var now = new Date().getTime();
  diff = countDate - now;

  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;

  var d = Math.floor(diff / (day));
  var h = Math.floor((diff % (day)) / (hour));
  var m = Math.floor((diff % (hour)) / (minute));
  var s = Math.floor((diff % (minute)) / (second));

  document.getElementById('day').innerText = d;
  document.getElementById('hour').innerText = h;
  document.getElementById('minute').innerText = m;
  document.getElementById('second').innerText = s;

};
setInterval(function () {
  countDown()
}, 1000);


// add to cart start

"use strict";
let cart = [];
let cartTotal = 0;
const cartDom = document.querySelector(".cart");
// const addtocartbtnDom = document.querySelectorAll('[data-action="add-to-cart"]');
const addtocartbtnDom = document.querySelectorAll(".addToCart");
// console.log(addtocartbtnDom);

addtocartbtnDom.forEach(addtocartbtnDom => {
  addtocartbtnDom.addEventListener("click", () => {
    const productDom = addtocartbtnDom.parentNode.parentNode;
    const product = {
      img: productDom.querySelector("img").getAttribute("src"),
      name: productDom.querySelector(".name").innerText,
      price: productDom.querySelector(".price").innerText,
      quantity: 1
    };
    const IsinCart = cart.filter(cartItem => cartItem.name === product.name).length > 0 ;
    if (IsinCart === false) {
      cartDom.insertAdjacentHTML("beforeend", `
  <div class="d-flex flex-row shadow-sm card cart-items mt-2 mb-3 animated flipInX">
    <div class="p-2">
        <img src="${product.img}" alt="${product.name}" style="max-width: 50px;"/>
    </div>
    <div class="p-2 mt-3">
        <p class="text-info cart_item_name">${product.name}</p>
    </div>
    <div class="p-2 mt-3">
        <p class="text-success cart_item_price">${product.price}</p>
    </div>
    <div class="p-2 mt-3 ml-auto">
        <button class="btn badge badge-secondary" type="button" data-action="increase-item">&plus;
    </div>
    <div class="p-2 mt-3">
      <p class="text-success cart_item_quantity">${product.quantity}</p>
    </div>
    <div class="p-2 mt-3">
      <button class="btn badge badge-info" type="button" data-action="decrease-item">&minus;
    </div>
    <div class="p-2 mt-3">
      <button class="btn badge badge-danger" type="button" data-action="remove-item">&times;
    </div>
  </div> `)

      if (document.querySelector('.cart-footer') === null) {
        cartDom.insertAdjacentHTML("afterend", `
      <div class="d-flex flex-row shadow-sm card cart-footer mt-2 mb-3 animated flipInX">
        <div class="p-2">
          <button class="btn badge-danger" type="button" data-action="clear-cart">Clear Cart
        </div>
        <div class="p-2 ml-auto">
          <button class="btn badge-dark" type="button" data-action="check-out">Pay <span class="pay"></span> 
            &#10137;
        </div>
      </div>`);
      }

      addtocartbtnDom.innerText = "In cart";
      addtocartbtnDom.disabled = true;
      cart.push(product);

      const cartItemsDom = cartDom.querySelectorAll(".cart-items");
      // console.log(cartItemsDom)
      cartItemsDom.forEach(cartItemDom => {

        if (cartItemDom.querySelector(".cart_item_name").innerText === product.name) {
          cp = cartItemDom.querySelector(".cart_item_price").innerText;
          dp = cp.slice(8, cp.indexOf("/"));
          cartTotal += parseInt(cartItemDom.querySelector(".cart_item_quantity").innerText)
            * parseInt(dp);
          document.querySelector('.pay').innerText = cartTotal + " Rs.";

          // increase item in cart
          cartItemDom.querySelector('[data-action="increase-item"]').addEventListener("click", () => {
            cart.forEach(cartItem => {
              if (cartItem.name === product.name) {
                console.log(cartItem)
                cartItemDom.querySelector(".cart_item_quantity").innerText = ++cartItem.quantity;
                cartItemDom.querySelector(".cart_item_price").innerText = parseInt(cartItem.quantity) *
                  parseInt(cartItem.price.slice(8, cartItem.price.indexOf("R"))) + " Rs.";
                cartTotal += parseInt(dp)
                document.querySelector('.pay').innerText = cartTotal + " Rs.";
              }
            });
          });

          // decrease item in cart
          cartItemDom.querySelector('[data-action="decrease-item"]').addEventListener("click", () => {
            cart.forEach(cartItem => {
              if (cartItem.name === product.name) {
                if (cartItem.quantity > 1) {
                  cartItemDom.querySelector(".cart_item_quantity").innerText = --cartItem.quantity;
                  cartItemDom.querySelector(".cart_item_price").innerText = parseInt(cartItem.quantity) *
                    parseInt(cartItem.price.slice(8, cartItem.price.indexOf("R"))) + " Rs.";
                  cartTotal -= parseInt(dp)
                  document.querySelector('.pay').innerText = cartTotal + " Rs.";
                }
              }
            });
          });

          //remove item from cart
          cartItemDom.querySelector('[data-action="remove-item"]').addEventListener("click", () => {
            cart.forEach(cartItem => {
              if (cartItem.name === product.name) {
                cartTotal -= parseInt(dp);
                document.querySelector('.pay').innerText = cartTotal + " Rs.";
                cartItemDom.remove();
                cart = cart.filter(cartItem => cartItem.name !== product.name);
                addtocartbtnDom.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>';
                addtocartbtnDom.disabled = false;
              }
              if (cart.length < 1) {
                document.querySelector('.cart-footer').remove();
              }
            });
          });

          //clear cart
          document.querySelector('[data-action="clear-cart"]').addEventListener("click", () => {
            cartItemDom.remove();
            cart = [];
            cartTotal = 0;
            if (document.querySelector('.cart-footer') !== null) {
              document.querySelector('.cart-footer').remove();
            }
            addtocartbtnDom.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>';
            addtocartbtnDom.disabled = false;
          });

          document.querySelector('[data-action="check-out"]').addEventListener("click", () => {
            if (document.getElementById('paypal-form') === null) {
              checkOut();
            }
          });
        }
      });
    }
  });
});

function animateImg(img) {
  img.classList.add("animated", "shake");
}

function normalImg(img) {
  img.classList.remove("animated", "shake");
}

function checkOut() {
  let paypalHTMLForm = `
  <form id="paypal-form" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
    <input type="hidden" name="cmd" value="_cart">
    <input type="hidden" name="upload" value="1">
    <input type="hidden" name="business" value="gmanish478@gmail.com">
    <input type="hidden" name="currency_code" value="INR">`;

  cart.forEach((cartItem, index) => {
    ++index;
    paypalHTMLForm += ` <input type="hidden" name="item_name_${index}" value="${cartItem.name}">
    <input type="hidden" name="amount_${index}" value="${cartItem.price.replace("Rs.", "")}">
    <input type="hidden" name="quantity_${index}" value="${cartItem.quantity}">`;
  });

  paypalHTMLForm += `<input type="submit" value="PayPal" class="paypal">
  </form><div class="overlay">Please wait...</div>`;
  document.querySelector('body').insertAdjacentHTML("beforeend", paypalHTMLForm);
  document.getElementById("paypal-form").submit();
}