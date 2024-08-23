let cardsProductDivMenue = document.querySelector('.cartsProduct div');
let padgeDom = document.querySelector('.padge');
let cardsProductMenue = document.querySelector('.cartsProduct');

let shoppingCartItem = document.querySelector('.shoppingCart');
shoppingCartItem.addEventListener("click", openCartMenue);

let addItem =localStorage.getItem("productsIncart")? JSON.parse(localStorage.getItem("productsIncart")):[] ;
if(addItem){
  addItem.map(item  => {
    cardsProductDivMenue.innerHTML += `<p>${item.title} ${item.qty}</p>`;
  
  });
  padgeDom.style.display = 'block';
  padgeDom.innerHTML += addItem.length;
}

function openCartMenue(){
  if(cardsProductDivMenue.innerHTML != ""){
   if( cardsProductMenue.style.display == 'block'){
    cardsProductMenue.style.display = 'none';
   }
   else{
    cardsProductMenue.style.display = 'block';
   }
  }
}
