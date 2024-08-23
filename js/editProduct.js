let products = JSON.parse(localStorage.getItem("products"))|| productsDB;
let productId = JSON.parse(localStorage.getItem("editProduct"));
let getProduct = products.find(i => i.id ===productId);


let productName = document.getElementById("product-name");
let productDesc = document.getElementById("product-description");
let getProductSize = document.getElementById("product-size");
let uploadImg = document.getElementById("upload-img");
let updateForm = document.getElementById("update-form");
let productSizeValue;
let producImg;


productName.value = getProduct.title;
productDesc.value = getProduct.description;
getProductSize.value = getProduct.size;
producImg = getProduct.imgUrl;

getProductSize.addEventListener('change',productSizeValue);
updateForm.addEventListener('submit',updateProductFunction);
uploadImg.addEventListener('change', uploadImages)
// function productSizeValue(e){
//     productSizeValue =e.target.value;
// }
function updateProductFunction(e){
    e.preventDefault();

    getProduct.title =productName.value;
    getProduct.description = productDesc.value;
    getProduct.size = getProductSize.value;
    getProduct.imgUrl = producImg;

    localStorage.setItem("products", JSON.stringify(products));
    setTimeout(() =>{
        window.location = "index.html";
    }, 500)
}


function uploadImages(){
    let file = this.files[0];
   
    let types = ["image/jpeg", "image/pmg"];
    if(types.indexOf(file.type) == -1){
        alert("type not supported");
        return;
    }
    if(file.size >2*1024*1024){
        alert("img not exced 2mg");
        return;
    }
    getImgLoaded(file);
// let producImg = URL.createObjectURL(file);

}

function getImgLoaded(file){
   let reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = function() {
    producImg = reader.result
   };
   reader.onerror = function(){
    alert("Error..")
   }
}