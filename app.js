var updateGrandTotal = function() {
  var goombasTotal = document.querySelector("#goombas-total").innerHTML || 0;
  var bobombsTotal = document.querySelector("#bobombs-total").innerHTML || 0;
  var cheepcheepsTotal = document.querySelector("#cheepcheeps-total").innerHTML || 0;

  document.querySelector("#grand-total").innerHTML = parseInt(goombasTotal) + parseInt(bobombsTotal) + parseInt(cheepcheepsTotal);
}

var goombasBtn = document.querySelector("#goombas-submit");

goombasBtn.addEventListener("click", function() {
  var amountGoombasElem = document.querySelector("#rate");
  var amountGoombasValue = parseInt(amountGoombasElem.value);

  var priceGoombasElem = document.querySelector("#amount-of-goombas");
  var priceGoombasValue = parseInt(priceGoombasElem.value);
  document.querySelector("#goombas-total").innerHTML = priceGoombasValue * amountGoombasValue;
  updateGrandTotal();
});

var bobombsBtn = document.querySelector("#bobombs-submit");

bobombsBtn.addEventListener("click", function() {
  var amountBobombsElem = document.querySelector("#rate");
  var amountBobombsValue = parseInt(amountBobombsElem.value);

  var priceBobombsElem = document.querySelector("#amount-of-bobombs");
  var priceBobombsValue = parseInt(priceBobombsElem.value);
  document.querySelector("#bobombs-total").innerHTML = priceBobombsValue * amountBobombsValue;
  updateGrandTotal();
});

var cheepcheepsBtn = document.querySelector("#cheepcheeps-submit");

cheepcheepsBtn.addEventListener("click", function() {
  var amountCheepcheepsElem = document.querySelector("#rate");
  var amountCheepcheepsValue = parseInt(amountCheepcheepsElem.value);

  var priceCheepcheepsElem = document.querySelector("#amount-of-cheepcheeps");
  var priceCheepcheepsValue = parseInt(priceCheepcheepsElem.value);
  document.querySelector("#cheepcheeps-total").innerHTML = priceCheepcheepsValue * amountCheepcheepsValue;
  updateGrandTotal();
});
