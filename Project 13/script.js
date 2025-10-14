
const newQuoteBtn = document.getElementById("newQuote");
const tweetQuote = document.getElementById("tweetQuote")

const qutoe = document.getElementById("quote");
const author = document.getElementById("author");

const api_URL = "https://thequoteshub.com/api";

async function getQuote(url) {
    const response = await fetch(api_URL);
    var data = await response.json();
    qutoe.innerText = data.text;
    author.innerText = data.author;
};

newQuoteBtn.addEventListener("click", () => {
    getQuote(api_URL);
});

getQuote(api_URL);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + qutoe.innerText + ".....by " + author.innerText, "Tweet tab");
}

tweetQuote.addEventListener("click", ()=>{
    tweet();
})