console.log("Hello World!")
const URL1 = "https://api.exchangerate-api.com/v4/latest/USD";
const URL2 = "https://restcountries.com/v3.1/alpha/IN";


let from = document.getElementById("from");
let to = document.getElementById("to");
let flag1 = document.getElementById("flag1");
let flag2 = document.getElementById("flag2");
console.log(flag1.src)

async function changeflag1(element) 
{
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


from.addEventListener("change", (e) => changeflag1(e.target));
to.addEventListener("change", (e) => changeflag2(e.target));
