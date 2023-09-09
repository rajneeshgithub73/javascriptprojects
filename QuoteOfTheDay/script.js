const quoteApi = "https://api.quotable.io/quotes/random";

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const newQuote = document.querySelector(".new-quote");
const share = document.querySelector(".share");

async function changeQuote() {
    const response = await fetch(quoteApi);
    const newquote = await response.json();
    quote.innerHTML = newquote[0].content
    author.innerHTML = newquote[0].author
}

newQuote.addEventListener("click", () => {
    changeQuote()
});

function tweetmyquote() {
    window.open(`https://twitter.com/intent/tweet?text=${quote.innerHTML}`, "Share Quote", "width = 600, height = 400")
}

share.addEventListener('click', () => {
    tweetmyquote()
})