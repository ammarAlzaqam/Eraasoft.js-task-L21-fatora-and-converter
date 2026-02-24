//TODO>> Fatora system
// Selectors
let displayOriginal = document.querySelector(".display-original");
let displayDes = document.querySelector(".display-des");
let displayAfterDes = document.querySelector(".display-afterDes");

function calcDiscount() {
  let originalPrice = +document.querySelector("#original").value;
  let discount = +document.querySelector("#des").value;
  let currency = document.querySelector("select").value;

  discountValue = (discount / 100) * originalPrice;
  priceAfterDes = originalPrice - discountValue;

  displayOriginal.classList.add("text-decoration-line-through", "text-danger");
  displayOriginal.textContent = `${originalPrice} ${currency}`;

  displayDes.textContent = `${discount}%`;

  displayAfterDes.classList.add("text-success");
  displayAfterDes.textContent = `${priceAfterDes} ${currency}`;
}

//TODO>> Inches Converter
// Selectors
let result = document.querySelector("#result");

function inchesConverter() {
  let inches = +document.getElementById("inches").value;
  let meters = (inches * 0.0254).toFixed(1);

  result.innerHTML = `
    <span class="text-secondary">${inches} in</span>
    =
    <span class="text-success">${meters} m</span>
  `;
}
