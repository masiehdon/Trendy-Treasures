// fetches data from the API and displays it on the page
const fetchData = function () {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    createElement(data);
      displayDropDown(data);
   // categoryBtn(data);
    
    })
    .catch((err) => {
      console.log(err);
      handleErr();
    });
};

// function that handles error

const handleErr = function () {
  let alert = document.createElement("p");
  document.body.appendChild(alert);
  alert.textContent =
    "Unable to load the data. click the button to reload the products!";
  let btn = document.createElement("button");
  document.body.appendChild(btn);
  btn.textContent = "Click me!";
  btn.addEventListener("click", function () {
    fetchData();
  });
};


// Creating button which allows the user to select a category

/*

const categoryBtn = function (data) {
  const wrapperDiv = document.createElement("div");
  const startBtnW = document.createElement("button");
  const startBtnM = document.createElement("button");
  const startBtnJ = document.createElement("button");
  const startBtnE = document.createElement("button");

  wrapperDiv.classList.add("wrapperDiv");
  startBtnW.classList.add("btn", "women's clothing");
  startBtnM.classList.add("btn", "men's clothing");
  startBtnJ.classList.add("btn", "jewelry");
  startBtnE.classList.add("btn", "electronics");

  startBtnW.textContent = ("women's clothing").toUpperCase();
  startBtnM.textContent = "men's clothing";
  startBtnJ.textContent = "Jewelry";
  startBtnE.textContent = "Electronics";

  wrapperDiv.appendChild(startBtnW);
  wrapperDiv.appendChild(startBtnM);
  wrapperDiv.appendChild(startBtnJ);
  wrapperDiv.appendChild(startBtnE);

  document.body.appendChild(wrapperDiv);

  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const selectedCategory = data.filter(
        (item) => item.category.toLowerCase() === e.target.classList[1]
      );
      $("#product-list").html("");
      fetchData();
      createElement(selectedCategory);
    
    });
  });categoryBtn(fetchData())
}; 
 */


// defining a function to show the content on the page


document.addEventListener("DOMContentLoaded", function () {
  const createStartBtn = function () {
    // start button factory function

    const wrapperDiv = document.createElement("div");
    const startBtn = document.createElement("button");
    wrapperDiv.classList.add("wrapperDiv");
    startBtn.classList.add("startBtn");
    startBtn.textContent = "Explore our products".toUpperCase();
    wrapperDiv.appendChild(startBtn); // append the button to the wrapper div
    document.body.appendChild(wrapperDiv); // append the wrapper div to the document body
    startBtn.addEventListener("click", function () {
      // add click event to the button
     
     fetchData();
 
      $(".wrapperDiv").hide();
      
    });
  };

  createStartBtn(); // create and append the button to the DOM
  
});



// creating dropdownMenu

const displayDropDown = function (data) {
  toggleDescription();
  let parentdiv = document.querySelector(".dropdown");
  let parentDivList = document.getElementById("categoryList");

  let dropdownMenuBtn = `
     <div>
         <button class="dropDownMenuBtn">Categories</button>
       <div> `;
  let dropDownList = `
  
       <li class="allProducts dropdownMenu">All Products</li>
        <ul class="dropdownMenu">
          <li class="women's clothing">Ladies</li>
          <li class="men's clothing">Gens</li>
          <li class="jewelery">Jewelry</li>
          <li class="electronics">Electronic</li>
        </ul>
        </div>
      </div>`;
  parentDivList.innerHTML = dropdownMenuBtn;
  parentdiv.innerHTML = dropDownList;
  $(".dropDownMenuBtn").click(function () {
    $(".dropdownMenu").slideToggle();
  });

  let dropdownMenuList = document.querySelectorAll(".dropdownMenu li");
  const urlParams = new URLSearchParams(window.location.search);
  dropdownMenuList.forEach(function (item) {
    item.addEventListener("click", function (e) {
      urlParams.append('category', e.target.className);
      const selectedCategory = data.filter(
        (item) => item.category === e.target.className,
        

        // Selecting all products

        $(".allProducts").click(function () {
          urlParams.delete('category');
          $("#product-list").html("");
          createElement(data);
          toggleDescription();
        })
      );
      $("#product-list").html("");
      createElement(selectedCategory);
      toggleDescription();
    });
  });
};

// appends the API elements to the product lis

const createElement = function (data) {
  const header = document.getElementById("header");
  header.innerHTML = `
  <div id="categoryList"></div>
  <div id="tt">
    <h1>Trendy Treasures</h1>
  </div>
  <div id="icons">
      <img id="member" class = "icon" src="user.png" alt="login" title="Login" />
      <img id="cart" class = "icon" src="shopping-cart.png" alt="cart" title = "See your cart" />
      <img id="home" class = "icon" src="home.png" alt="home" title = "HOME" />
   
    </div>`;

  let products = "";
  data.forEach((values) => {
    products += `<div class="product">
                  <p >${values.category.toUpperCase()}</p>
                <img class="product-img" src=${values.image} >
                <h2 class="productTitle">${values.title}</h2>
                <div id= "btnWrapper">
                <button class= "displayDescription btn">Show more</button>
                <button class= "addToCartBtn btn">Add to cart</button>
                <p class="description">${values.description}</p>
                </div>
                <p class= "price">Price: ${values.price}$</p>
                <p class="rating"><span class=star >${printStars(
                  values.rating.rate
                )}</span> (${values.rating.count}) </p>            
              </div>`;
  });

  const parantElement = document.getElementById("product-list");
  parantElement.innerHTML += products;

  const footer = document.getElementById("footer");

  footer.innerHTML = `<section class="about">
<h3>ABOUT</h3>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, eveniet dolor? At, maxime veritatis. Voluptatem ratione sapiente sequi. Beatae eum maiores iusto expedita at quisquam consequatur necessitatibus id aliquam quaerat?</p>
</section>
<div id="infoWrapper">
<section class="socialMedia">
<ul>
<li><a href="#" class="fa fa-twitter"></a></li>
<li><a href="#" class="fa fa-facebook"></a></li>
<li><a href="#" class="fa fa-instagram"></a></li>
<li><a href="#" class="fa fa-linkedin"></a></li>
</ul>
</section>
<section class="policy">
<ul>
<li>About us</li>
<li>Contact</li>
<li>Privacy Policy</li>
<li>FAQ</li>
</ul>
</section>
</div>`;
};

//defining a function for handling a click event to show or hide product description
const toggleDescription = function () {
  $(".displayDescription").click(function () {
    console.log("Toggle is ok");
    $(this).siblings(".description").slideToggle();
    $(this).text($(this).text() == "Show more" ? "Show less" : "Show more");
  });
};

// Converting ratings from the api to stars
const printStars = function (number) {
  number = Number(number);
  let result = "";
  for (let i = 0; i < number; i++) {
    result += "*";
  }
  return result;
};
