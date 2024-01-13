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

btnEl.addEventListener("click", () => {
  showQuote();
});

showQuote();
