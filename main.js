

import currenciesGroup from './curriency-object.js'; 

const formElement = document.querySelector('.form');
const currencyHave = document.querySelector('.js-selectedHave')
const currencyWant = document.querySelector('.js-selectedWant');
const typedAmountInput = document.querySelector('.js-amountInput');
let inputReadonly = document.querySelector('.js-inputActualisation');

const getCurrencyHaveObject = currencies => {
  let getCurrenciesToExchange = null;
    for (const key in currencies) {
        if( currencyHave.value === key ) {
          getCurrenciesToExchange = currencies[key];
       }
    }
  return getCurrenciesToExchange;
} 

function getInputActualisation() {
  const objectCurrencyHave = getCurrencyHaveObject(currenciesGroup);
  const specificCurrencyAmount = objectCurrencyHave[currencyWant.value];
  const calculatedCurrencyConverter = specificCurrencyAmount * Number(typedAmountInput.value);

    if ( currencyHave.value !== 'search' && currencyWant.value === 'search' ) {
      inputReadonly.value = `Choose all curriencies` 
    } else if ( currencyHave.value === 'search' && currencyWant.value !== 'search' ) {
      inputReadonly.value = 'Choose all curriencies';
    } else {
      inputReadonly.value = `1 ${ currencyHave.value } = ${ specificCurrencyAmount }`;
    } 

    if( currencyHave.value === currencyWant.value ) {
      inputReadonly.value = `same curriency`;
      typedAmountInput.setAttribute('disabled','disabled');
    } else {
      typedAmountInput.removeAttribute('disabled','disabled');
    }
  
    if ( typedAmountInput.value ) {
      inputReadonly.value = `${ currencyWant.value } : ${ calculatedCurrencyConverter.toFixed(2) }`;
    }     
}

formElement.addEventListener('input', e => {
  e.preventDefault(); 
    getInputActualisation(); 

})
  
 

// element.addEventListener("change", (e) => {});
// e.currentTarget => (jest elementem) bezposrednie elementy do ktortego przypisany jest event (wywoluje)
// np. e.currentTarget.value => (metoda wartość dodana do elementu)
// e.someTarget => przekazuje event do dzieci
// e.target.options[e.target.selectedIndex].text