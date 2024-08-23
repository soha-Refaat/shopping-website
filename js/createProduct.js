let productName = document.getElementById("product-name");
let productDesc = document.getElementById("product-description");
let getProductSize = document.getElementById("product-size");
let uploadImg = document.getElementById("upload-img");
let creatForm = document.getElementById("creat-form");
// let productSizeValue;
let producImg;

getProductSize.addEventListener('change',productSizeValue);
creatForm.addEventListener('submit',creatProductForm);
uploadImg.addEventListener('change', uploadImages)
function productSizeValue(e){
    productSizeValue =e.target.value;
}
function creatProductForm(e){
    e.preventDefault();
    let allProduct = JSON.parse(localStorage.getItem("products"))||productsDB;
    let nameValue = productName.value;
    let descValue = productDesc.value;
    
    if(nameValue&&descValue){
    let obj ={
        id:allProduct?allProduct.length+1:1,
        title:nameValue,
        imgUrl: producImg,
        description:descValue,
        size:productSizeValue,
        qty:1,
        isMe:'Y'
    };

    let newProucts = allProduct?[...allProduct , obj]: [obj];
    localStorage.setItem("products", JSON.stringify(newProucts));
    productName.value= "";
    productDesc.value = "";
    getProductSize.value ="";
    setTimeout(() =>{
    window.location = "index.html";
    }, 500)
}
else{
    alert("Enter Data...")
}
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