

import currenciesObject from './currencies-object.js'; 

{
  const resetDisableInput = (currencyHaveInput, currencyExchangeInput, typeAmount) => {
    if ( currencyHaveInput.value === currencyExchangeInput.value ) {
      typeAmount.removeAttribute('disabled','disabled');
      typeAmount.placeholder = `type here`;
    }
  }

  const getDisabledInput = (currencyHaveInput, currencyExchangeInput, typeAmount) => {
    if ( currencyHaveInput.value === currencyExchangeInput.value ) {
      typeAmount.setAttribute('disabled','disabled');
      typeAmount.placeholder = `is disabled`;
    } else {
      typeAmount.removeAttribute('disabled','disabled');
      typeAmount.placeholder = `type here`;
    }
  }
  
  const displayExchangedCurrencyAmount = (currencyHaveInput, currencyExchangeInput, typeAmount) => {
    let readonlyInput = document.querySelector('.js-readonlyInput');
    const currenciesToExchange = getCurrenciesToExchange(currenciesObject, currencyHaveInput.value);
    const priceForOneUnitCurrency = getPriceSelectedCurrency(currenciesToExchange, currencyExchangeInput.value);
    const convertedCurrencyAmount = getConvertedCurrencyAmount( priceForOneUnitCurrency, typeAmount.value);
  
    if ( currencyHaveInput.value !== 'search' && currencyExchangeInput.value === 'search' ) {
      readonlyInput.value = `Choose all..`;
    } else {
      readonlyInput.value = `1 ${ currencyHaveInput.value } = ${ priceForOneUnitCurrency }`;
    } 

    if ( currencyHaveInput.value === currencyExchangeInput.value ) {
      readonlyInput.value = `same curriency`;
    }
  
    if ( typeAmount.value ) {
      readonlyInput.value = `${ currencyExchangeInput.value } : ${ convertedCurrencyAmount }`;
    }     
  }

  const getConvertedCurrencyAmount = (price, amount) => (price * Number(amount)).toFixed(2);

  const getPriceSelectedCurrency = (currencies, currencyExchange) => currencies[currencyExchange];
  
  const getCurrenciesToExchange = (currencies, currencyHave) => {
    let currenciesToExchange = null;
      for (const key in currencies) {
          if( currencyHave === key ) {
            currenciesToExchange = currencies[key];
         }
      }
    return currenciesToExchange;
  }
  
  const init = () => {
    const formElement = document.querySelector('.form');
    const resetButton = document.querySelector('.js-resetButton');
    const currencyHaveInput = document.querySelector('.js-haveInput');
    const currencyExchangeInput = document.querySelector('.js-exchangeInput');
    const typeAmount = document.querySelector('.js-amountInput');

    formElement.addEventListener('input', () => {
      displayExchangedCurrencyAmount(currencyHaveInput, currencyExchangeInput, typeAmount);
      getDisabledInput(currencyHaveInput, currencyExchangeInput, typeAmount);
    });
    resetButton.addEventListener('click', () => {
      resetDisableInput(currencyHaveInput, currencyExchangeInput, typeAmount);
    });
  }
  
  init();
} 
