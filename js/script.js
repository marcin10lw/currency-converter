{
  const rateEUR = 4.72;
  const rateUSD = 4.77;

  const onChangeTextContentSwitch = () => {
    const exchangeElement = document.querySelector(".js-exchangeElement");
    const inEuro = selectElement.value === "eur";
    exchangeElement.textContent = inEuro ? rateEUR : rateUSD;
  };

  const selectElement = document.querySelector(".js-selectElement");
  selectElement.addEventListener("change", onChangeTextContentSwitch);

  const getRate = (currency) => {
    switch (currency) {
      case "eur":
        return rateEUR;

      case "usd":
        return rateUSD;
    }
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

    let finalRate = getRate(currency);

    let result = amount * finalRate;

    updateResultText(amount, result, currency);
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
  };

  init();
}
