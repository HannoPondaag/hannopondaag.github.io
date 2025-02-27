//TABLE OF X PROGRAM

const textBox = document.getElementById("textBox");
const toResult = document.getElementById("toResult");
const result = document.getElementById("result");


function tafelvan(){

   for(let i=1;i<11;i++){
   if(toResult.checked){
    result.textContent = i+ "x " + textBox.value + "= " + i * textBox.value;
  }
  }
}

