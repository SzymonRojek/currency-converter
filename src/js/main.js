

import currenciesObject from './currencies-object.js'; 

{
  const getCurrenciesToExchange = (currencies, currencyHave) => {
    let currenciesToExchange = null;
      for (const key in currencies) {
          if( currencyHave === key ) {
            currenciesToExchange = currencies[key];
         }
      }
    return currenciesToExchange;
  }

  const getConvertedCurrencyAmount = (price, amount) => (price * Number(amount)).toFixed(2);

  const getPriceSelectedCurrency = (currencies, currencyExchange) => currencies[currencyExchange];
  
  const resetAmountInput = (currencyHaveInput, currencyExchangeInput, typeAmount, labelTextAmount) => {
    if ( currencyHaveInput.value === currencyExchangeInput.value ) {
      typeAmount.removeAttribute('disabled','disabled');
      typeAmount.placeholder = `type here`;
    }
    labelTextAmount.innerText = '';
  }

  const getDisabledAmountInput = (currencyHaveInput, currencyExchangeInput, typeAmount) => {
    if ( currencyHaveInput.value === currencyExchangeInput.value ) {
      typeAmount.setAttribute('disabled','disabled');
      typeAmount.placeholder = `is disabled`;
    } else {
      typeAmount.removeAttribute('disabled','disabled');
      typeAmount.placeholder = `type here`;
    }
  }
  
  const displayInformation = (currencyHaveInput, currencyExchangeInput, typeAmount, labelTextAmount) => {
    let readonlyInput = document.querySelector('.js-readonlyInput');
    const currenciesToExchange = getCurrenciesToExchange(currenciesObject, currencyHaveInput.value);
    const priceForOneUnitCurrency = getPriceSelectedCurrency(currenciesToExchange, currencyExchangeInput.value);
    const convertedCurrencyAmount = getConvertedCurrencyAmount( priceForOneUnitCurrency, typeAmount.value);
  
    if ( currencyHaveInput.value !== 'search' && currencyExchangeInput.value === 'search' ) {
      readonlyInput.value = `Choose all..`;
    } else {
      readonlyInput.value = `1 ${ currencyExchangeInput.value } = ${ priceForOneUnitCurrency }`;
    } 

    if ( currencyHaveInput.value === currencyExchangeInput.value ) {
      readonlyInput.value = `same curriency`;
    }
  
    if ( typeAmount.value ) {
      readonlyInput.value = `${ currencyExchangeInput.value } : ${ convertedCurrencyAmount }`;
    } 
    
    if ( currencyHaveInput.value !== 'search' ) {
      labelTextAmount.innerText = ` ${ currencyHaveInput.value }`;
    } 
  }

  const init = () => {
    const formElement = document.querySelector('.form');
    const resetButton = document.querySelector('.js-resetButton');
    const currencyHaveInput = document.querySelector('.js-haveInput');
    const currencyExchangeInput = document.querySelector('.js-exchangeInput');
    const typeAmount = document.querySelector('.js-amountInput');
    const labelTextAmount = document.querySelector('.js-labelText--last');

    formElement.addEventListener('input', () => {
      displayInformation(currencyHaveInput, currencyExchangeInput, typeAmount, labelTextAmount);
      getDisabledAmountInput(currencyHaveInput, currencyExchangeInput, typeAmount);
    });
    resetButton.addEventListener('click', () => {
      resetAmountInput(currencyHaveInput, currencyExchangeInput, typeAmount, labelTextAmount);
    });
  }
  
  init();
} 
