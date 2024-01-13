const blocquoteTextEl = document.querySelector("blockquote > p");
const btnEl = document.querySelector("main > button");
const API_URL = "https://api.adviceslip.com/advice";

async function getQuote() {
  try {
    const fetchQuote = await fetch(API_URL);
    const JsonData = fetchQuote.json();
    return JsonData;
  } catch (error) {
    console.error("Some network error: ", error);
  }
}

async function showQuote() {
  const QuoteData = await getQuote();
  console.log(QuoteData);
  blocquoteTextEl.innerText = QuoteData.slip.advice;
}
showQuote();

btnEl.addEventListener("click", () => {
  showQuote();
});

const copyEl = document.querySelector("#copy-quote");
const copyQUote = () => {
  navigator.clipboard.writeText(blocquoteTextEl.innerText);
  copyEl.style.backgroundColor = "#bbc6d494";
  const copyTitle = copyEl.querySelector("p");
  copyTitle.innerText = "Quote copied";
  setTimeout(() => {
    copyEl.style.backgroundColor = "#bbc6d4";
    copyTitle.innerText = " Copy Quote ";
  }, 1500);
};

copyEl.addEventListener("click", copyQUote);
