//Tafel van X functionaliteit

const textBox=document.getElementById("textBox").value;
const result=document.getElementById("result");
const number=document.getElementById("number")
function Tafelvan (){
  for (let i=1;i<11;i++){
    result.textContent = i + "x" + number + "=" +value(i*textBox);
}

