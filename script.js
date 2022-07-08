const plusBtn1 = document.getElementById("plusBtn1");
plusBtn1.addEventListener("click", function () {
  updateCount("currentValue1", 1);
  updateTotalPrice("priceRate1", 1200);
  updateSubTotal(1200);
});

const minusBtn1 = document.getElementById("minusBtn1");
minusBtn1.addEventListener("click", function () {
  updateCount("currentValue1", -1);
  updateTotalPrice("priceRate1", -1200);
  updateSubTotal(-1200);
});

const plusBtn2 = document.getElementById("plusBtn2");
plusBtn2.addEventListener("click", function () {
  updateCount("currentValue2", 1);
  updateTotalPrice("priceRate2", 60);
  updateSubTotal(60);
});

const minusBtn2 = document.getElementById("minusBtn2");
minusBtn2.addEventListener("click", function () {
  updateCount("currentValue2", -1);
  updateTotalPrice("priceRate2", -60);
  updateSubTotal(-60);
});

function updateCount(id, num) {
  const currentValue = document.getElementById(id).value;
  const currentValueNumber = parseFloat(currentValue);
  const updateValue = currentValueNumber + num;
  document.getElementById(id).value = updateValue;
}

function updateTotalPrice(id, num) {
  const priceRate = document.getElementById(id).innerText;
  const priceRateNumber = parseFloat(priceRate);
  const priceRateTotal = priceRateNumber + num;
  document.getElementById(id).innerText = priceRateTotal;
}

function updateSubTotal(num) {
  const subTotal = document.getElementById("subTotal").innerText;
  subTotalNumber = parseFloat(subTotal);
  subTotalValue = subTotalNumber + num;
  document.getElementById("subTotal").innerText = subTotalValue;
}
