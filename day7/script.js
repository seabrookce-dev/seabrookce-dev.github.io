let playerHealth = 100;
const damageAmount = 30;

function takeDamage() {
    playerHealth = playerHealth - damageAmount;

    const healthText = document.getElementById("health-display");
    const statusText = document.getElementById("status-message");

    if(playerHealth > 0)
    {
        healthText.innerText = playerHealth;
        statusText.innerText = "You've been hit!";
    }
    else
    {
        healthText.innerText = 0;
        statusText.innerText = "GAME OVER!";
        statusText.style.color = "#e52611";
        statusText.style.fontWeight = "bold";

        document.body.style.backgroundColor = "#5a1a1a";

        document.querySelector("button").disabled = true;
        document.querySelector("button").innerText = "Dead";
    }



}