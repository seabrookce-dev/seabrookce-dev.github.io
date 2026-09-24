let accountBalance = 100;
const withdrawAmount = 20;

function takeDamage() {
    accountBalance = accountBalance - withdrawAmount;

    const healthText = document.getElementById("current-balance");
    const statusText = document.getElementById("status-message");

    if(playerHealth > 0)
    {
        healthText.innerText = playerHealth;
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



