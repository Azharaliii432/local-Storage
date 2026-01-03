var email = document.getElementById("email")
var password = document.getElementById("password")
var btn = document.getElementById("loginbtn")

var users = [
    {email: "azharaliii432@gmail.com", username : "Azhar Ali", password: "azhar123"},
    {email: "a1@gmail.com", username: "A1", password: "a1234567"},
    {email: "bobby@gmail.com", username: "Bobby", password: "bobby123"},
]

function redirect(){
    var status = localStorage.getItem("login")
    if(status==true){
        window.location.href = "./dashboard.html"
    }
}
redirect()

function login(){
    
    if (email.value == "" || password.value == "") {
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
    
    
    else{
        var userExist = false;
        var selectedIndex = "";
        for(i= 0; i<users.length; i++){
            if(users[i].email==email.value){
                userExist = true;
                selectedIndex = i;
            }
            
        }
        if(userExist==true){
        console.log(users[selectedIndex].email)
                if(users[selectedIndex].password==password.value){
                    localStorage.setItem("login",true);
                    localStorage.setItem("email", email.value);
                    localStorage.setItem("name", users[selectedIndex].username);
                    window.location.href = "./dashboard.html"
                }
                else{
                    Toastify({
                    text: "Incorrect Credentials",
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
                
            }
        else if(userExist==false){
                Toastify({
                    text: "User does not exist",
                    duration: 2000,
                    newWindow: true,
                    gravity: "top",
                    position: "center",
                    style: {
                    background: "linear-gradient(to right, green, blue)",
                    },
                    // onClick: function () { } // Callback after click
                }).showToast();
            }
    }
    
}

//     else if(email.value!=userEmail || password.value!=userPassword){
//         Toastify({
//             text: "Incorrect Credentials",
//             duration: 2000,
//             newWindow: true,
//             gravity: "top",
//             position: "center",
//             style: {
//                 background: "linear-gradient(to right, #eb0808ff, #e30b0bff)",
//             },
//             // onClick: function () { } // Callback after click
//         }).showToast();
//     }
//     else {
        
//         localStorage.setItem("log", true)
//         localStorage.setItem("email", email.value)
//         window.location.href = "./dashboard.html"

//     }
// }

// document.addEventListener("keydown", function (val) {
//     if (val.key == "Enter") {
//         login();
//     }
// }) 

function setData(){
    var userData = localStorage.getItem("users")
    users = JSON.parse(userData) || []
    console.log(userData)
    console.log(users)
}
setData()