var Num = 0;
var newNum;

setNumber();
displayNumber();

function setNumber(buttonNumber){
  Num = buttonNumber;
}

function displayNumber(){
  document.getElementById("answer").innerHTML = Num;
}

console.log(Num);
