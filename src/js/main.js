

import currenciesObject from './currencies-object.js'; 

{
  const getAvailableCurrenciesToExchange = (currencies, currencyHave) => {
    let currenciesToExchange = null;
      for (const key in currencies) {
          if( currencyHave === key ) {
            currenciesToExchange = currencies[key];
         }
      }
    return currenciesToExchange;
  }

  const getPriceSelectedCurrency = (currencies, currencyExchange) => currencies[currencyExchange];
  const getConvertedCurrencyAmount = (price, amount) => (price * Number(amount)).toFixed(2);

  const currencyHaveInput = document.querySelector('.js-haveInput');
  const currencyExchangeInput = document.querySelector('.js-exchangeInput');
  const typeAmount = document.querySelector('.js-amountInput');

  const updateInputs = () => {
    let readonlyInput = document.querySelector('.js-readonlyInput');

    const currenciesToExchange = getAvailableCurrenciesToExchange(currenciesObject, currencyHaveInput.value);
    const priceForOneUnitCurrency = getPriceSelectedCurrency(currenciesToExchange, currencyExchangeInput.value);
    const convertedCurrencyAmount = getConvertedCurrencyAmount( priceForOneUnitCurrency, typeAmount.value);
  
    if ( currencyHaveInput.value !== 'search' && currencyExchangeInput.value === 'search' ) {
      readonlyInput.value = `Choose all..`;
    } else {
      readonlyInput.value = `1 ${ currencyHaveInput.value } = ${ priceForOneUnitCurrency }`;
    } 

    if ( currencyHaveInput.value === currencyExchangeInput.value ) {
      readonlyInput.value = `same curriency`;
      typeAmount.setAttribute('disabled','disabled');
      typeAmount.placeholder = `is disabled`;
    } else {
      typeAmount.removeAttribute('disabled','disabled');
      typeAmount.placeholder = `type here`;
    }
  
    if ( typeAmount.value ) {
      readonlyInput.value = `${ currencyExchangeInput.value } : ${ convertedCurrencyAmount }`;
    }     
  }
  
  const changeTextAmountWhenDisabledClick = () => {
    if ( currencyHaveInput.value === currencyExchangeInput.value ) {
      typeAmount.removeAttribute('disabled','disabled');
      typeAmount.placeholder = `type here`;
    }
  }
  
  const init = () => {
    const formElement = document.querySelector('.form');
    const resetButton = document.querySelector('.js-resetButton');

    formElement.addEventListener('input', updateInputs);
    resetButton.addEventListener('click', changeTextAmountWhenDisabledClick);
  }
  
  init();
} 
