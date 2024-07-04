// JS Dictionary or map or Associate Array, etc
let curr = {
  Rupee: {USD : 1/83.48, EUR: 1/90.08},
  EUR: {USD: 90.08/83.49,  Rupee: 90.08},
  USD: {Rupee: 83.48, EUR: 83.49/90.08}
}

let amut = document.getElementById('amount');
let resultBtn = document.getElementById('resultBtn');
let currency1 = document.getElementById('fromCurrency');
let currency2 = document.getElementById('toCurrency');

let ans = document.getElementById('ans');

function cal(event)
{
  event.preventDefault();
  let from = currency1.value;
  let to = currency2.value;
  let result = 0;

  if(from == to)
  {
    result = amut.value;
  }
  else
  {
    result = (amut.value * curr[from][to]).toFixed(2);
  }

  ans.innerText = `${amut.value}${from} = ${result}${to}`;
  ans.style.cssText = "color:wheat;  font-size: 22px;";

    
}

resultBtn.addEventListener('click', cal);



