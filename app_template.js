//your code here!
document.addEventListener('DOMContentloaded',modifyId);
let inputNum = document.getElementById("input-number");
let inputButton1 = document.getElementById("button-compute");
let outputResult1 = document.getElementById("compute-result");
let inputRow = document.getElementById("input-row");
let inputCol = document.getElementById("input-col");
let inputButton2 = document.getElementById("button-create-table");
let outputTable = document.getElementById("table");

function modifyId(){
    let myId = Number(620610786);
    outputResult1.innerHTML = myId + Number(inputNum.value);
}
inputButton1.addEventListener('click',modifyId);