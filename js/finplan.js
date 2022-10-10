function calcfd()
{
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();
    var period= f1.period.value;
    var principle = f1.principle.value;
    var c = new Date(year , month, day + period*365);
    var roi = 0.06;
    var amount = principle*Math.pow(1.06,period)
    principle = principle.toString();
    if (f1.period.value==0||f1.principle.value==0) {
        alert("Please enter something.")
    }
    else{
    document.getElementById("invamt").innerHTML = "₹ "+ principle;
    document.getElementById('dur').innerHTML = period + " years";
    document.getElementById('mtdate').innerHTML = c.toLocaleDateString("en-UK");
    document.getElementById('mtamt').innerHTML = "₹ "+amount.toFixed(2);
    document.getElementById('roi').innerHTML = roi*100+"%";
    }
}