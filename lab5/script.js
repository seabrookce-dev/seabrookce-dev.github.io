let accountBalance = $100;
const withdrawAmount = $20;
const depositAmount = $20

function withdraw() {
    accountBalance = accountBalance - withdrawAmount;

    const balanceText = document.getElementById("current-balance");
    const statusText = document.getElementById("status-message");

    if(currentBalance > 0)
    {
        balanceText.innerText = "Current Balance: $" + currentBalance;
        statusText.innerText = "You've withdrawn $20 from your account!";
    }
    else
    {
        healthText.innerText = 0;
        statusText.innerText = "OVERDRAFT REACHED";
        statusText.style.color = "#e52611";
        statusText.style.fontWeight = "bold";

        document.body.style.backgroundColor = "#5a1a1a";

        document.querySelector("button").disabled = true;
        document.querySelector("button").innerText = "Overdraft";
    }
}

function deposit() {
    accountBalance = accountBalance - depositAmount;

    const balanceText = document.getElementById("current-balance");
    const statusText = document.getElementById("status-message");

    if(currentBalance > 0) 
    {
        balanceText.innerText = "Current Balance" + currentBalance;
        statusText.innerText = "You've deposited $20 from your account!";


    }

}

