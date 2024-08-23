

let productsIncart; 
let productDom = document.querySelector('.product');
let nodrowProducDom = document.querySelector('.nodrowProduc')
if(productsIncart){
    let items =JSON.parse(productsIncart);
    drowProductsUi(items);
}
function drowProductsUi(allProducts = []){
    if(JSON.parse(localStorage.getItem("productsIncart")).length === -1){
       nodrowProducDom.innerHTML ="there is no items";
    }
    let products =JSON.parse(localStorage.getItem("productsIncart"))|| allProducts;
    let productsUi = products.map((item) =>{
      return ` 
      <div class="product-item">
                  <img src="${item.imgUrl}" alt="image" class="proItem-img">
                  <div class="proItem-desc">
                      <h2>${item.title}</h2>
                      <p>${item.description}</p>
                      <span>Size: ${item.size}</span><br>
                      <span>Qountaty: ${item.qty}</span>

                  </div>
                  <div class="proItem-action">
                      <button class="add-cart" onclick="removeItem(${item.id})">Remove From Cart</button>
                      
                  </div>
              </div>`;
    } );
    productDom.innerHTML = productsUi.join("");
  }
  drowProductsUi();
  
  function removeItem(id){
    let productsIncart = localStorage.getItem("productsIncart");
    if(productsIncart){
        let items = JSON.parse(productsIncart);
        let fiterItem = items.filter((item) => item.id !== id);
        console.log(fiterItem);
        localStorage.setItem("productsIncart", JSON.stringify(fiterItem));
        drowProductsUi(fiterItem);
       // localStorage.setItem("productInCarts" , JSON.stringify(fiterItem));
    }

  }