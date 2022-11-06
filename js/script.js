{
  const rateEUR = 4.72;
  const rateUSD = 4.77;

  const onChangeTextContentSwitch = () => {
    const exchangeElement = document.querySelector(".js-exchangeElement");
    exchangeElement.textContent = rateEUR;
    const inEuro = selectElement.value === "eur";
    exchangeElement.textContent = inEuro ? rateEUR : rateUSD;
  };

  const selectElement = document.querySelector(".js-selectElement");
  selectElement.addEventListener("change", onChangeTextContentSwitch);

  const getRate = (currency) => {
    let finalRate;
    switch (currency) {
      case "eur":
        finalRate = rateEUR;
        break;

      case "usd":
        finalRate = rateUSD;
        break;
    }
    return finalRate;
  };

  const updateResultText = (amount, result, currency) => {
    const resultElement = document.querySelector(".js-resultElement");
    const outputBoxElement = document.querySelector(".js-outputBox");

    outputBoxElement.classList.add("form__outputBox");

    resultElement.textContent = result.toFixed(2);

    outputBoxElement.innerHTML = `<strong>${amount.toFixed(
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

    let finalRate = GetRate(currency);

    let result = amount * finalRate;

    updateResultText(amount, result, currency);
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
  };

  init();
}
