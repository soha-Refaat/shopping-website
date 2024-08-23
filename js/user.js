let userInfo = document.querySelector("#user-info");
let userDom = document.querySelector("#user");
let links = document.querySelector("#links");
let logOut = document.querySelector("#log-out");

let chickUser= localStorage.getItem("username")

if(chickUser){
    links.remove();
    userInfo.style.display = "flex";
    userDom.innerHTML = chickUser;
}

logOut.addEventListener("click", function(){
  localStorage.clear();
  setTimeout(() => {
    window.location = "register.html";
},1500);
});