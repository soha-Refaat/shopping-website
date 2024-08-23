
// ******************************

let productDom = document.querySelector('.product');

let products = productsDB;

let drowProductsUi;
(drowProductsUi = function drowProductsUi(products = []){
  let productsUi = products.map((item) =>{
    return ` 
    <div class="product-item" style="border: ${item.isMe==='Y' ?"2px solid green":""}">
                <img src="${item.imgUrl}" alt="image" class="proItem-img">
                <div class="proItem-desc">
                    <a onclick="saveItemData(${item.id})">${item.title}</a>
                    <p>${item.description}</p>
                    <span>Size: ${item.size}</span>
                    ${item.isMe ==='Y' &&"<button class='edit-product' onclick='EditProduct("+item.id+")'> Edit Product </button>"}
                </div>
                <div class="proItem-action">
                    <button class="add-cart" onclick="addToCart(${item.id})">Add To Cart</button>
                    <!-- <i class="fa fa-shopping-cart" aria-hidden="true"></i> -->
                    <i class="favorite far fa-heart" style = "color: ${item.liked==true ? 'red': ''}" onclick="addToFavorite(${item.id})" ></i>
                </div>
            </div>`;
  } );
  productDom.innerHTML = productsUi.join("");
})(JSON.parse(localStorage.getItem("products"))||products);
// drowProductsUi();

// let addItem =localStorage.getItem("productsIncart")? JSON.parse(localStorage.getItem("productsIncart")):[] ;
// if(addItem){
//   addItem.map(item  => {
//     cardsProductDivMenue.innerHTML += `<p>${item.title} ${item.qty}</p>`;
  
//   });
//   padgeDom.style.display = 'block';
//   padgeDom.innerHTML += addItem.length;
// }


function addToCart(id){
  if(localStorage.getItem("username")){
    // Window.location= "cardProduct.html";
    let products = JSON.parse(localStorage.getItem("products"))|| products;
  let product = products.find((item) => item.id === id);
  let uniProducCart= addItem.some((i) => i.id === product.id);
  if(uniProducCart){
    addItem = addItem.map((p) => {
      if(p.id === product.id) p.qty+=1;
      return p;
    });
  }else{
    addItem.push(product);
  }
  cardsProductDivMenue.innerHTML="";
  addItem.forEach(item => {
  cardsProductDivMenue.innerHTML += `<p>${item.title} ${item.qty}</p>`;
    
  });
  // cardsProductDivMenue.innerHTML += `<p>${chossItem.title}</p>`;
  // addItem = [...addItem , chossItem];
  // let uniqProduct = getUniqe(addItem , "id");
  localStorage.setItem("productsIncart",JSON.stringify(addItem))
  let cartItemLength = document.querySelectorAll('.cartsProduct div p');
  padgeDom.style.display = 'block';
  padgeDom.innerHTML = cartItemLength.length;
  }else{
    Window.location = "login.html";
  }
}

function getUniqe(arr , filterType){
  let uniqe = arr.map((item) => item[filterType]).map((item , i , arr2) => arr2.indexOf(item) === i && i)
  .filter((item) => arr[item]).map((item) => arr[item]);
  return uniqe;
  

}


let input = document.querySelector("#search");
input.addEventListener('keyup', function(e){
   
    search(e.target.value, JSON.parse(localStorage.getItem("products")));
   
   if(e.target.value .trim === ""){
    drowProductsUi(JSON.parse(localStorage.getItem("products")));
   }
});

function saveItemData(id){
  localStorage.setItem("productId", id);
  window.location = "cartdetails.html"
}
function search(title , myArray){
 let arr = myArray.filter((item) => item.title.tolowerCase().indexOf(title.tolowerCase()) !== -1);
 drowProductsUi(arr);
  }

  let favoriteItems =localStorage.getItem("productsFavorite")? JSON.parse(localStorage.getItem("productsFavorite")):[] ;
function addToFavorite(id){
  if(localStorage.getItem("username")){
    // Window.location= "cardProduct.html";
  let chossItem = products.find((item) => item.id === id);
  chossItem.liked = true;
  favoriteItems = [...favoriteItems , chossItem];
  let uniqProduct = getUniqe(favoriteItems , "id");
  localStorage.setItem("productsFavorite",JSON.stringify(uniqProduct));
  // localStorage.setItem("productsFavorite",JSON.stringify(favoriteItems))
  products.map((item) => {
    if(item.id === chossItem.id){
      item.liked = true;
    }
  })
  localStorage.setItem("products", JSON.stringify(products));
  drowProductsUi(products)

  }else{
    Window.location = "login.html";
  }
}

let sizeFilter =document.getElementById("size-filter");
sizeFilter.addEventListener("change", getProductFilterBySize);
function getProductFilterBySize(e){
  let val = e.target.value;

  let products = JSON.parse(localStorage.getItem("products"))|| products;
  if(val === 'All'){
    drowProductsUi(products);
  }else{
    products = products.filter((i) => i.size ==val)
         drowProductsUi(products);
    
  }
}
function EditProduct(id){
  localStorage.setItem("editProduct" , id);
  window.location = "editProduct.html";
}

