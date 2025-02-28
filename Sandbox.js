//TABLE OF X PROGRAM

const textBox = document.getElementById("textBox");
const toResult = document.getElementById("toResult");
const result = document.getElementById("result");


function tafelvan(){
   let text = "";
   for(let i = 1; i < 11;i++){
       if(toResult.checked){
      text += i + " x " + textBox.value + " = " + i * textBox.value + "<br>";
  }
   }
   document.getElementById("result").innerHTML = text;
}

