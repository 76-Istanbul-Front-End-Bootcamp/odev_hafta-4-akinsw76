const data = {
    USD: {EUR: 0.82, GBP: 0.74, AED:3.67},
    EUR: {USD: 1.23, GBP: 0.91, AED:4.49},
    GBP: {USD: 1.35, EUR: 1.10,AED:4.90},
    AED: {USD: 0.27, EUR: 0.22, GBP: 0.20}
  };
  
  const currencyKeys = Object.keys(data);
  
  function errorFunction() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }



  function createCurrencyElements(elements, root, inputName){
    for(let i =0; i< elements.length; i++){
      const currencyKeyDiv   = document.createElement("div");
      const currencyKeyInput = document.createElement("input");
      currencyKeyInput.setAttribute("type", "radio");
      currencyKeyInput.setAttribute("name", inputName);
      currencyKeyInput.setAttribute("id", inputName + elements[i]);
      currencyKeyInput.setAttribute("value", elements[i]);
  
      const currencyKeyLabel = document.createElement("label");
      currencyKeyLabel.setAttribute("for", inputName + elements[i]);
      currencyKeyLabel.textContent = elements[i];
  
      currencyKeyDiv.appendChild(currencyKeyInput);
      currencyKeyDiv.appendChild(currencyKeyLabel);
      root.appendChild(currencyKeyDiv);
    }
  }
  
  //from
  const parentEl = document.querySelector("#currency-box-from");
  const fromInputName = "currency_from";
  createCurrencyElements(currencyKeys, parentEl, fromInputName);
  
  // to
  const parentToEl = document.querySelector("#currency-box-to");
  const toInputName = "currency_to";
  createCurrencyElements(currencyKeys, parentToEl, toInputName);
  
  
  const calculateButton = document.querySelector("#calculate-button");

  calculateButton.addEventListener("click", function(){

    let checkFrom = document.querySelector("input[name='currency_from']:checked");
    let checkChecked = document.querySelector("input[name='currency_to']:checked");
    const currencyResult = document.querySelector("#currency-result");
    
    if (!checkFrom) {
        errorFrom = document.getElementById("snackbar");
        errorFrom.textContent = 'İlk seçim yapılmadı...'
        errorFunction();
    }else if (!checkChecked) {
        error2 = document.getElementById("snackbar");
        error2.textContent = 'İkinci seçim yapılmadı...'
        errorFunction();
    } 


     // kimden ceviriyourz
     const fromTarget = document.querySelector("input[name='currency_from']:checked").value;
     // kime ceviriyoruz
     const toTarget  = document.querySelector("input[name='currency_to']:checked").value;

     if (fromTarget == toTarget) return  currencyResult.innerHTML = "Farklı kurları seçiniz";
       
      
      

     // amountu alalim
     const amount = document.querySelector("input[name='amount']").value;
     
     const currentCurrencyObject = data[fromTarget];
     const resultForOne = currentCurrencyObject[toTarget];
     const result = amount * resultForOne;
  
     if (isNaN(amount)) return currencyResult.innerHTML = "Lütfen bir rakam veya sayı giriniz";
        
     currencyResult.innerHTML = amount + " " + fromTarget + " = " + result + " " + toTarget;
  });