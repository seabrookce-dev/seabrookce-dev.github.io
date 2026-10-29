//Creating variables for our code
let linesOfCode = 1000;

let clickPower = 1;
let upgradeCost = 50;

let doublePower = 2;
let typewriterCost = 100;

let interns = 0;
let internCost = 100;

let coders = 0;
let coderCost = 150;

function writeCode() 
{
    linesOfCode = linesOfCode + clickPower;
    updateScreen();
}

function buyKeyboard() 
{
    if (linesOfCode >= upgradeCost) 
    {
        linesOfCode = linesOfCode - upgradeCost;
        clickPower = clickPower +1;
        upgradeCost = upgradeCost *1.5;
        updateScreen();    
    }
}

function buyTypewriter() 
{
    if (linesOfCode >= typewriterCost) 
    {
        linesOfCode = linesOfCode - typewriterCost;
        doublePower = doublePower +2;
        typewriterCost = typewriterCost *1.5;
        updateScreen();    
    }
}

function buyIntern()
{
    if(linesOfCode >= internCost)
    {
        linesOfCode = linesOfCode - internCost;
        interns = interns + 1;
        internCost = internCost *1.5;
        updateScreen()
    }
}

function buyCoder()
{
    if(linesOfCode >= coderCost)
    {
        linesOfCode = linesOfCode - coderCost;
        coders = coders + 1;
        coderCost = coderCost *1.5;
        updateScreen()
    }
}

function updateScreen() 
{
    document.getElementById("score-display").innerText = linesOfCode + "lines of code";

    document.getElementById("power-display").innerText = clickPower;
    document.getElementById("cost-display").innerText = upgradeCost;

    document.getElementById("power-display").innerText = doublePower;
    document.getElementById("cost-typewriter-display").innerText = typewriterCost;


    document.getElementById("intern-display").innerText = interns;
    document.getElementById("cost-intern-display").innerText = internCost;

    document.getElementById("coder-display").innerText = coders;
    document.getElementById("cost-coder-display").innerText = coderCost;
}

setInterval(function() {
    if (interns > 0) 
    {
        linesOfCode = linesOfCode + interns;
        updateScreen();
    }
}, 
1000
);

setInterval(function() {
    if (coders > 0) 
    {
        linesOfCode = linesOfCode + coders;
        updateScreen();
    }
}, 
1000
);