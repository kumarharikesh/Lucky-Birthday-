const date=document.querySelector("#date");
const inputNumber=document.querySelector("#number");
const outputTag = document.querySelector(".output");
const reset = document.querySelector("#clear");


const inputNumberValue = Number(inputNumber.value);
const dateValue = date.value;

// Calculating the luck
function isLuckyNumber() {

    let sum = 0;
    console.log(inputNumberValue);
    for (let digit of dateValue) {
        if(!isNaN(digit)){
            sum = sum + Number(digit);
            console.log(digit);  
        }
        console.log(digit);
    }
    console.log(sum);
    if(sum % inputNumberValue === 0) {
        outputTag.innerHTML="Hurrah!, Your Birthday is Lucky."
    }else {
        outputTag.innerHTML="Sorry!, Your lucky number is not lucky enough to make your birthday lucky. Try with another lucky number.."
    }
}

reset.addEventListener("click", function() {
    outputTag.innerText = "";
});

document.getElementById("lucky-birth-form").addEventListener("submit", function(event) {
    isLuckyNumber();
    event.preventDefault();
});
