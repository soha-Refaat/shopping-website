let productDom = document.querySelector('.product');
let nodrowProducDom = document.querySelector('.nodrowProduct')

let products = JSON.parse(localStorage.getItem("products"))||productsDB;


let drowProductsUi;
(drowProductsUi = function drowProductsUi(products = []){
    let myProducts = products.filter((item) => item.isMe ==='Y');
    if(myProducts.length != 0){
  let productsUi = myProducts.map((item) =>{
    return ` 
    <div class="product-item" style="border: ${item.isMe==='Y' ?"2px solid green":""}">
                <img src="${item.imgUrl}" alt="image" class="proItem-img">
                <div class="proItem-desc">
                    <a onclick="saveItemData(${item.id})">${item.title}</a>
                    <p>${item.description}</p>
                    <span>Size: ${item.size}</span>
                    <div class="btn-myProduct">
                    <button class='edit-product' onclick='EditProduct(${item.id})'> Edit Product </button>
                    <button class='edit-product' onclick='DeleteProduct(${item.id})'> Delete Product </button>
                    </div>
                </div>
               
            </div>`;
  } );

  productDom.innerHTML = productsUi.join("");
}
  else{
    nodrowProducDom.innerHTML = " No Products!! ";
  }
})(JSON.parse(localStorage.getItem("products"))||productsDB);

function EditProduct(id){
  localStorage.setItem("editProduct" , id);
  window.location = "editProduct.html";
}
function DeleteProduct(id) {
  let products = JSON.parse(localStorage.getItem("products")) || productsDB;
  let myProducts = products.filter((item) => item.isMe ==='Y');
  let filtered = myProducts.filter((i) => i.id !== id);
  
  let clickedItem = myProducts.find((i) => i.id === id);
  products = products.filter((i) => i.id !== clickedItem.id);
  localStorage.setItem("products", JSON.stringify(products));
  drowProductsUi(filtered);
  
}