//Calculation of Simple Interest
function compute() {
    //Show alert if the number is not entered or entered number is negative
    if (principal.value < 1) {
        alert("Enter a positive number ")
        principal.focus()
        return
    }
    let interest = principal.value * years.value * rate.value / 100;
    year = new Date().getFullYear() + parseInt(years.value);
    result = document.getElementById("result")
    result.innerHTML = "<p>If you deposit <mark>" + principal.value + "</mark>,<br>an interest rate of <mark>" + rate.value + "%</mark>.<br>You will receive an amount of <mark>" + interest + "</mark>,<br>in the year <mark>" + year + "</mark></p>";
      
}
// To update the rate of interest
function UpdateRate() {
    rate.value
    document.getElementById("rate_val").innerText = rate.value + "%"
}

function loadPage() {
    var rate = document.getElementById("rate");
    var principal = document.getElementById("principal");
    var years = document.getElementById("years");
    //options for select dropdown
    for (i = 1; i <= 10; i++) {
        let element = document.createElement("option")
        element.innerText = i
        element.setAttribute("value", i)
        years.appendChild(element)
    }
}