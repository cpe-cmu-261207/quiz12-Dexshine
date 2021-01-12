//your code here!
document.addEventListener('DOMContentloaded',modifyId);
let inputNum = document.getElementById("input-number");
let outputButton1 = document.getElementById("button-compute");
let outputResult1 = document.getElementById("compute-result");
function modifyId(){
    let myId = Number(620610786);
    outputResult1.innerHTML = myId + Number(inputNum.value);
}
outputButton1.addEventListener('click',modifyId);