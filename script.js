const formElement = document.querySelector('.form');
const currencyHave = document.querySelector('.js-selectHave');
const currencyWant = document.querySelector('.js-selectWant');
const amountTyped = document.querySelector('.js-amountTyped');
const amountCounted = document.querySelector('.js-amountCounted');
let inputReadonly = document.querySelector('.js-actualisation');


formElement.addEventListener('input', (e) => {
  e.preventDefault(); 


  function getCurrencyHaveObject() {
    let getHaveObject = null;

    const obj = {
      pl : { gbp : 0.18816, eur : 0.21758 },
      gbp : { pl : 5.21899, eur : 1.14832 },
      eur : { pl : 4.56386, gbp : 0.86851 } 
    }
      for (const key in obj) {
        if(key === currencyHave.value) {
          getHaveObject = obj[key];
        }
      }
      
    return getHaveObject;
  } 

  let objectCurrencyHave = getCurrencyHaveObject();

  function getSelectedValueHave(){
    let valueHave = currencyHave.options[currencyHave.selectedIndex].value;
    return valueHave;
  }
  let selectedValueHave = getSelectedValueHave();

  function getSelectedValueWant(){
    let valueWant = currencyWant.options[currencyWant.selectedIndex].value;
    return valueWant;
  }

  let selectedValueWant = getSelectedValueWant();

  let specificCurrencyAmount = objectCurrencyHave[selectedValueWant];
  let calculatedCurrencyConverter = specificCurrencyAmount * Number(amountTyped.value);
 
  amountCounted.value = calculatedCurrencyConverter.toFixed(2);

  // when currency is same:
  if (selectedValueHave === selectedValueWant) {
    amountCounted.value = amountTyped.value;
  }

  function getSelectedTextHave() {
    let text = currencyHave.options[currencyHave.selectedIndex].text
    

    if(selectedValueHave && selectedValueWant !== 'search' && selectedValueHave !== selectedValueWant) {
      inputReadonly.value = `1 ${ text } = ${specificCurrencyAmount}`
    }

    if(selectedValueHave === selectedValueWant) {
      inputReadonly.value = `you will get same back`;
    }

  }

  getSelectedTextHave();

})
