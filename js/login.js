let username = document.querySelector("#username");
let password = document.querySelector("#password");
let login_btn = document.querySelector("#sign-in");

let getUser = localStorage.getItem("username");
let getPass = localStorage.getItem("password");

login_btn.addEventListener("click", login );
function login(e){
    e.preventDefault();
    if(username.value === "" || password.value === ""){
        alert("Please fill data");
    }
    else{
        if(getUser && getUser.trim() === username.value.trim() && getPass && getPass === password.value.trim()){
            setTimeout(() => {
                window.location = "index.html";
            }, 1500);

        }
        else{
            console.log("user or password is wrong");
        }
    }
}