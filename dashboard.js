var userrEmail = document.getElementById("useremail");
var logout = document.getElementById("logout");
var logg = document.getElementById("logg");

function getEmail(){
    var login2 = localStorage.getItem("name")
    var email2 = localStorage.getItem("email");
    userrEmail.innerText = email2;
    logg.innerText = login2;

    // if(email2==null){
    //     window.location.href = "./index.html"
    // }
}
function logOut(){
    localStorage.setItem("login", false)
    window.location.href = "./index.html"
}
document.addEventListener("keydown", function(val){
    if(val.key=="Enter"){
        logOut();
    }
})

getEmail()
