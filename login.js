const loginButton=document.getElementById("signin-button").addEventListener("click",function(){
    const userName=document.getElementById("username").value;
    const passWord=document.getElementById("password").value;
    
    const correctUsername="admin";
    const correctPassword="admin123";
    if(userName===correctUsername && passWord===correctPassword){
        window.location.href="home.html"
    }
    else{
        alert("username or password is not valid")
        return;
    }

})
