const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

function gocurrency() 
{
  window.location.href = "html/buycurrencies.html";
}

function gogold() 
{
  window.location.href = "gold.html";
}

function gomutualFunds() 
{
  window.location.href = "mutualFunds.html";
}


btn1.onclick = gocurrency;
btn2.onclick = gogold;
btn3.onclick = gomutualFunds;
