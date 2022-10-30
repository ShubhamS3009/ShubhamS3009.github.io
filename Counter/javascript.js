let count_display = document.getElementById("count");
let inc = document.getElementById("inc");
let dec = document.getElementById("dec");
let reset = document.getElementById("reset")

let count = 0;

function Increment()
{
 count++;
 count_display.innerHTML = count;
 console.log("increment:", count);
}

function Decrement()
{
    count--;
    count_display.innerHTML = count;
    console.log("decrement:", count);
}
function Reset()
{
    count = 0;
    count_display.innerHTML = count;
    console.log("reset:", count);
}