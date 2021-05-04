

import currenciesGroup from './curriency-object.js'; 

const formElement = document.querySelector('.form');
const currencyHave = document.querySelector('.js-haveInput')
const currencyExchange = document.querySelector('.js-exchangeInput');
const typeAmount = document.querySelector('.js-amountInput');
let messageActualisation = document.querySelector('.js-actualisationInput');
const resetButton = document.querySelector('.js-resetButton');

const getCurrencyHaveObject = currencies => {
  let getCurrenciesToExchange = null;
    for (const key in currencies) {
        if( currencyHave.value === key ) {
          getCurrenciesToExchange = currencies[key];
       }
    }
  return getCurrenciesToExchange;
} 

const getInputActualisation = () => {
  const objectCurrencyHave = getCurrencyHaveObject(currenciesGroup);
  const specificCurrencyAmount = objectCurrencyHave[currencyExchange.value];
  const calculatedCurrencyConverter = specificCurrencyAmount * Number(typeAmount.value);

    if ( currencyHave.value !== 'search' && currencyExchange.value === 'search' ) {
      messageActualisation.value = `Choose all..` 
    } else {
      messageActualisation.value = `1 ${ currencyHave.value } = ${ specificCurrencyAmount }`;
    } 

    if ( currencyHave.value === currencyExchange.value ) {
      messageActualisation.value = `same curriency`;
      typeAmount.setAttribute('disabled','disabled');
      typeAmount.placeholder = `is disabled`;
    } else {
      typeAmount.removeAttribute('disabled','disabled');
      typeAmount.placeholder = `type here`;
    }
  
    if ( typeAmount.value ) {
      messageActualisation.value = `${ currencyExchange.value } : ${ calculatedCurrencyConverter.toFixed(2) }`;
    }     
}

resetButton.addEventListener('click', () => {
  if ( currencyHave.value === currencyExchange.value ) {
    typeAmount.placeholder = `type here`;
  }
})

const init = () => {
  formElement.addEventListener('input', e => {
    e.preventDefault(); 
    getInputActualisation(); 
  })
}

init();
 

// element.addEventListener("change", (e) => {});
// e.currentTarget => (jest elementem) bezposrednie elementy do ktortego przypisany jest event (wywoluje)
// np. e.currentTarget.value => (metoda wartość dodana do elementu)
// e.someTarget => przekazuje event do dzieci
// e.target.options[e.target.selectedIndex].text