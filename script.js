const formElement = document.querySelector('.form');
const currencyHave = document.querySelector('.js-selectHave');
const currencyWant = document.querySelector('.js-selectWant');
const amountTyped = document.querySelector('.js-amountTyped');
const amountCounted = document.querySelector('.js-amountCounted');
let inputReadonly = document.querySelector('.js-actualisation');

const currenciesGroup = {
                          pl  : { gbp : 0.18816, 
                                  eur : 0.21758, 
                                  us  : 0.26389, 
                                  rub : 19.7077, 
                                  esp : 36.3210, 
                                  itl : 422.675, 
                                  dem : 0.42695 },
                          gbp : { pl  : 5.21899, 
                                  eur : 1.14832, 
                                  us  : 1.38992, 
                                  rub : 103.800, 
                                  esp : 191.300, 
                                  itl : 2226.20, 
                                  dem : 2.24869 },
                          eur : { pl  : 4.56386, 
                                  gbp : 0.86851, 
                                  us  : 1.20878, 
                                  rub : 90.2726, 
                                  esp : 166.386, 
                                  itl : 1936.27, 
                                  dem : 1.95583 },
                          us  : { pl  : 3.78578, 
                                  gbp : 0.71937, 
                                  eur : 0.82718, 
                                  rub : 74.6808, 
                                  esp : 137.632, 
                                  itl : 1601.65, 
                                  dem : 1.61783 },
                          rub : { pl  : 0.05066, 
                                  gbp : 0.00963, 
                                  eur : 0.01107, 
                                  us  : 0.01338, 
                                  esp : 1.84161, 
                                  itl : 21.4312, 
                                  dem : 0.02165 },
                          esp : { pl  : 0.02750, 
                                  gbp : 0.00523, 
                                  eur : 0.00601, 
                                  us  : 0.00726, 
                                  rub : 0.54255, 
                                  itl : 11.6372, 
                                  dem : 0.01175 },
                          itl : { pl  : 0.00236, 
                                  gbp : 0.00045, 
                                  eur : 0.00052, 
                                  us  : 0.00062, 
                                  rub : 0.04662, 
                                  esp : 0.08593, 
                                  dem : 0.00101 },
                          dem : { pl  : 2.33983, 
                                  gbp : 0.44461, 
                                  eur : 0.51129, 
                                  us  : 0.61804, 
                                  rub : 46.1556, 
                                  esp : 85.0718, 
                                  itl : 989.999	}
}

const getCurrencyHaveObject = currencies => {
  let getCurrenciesToExchange = null;
    for (const key in currencies) {
      if(key === currencyHave.value) {
        getCurrenciesToExchange = currencies[key];
      }
    }
  return getCurrenciesToExchange;
} 

function getSelectedValueHave(){
  let valueHave = currencyHave.options[currencyHave.selectedIndex].value;
  return valueHave;
}

function getSelectedValueWant(){
  let valueWant = currencyWant.options[currencyWant.selectedIndex].value;
  return valueWant;
}

formElement.addEventListener('input', (e) => {
  e.preventDefault(); 

  const objectCurrencyHave = getCurrencyHaveObject(currenciesGroup);
  const selectedValueHave = getSelectedValueHave();
  const selectedValueWant = getSelectedValueWant();

  function getInputsActualisation() {
    const specificCurrencyAmount = objectCurrencyHave[selectedValueWant];
    const calculatedCurrencyConverter = specificCurrencyAmount * Number(amountTyped.value);
   
    amountCounted.value = calculatedCurrencyConverter.toFixed(2);
  
    const textValue = currencyHave.options[currencyHave.selectedIndex].text;

      if(selectedValueHave && selectedValueWant !== 'search' && selectedValueHave !== selectedValueWant) {
        inputReadonly.value = `1 ${ textValue } = ${ specificCurrencyAmount }`;
      }

      if(selectedValueHave === selectedValueWant) {
        inputReadonly.value = `you will get same back`;
        amountCounted.value = amountTyped.value;
      }
  }

  getInputsActualisation();
})
