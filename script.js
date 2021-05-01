

import currenciesGroup from './curriency-object.js'; 

const formElement = document.querySelector('.form');
const currencyHave = document.querySelector('.js-selectHave');
const currencyWant = document.querySelector('.js-selectWant');
const amountTyped = document.querySelector('.js-amountTyped');
let inputReadonly = document.querySelector('.js-actualisation');
let switcherCurrency = document.querySelector('.js-switcherCurrency');


const getCurrencyHaveObject = currencies => {
  let getCurrenciesToExchange = null;
    for (const key in currencies) {
        if(key === currencyHave.value && key) {
          getCurrenciesToExchange = currencies[key];
       }
    }
  return getCurrenciesToExchange;
} 

function getInputActualisation() {

  const objectCurrencyHave = getCurrencyHaveObject(currenciesGroup);
  const specificCurrencyAmount = objectCurrencyHave[currencyWant.value];
  const calculatedCurrencyConverter = specificCurrencyAmount * Number(amountTyped.value);

    if ( currencyHave.value !== 'search' && currencyWant.value === 'search' ) {
      inputReadonly.value = `Choose all curriencies` 
    } else if ( currencyHave.value === 'search' && currencyWant.value !== 'search' ) {
      inputReadonly.value = 'Choose all curriencies';
    } else {
      inputReadonly.value = `1 ${ currencyHave.value } = ${ specificCurrencyAmount }`;
    } 

    if( currencyHave.value === currencyWant.value ) {
      inputReadonly.value = `same curriency`;
      amountTyped.setAttribute('disabled', 'disabled');
    } else {
      amountTyped.removeAttribute('disabled', 'disabled');
    }
  
    if ( amountTyped.value ) {
      inputReadonly.value = `Cash in ${ currencyWant.value }: ${ calculatedCurrencyConverter }`
    } 


 
}




formElement.addEventListener('input', (e) => {
  e.preventDefault(); 

if(currencyHave.value === 'search') {
  console.log('siema');
}

    getInputActualisation(); 
  })
  
 




   
// element.addEventListener("change", (e) => {});
// e.currentTarget => (jest elementem) bezposrednie elementy do ktortego przypisany jest event (wywoluje)
// np. e.currentTarget.value => (metoda wartość dodana do elementu)
// e.someTarget => przekazuje event do dzieci