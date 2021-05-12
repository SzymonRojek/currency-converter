import currencies from './currencies.js'; 

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
  

  const informationDisplayed = document.querySelector('.js-displayInformation');
  const currencyHaveInput = document.querySelector('.js-haveInput');
  const currencyExchangeInput = document.querySelector('.js-exchangeInput');
  const labelTextAmount = document.querySelector('.js-labelText--last');
  const typeAmount = document.querySelector('.js-amountInput');
 
  const resetFields = () => {
    informationDisplayed.innerText = `Choose currencies`;
    labelTextAmount.innerText = '';
    typeAmount.removeAttribute('disabled','disabled');
    typeAmount.placeholder = `type here`;
  }

  const getDisabledAmountInput = () => {
    if ( currencyHaveInput.value === currencyExchangeInput.value ) {
      typeAmount.setAttribute('disabled','disabled');
      typeAmount.placeholder = `is disabled`;
    } 
  }
  
  const displayInformation = () => {
    const currenciesToExchange = getCurrenciesToExchange(currencies, currencyHaveInput.value);
    const priceForOneUnitCurrency = getPriceSelectedCurrency(currenciesToExchange, currencyExchangeInput.value);
    const convertedCurrencyAmount = getConvertedCurrencyAmount( priceForOneUnitCurrency, typeAmount.value);
  
    if ( currencyHaveInput.value !== 'search' && currencyExchangeInput.value === 'search' ) {
      informationDisplayed.innerText = `Choose all..`;
    } else {
      informationDisplayed.innerText = `1 ${ currencyExchangeInput.value } = ${ priceForOneUnitCurrency }`;
    } 

    if ( currencyHaveInput.value === currencyExchangeInput.value ) {
      informationDisplayed.innerText = `Same currencies`;
    }
  
    if ( typeAmount.value ) {
      informationDisplayed.innerText = `${ currencyExchangeInput.value } : ${ convertedCurrencyAmount }`;
    } 
    
    if ( currencyHaveInput.value !== 'search' ) {
      labelTextAmount.innerText = ` ${ currencyHaveInput.value }`;
    } 
  }

  const init = () => {
    const formElement = document.querySelector('.form');
    const resetButton = document.querySelector('.js-resetButton');
  
    formElement.addEventListener('input', () => {
      displayInformation();
      getDisabledAmountInput();
    });
    resetButton.addEventListener('click', resetFields);
  }
  
  init();
} 
