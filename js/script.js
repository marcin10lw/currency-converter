let formElement = document.querySelector(".js-form");
let selectElement = document.querySelector(".js-selectElement");
let inputElement = document.querySelector(".js-inputElement");
let exchangeElement = document.querySelector(".js-exchangeElement");
let resultElement = document.querySelector(".js-resultElement");
let outputParagraphElement = document.querySelector(".js-outputParagraph");

let rateEUR = 4.72;
let rateUSD = 4.77;

exchangeElement.textContent = rateEUR;

selectElement.addEventListener("change", () => {
  const inEuro = selectElement.value === "eur";
  exchangeElement.textContent = inEuro ? rateEUR : rateUSD;
});

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const amount = +inputElement.value;
  let currentRate;
  let currency = selectElement.value;
  switch (currency) {
    case "eur":
      currentRate = rateEUR;
      break;
    case "usd":
      currentRate = rateUSD;
      break;
  }
  const result = amount * currentRate;
  resultElement.textContent = result.toFixed(2);

  outputParagraphElement.innerHTML = `<strong>${amount.toFixed(
    2
  )}</strong> ${currency.toUpperCase()} = <strong>${result.toFixed(
    2
  )}</strong> PLN`;
});
