let incomeValue = document.getElementById("income");
let calBtn = document.getElementById("calculation");
let foodCost = document.getElementById("foodCost");
let houseCost = document.getElementById("houseCost");
let transportCost = document.getElementById("transportCost");
let btn = document.getElementById("calculation");
let totalCost = document.getElementById("totalCost");
let totalBalance = document.getElementById("totalBalance");
let savingValue = document.getElementById("saving");
let saveBtn = document.getElementById("saveBtn");
let saveBalance = document.getElementById("saveBalance");
let ReamingBalance = document.getElementById("RemaingBalance");
let incomeError = document.getElementById("incomeError");
let foodError = document.getElementById("foodError");
let houseError = document.getElementById("houseError");
let transportError = document.getElementById("transportError");
let saveBalanceError = document.getElementById("saveBalanceError");
let remainingBalanceError = document.getElementById("remainingBalanceError");

btn.addEventListener("click", calculation);
function calculation() {
  let foodCostValue = checkValue(foodCost.value, foodError);
  let houseCostValue = checkValue(houseCost.value, houseError);
  let transportValue = checkValue(transportCost.value, transportError);
  if (parseInt(incomeValue.value) > 0) {
    incomeError.innerHTML = "";
    calculationFunction(foodCostValue, houseCostValue, transportValue);
    transportCost.value = "";
    // incomeValue.value = "";
    foodCost.value = "";
    houseCost.value = "";
  } else {
    if (!parseInt(incomeValue.value)) {
      incomeError.innerHTML = "Please input Number Value";
    } else {
      incomeError.innerHTML = "Please input Positive Value";
    }
  }
  
}
function checkValue(cost, error) {
  if (parseInt(cost) > 0) {
    error.innerHTML = "";
    return parseInt(cost);
  } else {
    if (!parseInt(cost)) {
      error.innerHTML = "Please input Number Value";
    } else {
      error.innerHTML = "Please input Positive Value";
    }
  }
}
function calculationFunction(foodCost, houseCost, transportCost) {
  const totalCostValue =
    parseInt(foodCost) + parseInt(houseCost) + parseInt(transportCost);
  const TotalBalances = parseInt(incomeValue.value) - totalCostValue;
  totalCost.innerHTML = totalCostValue;
  totalBalance.innerHTML = TotalBalances;
  
//   houseCost.value = "";
  
}

saveBtn.addEventListener("click", savingFunction);
function savingFunction() {
  const saveValue =
    (parseInt(savingValue.value) / 100) * parseInt(incomeValue.value);
  saveBalance.innerHTML = saveValue;
  const RemaingBalance =
    parseInt(incomeValue.value) - (parseInt(totalCost.innerHTML) + saveValue);
    savingValue.value = "";
    if (RemaingBalance > 0) {
        ReamingBalance.innerHTML = RemaingBalance;
        remainingBalanceError.innerHTML=''
    }else{
        ReamingBalance.innerHTML = '0'
        remainingBalanceError.innerHTML = 'You have not enough balance'
    }
}
