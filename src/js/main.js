import currencies from './currencies.js'; 

{
  const paragraphText = document.querySelector('.js-paragraphText');
  const currencyFrom = document.querySelector('.js-haveInput');
  const currencyTo = document.querySelector('.js-exchangeInput');
  const amountInput = document.querySelector('.js-amountInput');
  const labelTextLast = document.querySelector('.js-labelText--last');

  const getCurrencies = currencies => currencies[currencyFrom.value];

  const calculateAmount = (bid, amountTyped) => (bid * Number(amountTyped)).toFixed(2);

  const getBid = (currencies, currencyTo) => currencies[currencyTo];
  
  const resetFields = () => {
    labelTextLast.innerText = '';
    amountInput.removeAttribute('disabled','disabled');
    amountInput.placeholder = `type here`;
    paragraphText.innerText = `Choose currencies`;
  }

  const getDisabledAmountInput = () => {
    if ( currencyFrom.value === currencyTo.value ) {
      amountInput.setAttribute('disabled','disabled');
      amountInput.placeholder = `is disabled`;
      paragraphText.innerText = `Same currencies - click clear`;
    }
  }

  const displayTextValueCurrencyFrom = () => {
    if ( currencyFrom.value !== 'search' ) {
      labelTextLast.innerText = ` ${ currencyFrom.value }`;
    }
  }
 
  const getTextInformation = () => {
    const currenciesToExchange = getCurrencies(currencies);
    const bidCurrencyTo = getBid(currenciesToExchange, currencyTo.value);
    const calculatedCurrencyAmount = calculateAmount( bidCurrencyTo, amountInput.value);
 
    if (currencyFrom.value !== 'search' && currencyTo.value === 'search' ) {
      return `All fields required`;
    } 

    if (currencyFrom.value !== 'search' && currencyTo.value !== 'search' && amountInput.value === '') {
      return `1 ${ currencyTo.value } = ${ bidCurrencyTo}`;
    }

    if ( amountInput.value ) {
     return  `${ currencyTo.value } : ${ calculatedCurrencyAmount }`;
    }
  }

  const displayTextInformation = () => {
    paragraphText.innerText = getTextInformation();
  }

  const init = () => {
    const formElement = document.querySelector('.form');
    const resetButton = document.querySelector('.js-resetButton');
  
    formElement.addEventListener('input', () => {
      displayTextInformation();
      getDisabledAmountInput();
      displayTextValueCurrencyFrom();
    });

    resetButton.addEventListener('click', resetFields);
  }

  init();
}