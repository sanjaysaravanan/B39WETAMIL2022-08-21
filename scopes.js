// top 
var a = 100;
function SampleFunc() {
  //function level
  var x = 99;
  {
    var z = 100;
  }
}

SampleFunc();


// what is the scope a ---> global
// what is the scope x ---> function
// what is the scope SampleFunc --> global

console.log(z);