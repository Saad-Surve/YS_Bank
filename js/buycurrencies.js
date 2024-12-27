console.log("Hello World!")
const URL = "https://api.exchangerate-api.com/v4/latest/USD";
//Bro idhar api url ko store kar raha hu
async function catch1() 
{
    let response = await fetch(URL)
    console.log(response)
    let data = await response.json()
    console.log(data)
}

catch1()