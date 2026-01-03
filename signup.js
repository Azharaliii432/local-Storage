var signUsername = document.getElementById("signUsername");
var emailId = document.getElementById("emailId");
var signPassword = document.getElementById("signPassword");

var users = [];


function signupFunc(){
    if(emailId=="" || signUsername=="" || signPassword==""){
        Toastify({
            text: "Invalid argument",
            duration: 2000,
            newWindow: true,
            gravity: "top",
            position: "center",
            style: {
                background: "linear-gradient(to right, #eb0808ff, #e30b0bff)",
            },
            // onClick: function () { } // Callback after click
        }).showToast();
    }
    else {
        var userExist = false;
        var selectedIndex = "";
        for(i= 0; i<users.length; i++){
            if(users[i].email==emailId.value){
                userExist = true;
                selectedIndex = i;
            }
        }
        if(userExist==true){
            Toastify({
            text: "User already exist",
            duration: 2000,
            newWindow: true,
            gravity: "top",
            position: "center",
            style: {
                background: "linear-gradient(to right, #eb0808ff, #e30b0bff)",
            },
            // onClick: function () { } // Callback after click
        }).showToast();
        }
        else{
            users.push(
        {username: signUsername.value, email: emailId.value, password: signPassword.value,}
    )
        
        Toastify({
            text: "User Registered Successfully",
            duration: 2000,
            newWindow: true,
            gravity: "top",
            position: "center",
            style: {
                background: "linear-gradient(to right, #eb0808ff, #e30b0bff)",
            },
            // onClick: function () { } // Callback after click
        }).showToast();
        setTimeout(()=>{
        window.location.href = "./index.html"
        localStorage.setItem("users", JSON.stringify(users));
    },1000)
        }
    }
}
function setData(){
    var userData = localStorage.getItem("users")
    users = JSON.parse(userData) || []
    console.log(userData)
    console.log(users)
}
setData()