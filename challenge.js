// 3의 배수면 루피 출력
// 4의 배수면 라이트하우스 출력
// 3과 4의 배수면 루피라이트하우스 출력
// 100~200

// for (let i = 100; i < 200; i++) {
//   if (i % 3 == 0 && i % 4 == 0) {
//     console.log('LoopyLighthouse');
//   } else if (i % 3 == 0) {
//     console.log('Loopy');
//   } else if (i % 4 == 0) {
//     console.log('Lighthouse');
//   } else {
//     console.log(i);
//   }
// }

// const whichSchool  = function (age) {
//   if(age < 13 && age >= 1){
//   return "Elementary School" 
//   }else if(age >= 13 && age < 18){
//     return "Secondary School"
//   } else{
//    return "Lighthouse Labs"
//   }
// }
// console.log(whichSchool(19));

function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(length) {
  // Let's build a huge string equivalent to the triangle
  var triangle = "";

  //Let's start from the topmost line
  var lineNumber = 1;

  for(lineNumber=1; lineNumber<=length; lineNumber++){
      // We will not print one line at a time.
      // Rather, we will make a huge string that will comprise the whole triangle
      triangle = triangle + makeLine(lineNumber);
  }
  return triangle;
}

// test your code by uncommenting the following line
// Note that the function buildTriangle() must return a string 
// because the console.log() accepts a string argument
console.log(buildTriangle(10));