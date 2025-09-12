const passwordBox = document.querySelector("#password");
const copyMessage = document.querySelector("#copied-message");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_=+|{][}<>/'";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value = password;
}

const generateButton = document.querySelector("button");
generateButton.addEventListener("click",function(){
    createPassword();
});

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");

    copyMessage.classList.add('show');
    setTimeout(() => {
        copyMessage.classList.remove('show');
    }, 2000);
};

const copyButton = document.querySelector(".copy");
copyButton.addEventListener("click",function(){
    copyPassword()
});