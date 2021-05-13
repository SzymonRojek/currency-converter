import currencies from './currencies.js'; 

{
  const displayText = document.querySelector('.js-displayText');
  const currencyFrom = document.querySelector('.js-haveInput');
  const currencyTo = document.querySelector('.js-exchangeInput');
  const amountInput = document.querySelector('.js-amountInput');
  const labelTextLast = document.querySelector('.js-labelText--last');

  const getCurrencies = currencies => {
    for (const key in currencies) {
      if( currencyFrom.value === key ) {
        return currencies[key];
      }
    }
  }

  const calculateAmount = (bid, amountTyped) => (bid * Number(amountTyped)).toFixed(2);

  const getBid = (currencies, currencyTo) => currencies[currencyTo];
  
  const resetFields = () => {
    displayText.innerText = `Choose currencies`;
    labelTextLast.innerText = '';
    amountInput.removeAttribute('disabled','disabled');
    amountInput.placeholder = `type here`;
  }

  const getDisabledAmountInput = () => {
    if ( currencyFrom.value === currencyTo.value ) {
      amountInput.setAttribute('disabled','disabled');
      amountInput.placeholder = `is disabled`;
    } 
  }

  const displayTextValueCurrencyFrom = () => {
    if ( currencyFrom.value !== 'search' ) {
      labelTextLast.innerText = ` ${ currencyFrom.value }`;
    }
  }
  
  const displayInformation = text => {
    const currenciesToExchange = getCurrencies(currencies);
    const bidCurrencyTo = getBid(currenciesToExchange, currencyTo.value);
    const calculatedCurrencyAmount = calculateAmount( bidCurrencyTo, amountInput.value);
  
    currencyFrom.value !== 'search' && currencyTo.value === 'search' ? text = `Choose all..` : text = `1 ${ currencyTo.value } = ${ bidCurrencyTo }`;
   
    if ( currencyFrom.value === currencyTo.value ) {
      text = `Same currencies - click clear`;
    }
  
    if ( amountInput.value ) {
      text = `${ currencyTo.value } : ${ calculatedCurrencyAmount }`;
    } 

    return displayText.innerText = text;
  }

  const init = () => {
    const formElement = document.querySelector('.form');
    const resetButton = document.querySelector('.js-resetButton');
  
    formElement.addEventListener('input', () => {
      displayInformation();
      getDisabledAmountInput();
      displayTextValueCurrencyFrom();
    });
    
    resetButton.addEventListener('click', resetFields);
  }
  
  init();
} 
