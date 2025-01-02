console.log("Hello World!")
const URL1 = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const URL2 = "https://restcountries.com/v3.1/alpha/IN";
let btn = document.getElementById("cnvrt-btn")
let from = document.getElementById("from");
let to = document.getElementById("to");
let amt = document.getElementById("amt");
let flag1 = document.getElementById("flag1");
let flag2 = document.getElementById("flag2");
let msg = document.getElementById("msg")




async function changeflag1(element) {
    console.log(element.value);
    console.log(element)
    const URL3 = `https://restcountries.com/v3.1/alpha/${element.value}`;
    let response = await fetch(URL3)
    let data = await response.json()
    let flaglink = data[0].flags.png
    flag1.src = flaglink;


}
async function changeflag2(element) {
    console.log(element.value);
    console.log(element)
    const URL3 = `https://restcountries.com/v3.1/alpha/${element.value}`;
    let response = await fetch(URL3)
    let data = await response.json()
    let flaglink = data[0].flags.png
    flag2.src = flaglink;

}

async function convertCurrency() 
{
    let currFrom = from.options[from.selectedIndex].getAttribute('data-value1').toLowerCase();
    let currTo = to.options[to.selectedIndex].getAttribute('data-value2').toLowerCase();
    let amt1 = amt.value
    const URL4 = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currFrom}.min.json`
    console.log(URL4)
    let response = await fetch(URL4)
    let data = await response.json()
    let rate = (data[currFrom][currTo])
    let amt2 = amt1*rate
    msg.innerText = `${amt1} ${currFrom.toUpperCase()} = ${amt2.toFixed(2)} ${currTo.toUpperCase()}`
    msg.style.display = "block";

}


from.addEventListener("change", (e) => changeflag1(e.target));
to.addEventListener("change", (e) => changeflag2(e.target));
btn.addEventListener("click", convertCurrency)
