let bill = document.getElementById("billAmount");
let percentage = document.getElementById("percentageTip");
let tip = document.getElementById("tipAmount");
let total = document.getElementById("totalAmount");
let error = document.getElementById("errorMessage");
let message = "Please Enter a Valid Input.";

function calculateTip() {
    if (bill.value === "") {
        error.textContent = message;
    } else if (percentage.value === "") {
        error.textContent = message;
    } else {

        let ba = parseInt(bill.value);
        let pt = parseInt(percentage.value);

        let ta = (ba / 100) * pt;
        let tot = ba + ta;

        tip.value = ta;
        total.value = tot;
        error.textContent = "";
    }
}