//Tafel van X functionaliteit

const textBox=document.getElementById("textBox");
const result=document.getElementById("result");
const int value=document.getElementById("value").value;
function tafelvan (){
  for (let i=1;i<11;i++){
    result.textContent = i + "x" + value + "=" +i*value;
}

