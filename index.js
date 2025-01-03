// call back function
// cbf pasees the values
function userName(x,y) {
  console.log("i am shiva");
  x();
  y();
  return "hello"
}
console.log(userName(function userName() {
    console.log("fan of pawan kalyan");
  },function hobbies(){
      console.log("i love travelling")
  }))

// higher order function:
//it passes and returns the value
function demo1() {
  return function demo2() {
    // console.log("hiiiiiii")
    return "byeee";
  };
}
//  console.log (demo1())
let x = demo1();
console.log(x());

function class1() {
  console.log("hiiiiii");
  return function () {
    return "hello";
  };
}
// console.log(class1())
let op = class1();
console.log(op());

// scope
let a = 10;
var b = 20;
const c = 30;
function demo() {
  console.log(a);
}
demo();
if (true) {
  console.log(b);
}
if (true) {
  console.log(c);
}

// lets declare variables in a block
if (true) {
  var a1 = "i am var";
  let b1 = "i am let";
  const c1 = "i am const";
  console.log(b1);
}
console.log(a1); //var will have global scope if we decalre in a block
// console.log(b1)
// console.log(c1)
//let and const will have scope but not global scope if we declare them in a block
