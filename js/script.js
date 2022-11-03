{
  const selectElement = document.querySelector(".js-selectElement");

  const rateEUR = 4.72;
  const rateUSD = 4.77;

  const onChangeTextContentSwitch = () => {
    const exchangeElement = document.querySelector(".js-exchangeElement");
    exchangeElement.textContent = rateEUR;
    const inEuro = selectElement.value === "eur";
    exchangeElement.textContent = inEuro ? rateEUR : rateUSD;
  };

  selectElement.addEventListener("change", onChangeTextContentSwitch);

  const calculateResult = (currency, amount) => {
    switch (currency) {
      case "eur":
        return amount * rateEUR;

      case "usd":
        return amount * rateUSD;
    }
  };

  const updateResultText = (amount, result, currency) => {
    const resultElement = document.querySelector(".js-resultElement");
    const outputParagraphElement = document.querySelector(
      ".js-outputParagraph"
    );

    resultElement.textContent = result.toFixed(2);

    outputParagraphElement.innerHTML = `<strong>${amount.toFixed(
      2
    )}</strong> ${currency.toUpperCase()} = <strong>${result.toFixed(
      2
    )}</strong> PLN`;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const inputElement = document.querySelector(".js-inputElement");

    const amount = +inputElement.value;

    const currency = selectElement.value;

    let result = calculateResult(currency, amount);

    updateResultText(amount, result, currency);
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
  };

  init();
}
