
var pass = document.getElementById("password");
var msg = document.getElementById("message");
var strength = document.getElementById("strenght");


pass.addEventListener("input", () =>{
    if(pass.value.length > 0){
        msg.style.display - "block";
    }
    else{
        msg.style.display = "none"
    }
    if(pass.value.length < 6){
        strength.innerText = "PassWord is Weak";
        pass.style.borderColor = "red";
        strength.style.color = "red";
    }
    else if(pass.value.length >= 6 && pass.value.length <= 10){
        strength.innerText = "PassWord is Medium";
        pass.style.borderColor = "orange";
        strength.style.color = "orange";
    }
    else{
        strength.innerText = "PassWord is Strong";
        pass.style.borderColor = "green";
        strength.style.color = "green";
    }
})