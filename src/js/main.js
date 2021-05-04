

import currenciesObject from './currencies-object.js'; 

{
  const currencyHaveInput = document.querySelector('.js-haveInput');
  const currencyExchangeInput = document.querySelector('.js-exchangeInput');
  const typeAmount = document.querySelector('.js-amountInput');
  
  const getAvailableCurrenciesToExchange = currencies => {
    let currenciesToExchange = null;
      for (const key in currencies) {
          if( currencyHaveInput.value === key ) {
            currenciesToExchange = currencies[key];
         }
      }
    return currenciesToExchange;
  } 

  const getPriceSelectedCurrency = object => object[currencyExchangeInput.value];

  const getConvertedCurrencyAmount = object => (object[currencyExchangeInput.value] * Number(typeAmount.value)).toFixed(2);
  
  const updateInputReadonly = () => {
    let readonlyInput = document.querySelector('.js-readonlyInput');
  
      if ( currencyHaveInput.value !== 'search' && currencyExchangeInput.value === 'search' ) {
        readonlyInput.value = `Choose all..` 
      } else {
        readonlyInput.value = `1 ${ currencyHaveInput.value } = ${ getPriceSelectedCurrency(getAvailableCurrenciesToExchange(currenciesObject)) }`;
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
        readonlyInput.value = `${ currencyExchangeInput.value } : ${ getConvertedCurrencyAmount(getAvailableCurrenciesToExchange(currenciesObject)) }`;
      }     
  }
  
  const changeTextAmountWhenDisabled = () => {
    if ( currencyHaveInput.value === currencyExchangeInput.value ) {
      typeAmount.removeAttribute('disabled','disabled');
      typeAmount.placeholder = `type here`;
    }
  }
  
  const init = () => {
    const formElement = document.querySelector('.form');
    const resetButton = document.querySelector('.js-resetButton');
      formElement.addEventListener('input', updateInputReadonly);
      resetButton.addEventListener('click', changeTextAmountWhenDisabled);
  }
  
  init();
} 
