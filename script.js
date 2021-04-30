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
                                  dem : 0.42695,
                                  czk : 5.65865,
                                  skk : 6.57631,
                                  huf : 79.0143,
                                },
                          gbp : { pl  : 5.21899, 
                                  eur : 1.14832, 
                                  us  : 1.38992, 
                                  rub : 103.800, 
                                  esp : 191.300, 
                                  itl : 2226.20, 
                                  dem : 2.24869,
                                  czk : 29.8041,
                                  skk : 34.6369,
                                  huf : 416.168,
                                },
                          eur : { pl  : 4.56386, 
                                  gbp : 0.86851, 
                                  us  : 1.20878, 
                                  rub : 90.2726, 
                                  esp : 166.386, 
                                  itl : 1936.27, 
                                  dem : 1.95583,
                                  czk : 25.9207,
                                  skk : 30.1260,
                                  huf : 361.979,
                                },
                          us  : { pl  : 3.78578, 
                                  gbp : 0.71937, 
                                  eur : 0.82718, 
                                  rub : 74.6808, 
                                  esp : 137.632, 
                                  itl : 1601.65, 
                                  dem : 1.61783,
                                  czk : 21.4431,
                                  skk : 24.9197,
                                  huf : 299.419,
                                },
                          rub : { pl  : 0.05066, 
                                  gbp : 0.00963, 
                                  eur : 0.01107, 
                                  us  : 0.01338, 
                                  esp : 1.84161, 
                                  itl : 21.4312, 
                                  dem : 0.02165,
                                  czk : 0.28692,
                                  skk : 0.33344,
                                  huf : 4.00644,
                                },
                          esp : { pl  : 0.02750, 
                                  gbp : 0.00523, 
                                  eur : 0.00601, 
                                  us  : 0.00726, 
                                  rub : 0.54255, 
                                  itl : 11.6372, 
                                  dem : 0.01175,
                                  czk : 0.15579,
                                  skk : 0.18106,
                                  huf : 2.17554,
                                },
                          itl : { pl  : 0.00236, 
                                  gbp : 0.00045, 
                                  eur : 0.00052, 
                                  us  : 0.00062, 
                                  rub : 0.04662, 
                                  esp : 0.08593, 
                                  dem : 0.00101,
                                  czk : 0.01339,
                                  skk : 0.01556,
                                  huf : 0.18695,
                                },
                          dem : { pl  : 2.33983, 
                                  gbp : 0.44461, 
                                  eur : 0.51129, 
                                  us  : 0.61804, 
                                  rub : 46.1556, 
                                  esp : 85.0718, 
                                  itl : 989.999,
                                  czk : 13.2530,
                                  skk : 15.4032,
                                  huf :	185.077,
                                },
                          czk : { pl  : 0.17644,
                                  gbp : 0.03353,
                                  eur : 0.03855,
                                  us  : 0.04660,
                                  rub : 3.48047,
                                  esp : 6.41456,
                                  itl : 74.6476,
                                  dem : 0.07540,
                                  skk : 1.16143,
                                  huf : 13.9543,
                                },
                          skk : { pl  : 0.15191,
                                  gbp : 0.02886,
                                  eur : 0.03319,
                                  us  : 0.04012,
                                  rub : 2.99650,
                                  esp : 5.52300,
                                  itl : 64.2724,
                                  dem : 0.06492,
                                  czk : 0.86041,
                                  huf : 12.0155,
                                },
                          huf : { pl  : 0.01263,
                                  gbp : 0.00240,
                                  eur : 0.00276,
                                  us  : 0.00334,
                                  rub : 0.00598,
                                  esp : 0.45923,
                                  itl : 5.34412,
                                  dem : 0.00540,
                                  czk : 0.07154,
                                  skk : 0.08315,
                                }        
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
  
    const textValue = currencyHave.options[currencyHave.selectedIndex].value;

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
