const date=document.querySelector("#date");
const inputNumber=document.querySelector("#number");
const outputTag = document.querySelector(".output");
const reset = document.querySelector("#clear");

var inputNumberValue = Number("");
inputNumber.addEventListener("input", function(){
    inputNumberValue = Number(inputNumber.value);
})

var dateValue;
date.addEventListener("input", function(){
    dateValue = date.value;
})

function dobSum(date){
    let sum = 0;
    for (let digit of date) {
        if(!isNaN(Number(digit))){
            sum = sum + Number(digit);
            console.log(digit);  
        }
    }
    console.log(sum);
    console.log(inputNumberValue);
    return sum;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

// Calculating the luck
async function isLuckyNumber() {

    outputTag.innerText ="";
    outputTag.style.textAlign = "left";
    outputTag.setAttribute("placeholder", "Loading");
    await sleep(500);
    outputTag.setAttribute("placeholder", "Loading.");
    await sleep(500);
    outputTag.setAttribute("placeholder", "Loading..");
    await sleep(500);
    outputTag.setAttribute("placeholder", "Loading...");
    await sleep(500);
    outputTag.setAttribute("placeholder", "Loading..");
    await sleep(500);
    outputTag.setAttribute("placeholder", "Loading.");
    await sleep(500);
    outputTag.setAttribute("placeholder", "Loading");
    await sleep(500);
    outputTag.setAttribute("placeholder", "Loading.");
    await sleep(500);
    outputTag.setAttribute("placeholder", "Loading..");
    await sleep(500);
    outputTag.setAttribute("placeholder", "Loading...");
    await sleep(500);

    var sum = dobSum(dateValue);
    if(sum % inputNumberValue === 0) {
        outputTag.innerHTML=`Hurrah!, Your Birthday "${dateValue}" is Lucky.`;
        outputTag.style.textAlign = "center";
        outputTag.style.color = "green";
    }else {
        outputTag.innerHTML=`Sorry!, Your lucky number "${inputNumberValue}" is not lucky enough to make your birthday "${dateValue}" lucky. Try with another lucky number..`;
        outputTag.style.textAlign = "center";
        outputTag.style.color = "red";
    }
}

reset.addEventListener("click", function() {
  outputTag.innerText="";
  outputTag.setAttribute("placeholder", "Output will be shown here...");
  outputTag.style.textAlign = "left";
});

document.getElementById("lucky-birth-form").addEventListener("submit", function(event) {
    isLuckyNumber();
    event.preventDefault();
});