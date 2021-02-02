const xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com");

xhr.onreadystatechange = function () {
  if (xhr.readyState === xhr.DONE && xhr.status === 200) {

    const loaderGIF = document.querySelector(".loader");
    loaderGIF.classList.remove("loader_active"); 
    
    let currenciesResponse = JSON.parse(xhr.responseText); 
    const currencyItems = document.querySelector("#items");
    let valutes = currenciesResponse.response.Valute;
    for (let valute in valutes) {
      let elemItemCode = valutes[valute].CharCode;
      let elemItemValue = valutes[valute].Value;
      currencyItems.insertAdjacentHTML("beforeEnd",
        `
        <div class="item">
          <div class="item__code">
            ${elemItemCode}
          </div>
          <div class="item__value">
            ${elemItemValue}
          </div>        
          <div class="item__currency">
            руб.
          </div>
        </div>
        `)
    }
  };
};

xhr.send();