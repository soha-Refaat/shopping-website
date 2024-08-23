let products =JSON.parse(localStorage.getItem('products'));
let productId = localStorage.getItem("productId");
let itemDom = document.querySelector(".item-details");
let productDetails = products.find((item) =>item.id == productId);
console.log(productDetails);
itemDom .innerHTML = `<img src="${productDetails.imgUrl}" alt="">
            <h2>${productDetails.title}</h2>
            <p>${productDetails.description}</p>
            <span>Size: ${productDetails.size}</span><br>
            <span>Quantaty: ${productDetails.qty}</span>`;
