

var input_name = document.querySelector('.input-names');
var input_number = document.querySelector('.input-numbers');

var submit = document.querySelector('.btn').addEventListener("click",()=>{

   var newone = document.createElement('h3');
   var newtwo = document.createElement('h3');
   
   newone.classList.add('output-names');
   newtwo.classList.add('output-numbers');
   newone.textContent = input_name.value;
   newtwo.textContent = input_number.value;
   var viewtwo = document.querySelector('.view2');
   viewtwo.appendChild(newone);
   viewtwo.appendChild(newtwo);





})










