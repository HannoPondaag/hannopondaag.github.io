//TABLE OF X PROGRAM

const textBox = document.getElementById("textBox");
const toResult = document.getElementById("toResult");
const result = document.getElementById("result");


function tafelvan(){
   let text = "";
   for(let i=0;i<10;i++){
       if(toResult.checked){
      text += "Dummy" + "<br>";
  }
   }
   document.getElementById("result").innerHTML = text;
}

