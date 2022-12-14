const isOdd = function (num) {
  return num % 2 === 1;
};

console.log('3 is odd: ' + isOdd(3));
console.log('8 is odd: ' + isOdd(8));

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
  ['Codeville Epic Academy', 15, 'school'],
  ['Big Al Pizza', 50, 'restaurant'],
];

function chooseStations(stations) {
  const goodStations = [];
  for (const station of stations) {
    const capacity = station[1];
    console.log(capacity);

    if (capacity >= 20) {
      console.log(station[0]);
      const type = station[2];
      if (type === 'school' || type === 'community centre') {
        goodStations.push(station[0]);
      }
    }
  }
  return goodStations;
}
console.log(chooseStations(stations));
let moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

function finalPosition(moves) {
  const position = [0, 0];
  for (const move of moves) {
    if (move === 'east') {
      position[0] += 1;
    } else if (move === 'north') {
      position[1] += 1;
    } else if (move === 'west') {
      position[0] -= 1;
    } else if (move === 'south') {
      position[1] -= 1;
    }
  }
  return position;
}
console.log(finalPosition(moves));

function ageCalculator(name, yearOfBirth, currentYear) {
  const age = currentYear - yearOfBirth;

  return name + ' is ' + age + ' years old.';
}

console.log(ageCalculator('Suzie', 1983, 2015));
console.log(ageCalculator('Miranda', 1983, 2015));
console.log(ageCalculator('Ferdinand', 1988, 2015));

function howManyHundreds(num) {
  let count = Math.floor(num / 100);
  return count;
}
console.log(howManyHundreds(999));

function calculateRectangleArea(length, width) {
  const Area = length * width;
  if (length < 0 || width < 0) {
    return undefined;
  }
  return Area;
}
function calculateTriangleArea(base, height) {
  const Area = (base * height) / 2;
  if (base < 0 || height < 0) {
    return undefined;
  }
  return Area;
}
function calculateCircleArea(radius) {
  const Area = Math.PI * radius ** 2;
  if (radius < 0) {
    return undefined;
  }
  return Area;
}
console.log(calculateRectangleArea(10, 5)); // should print 50
console.log(calculateRectangleArea(1.5, 2.5)); // should print 3.75
console.log(calculateRectangleArea(10, -5)); // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined

