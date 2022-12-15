const ingredients = [
  'eggs',
  'milk',
  'flour',
  'sugar',
  'baking soda',
  'baking powder',
  'chocolate chips',
  'bananas',
];

// Write a while loop that prints out the contents of ingredients:
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
// Write a for loop that prints out the contents of ingredients:
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let i = ingredients.length - 1; i > 0; i--) {
  console.log(ingredients[i]);
}

// function range(start, end, step) {
//   const array = [];
//   if (
//     start > end ||
//     step <= 0 ||
//     start === undefined ||
//     end === undefined ||
//     step === undefined
//   ) {
//     return array;
//   } else {
//     for (let i = start; i <= end; i += step) {
//       array.push(i);
//     }
//     return array;
//   }
// }
// console.log(range(0, 10, 2));
// console.log(range(10, 30, 5));
// console.log(range(10, 2, 2));

// function lastIndexOf(array, num) {

//   for (let i = array.length - 1; i >= 0; i--) {
//     if (array[i] === num) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(lastIndexOf([0, 1, 4, 1, 2], 1), '=?', 3);
// console.log(lastIndexOf([0, 1, 4, 1, 2], 2), '=?', 4);
// console.log(lastIndexOf([0, 1, 4, 1, 2], 3), '=?', -1);
// console.log(lastIndexOf([5, 5, 5], 5), '=?', 2);
// console.log(lastIndexOf([], 3), '=?', -1);

function concat(arr1, arr2) {
  const arr3 = arr1.concat(arr2);
  return arr3;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);