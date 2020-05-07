//1. Create a new variable called "counter" and give it a value of 10
let counter = 10;

//2. Create a new variable called "numbers" which is an array with nothing in it

let numbers = [];

//3. Write a for loop that runs 10 times and each time it runs add 73 to the counter variable and adds the current value of counter to the numbers array
for (let i = 0; i < 10; i++) {
  counter = counter + 73;
  numbers.push(counter);
}
//4. Cause the "numbers" array to be logged to the console
console.log(numbers);

//5. If the value of the "counter" variable is greater than 740 log "too big" to the console; otherwise log "not too big"
if (counter > 740) {
  console.log('too big');
} else {
  console.log('not to big');
}

//6. Create a new variable called "stats" which is an empty object
let stats = {};
//7a. Create a function called "getStats" which does the following
//7b. takes in two parameters called "statsObj" (which is an object) and "numbersArr" (which is an array)

//7c. loops through the "numbersArr" array, finds the largest number, and sets (it as a property called "largestNum" on "statsObj"
let Numbers = [1, 2, 101, 45, 55, 1443];
function getStats(statsObj, numbersArr) {
  // or we can use Math.max
  var max = -Infinity;

  for (i = 0; numbersArr.length > i; i++) {
    if (numbersArr[i] > max) {
      max = Numbers[i];
    }
  }
  statsObj.largestNum = max;
  console.log(statsObj);
  let a = 0;
  let arrTotal = 0;
  while (a < numbersArr.length) {
    arrTotal += numbersArr[a];
    a++;
  }
  let averageNum = arrTotal / numbersArr.length;
  statsObj.averageNum = averageNum;
  return statsObj;
}

testStats = getStats(stats, numbers);
console.log(testStats);
console.log(
  `The Largest number was ${testStats.largestNum} and the average of all the numbers was ${testStats.averageNum}`,
);

//7d. loops through the "numbersArr" array in a while loop and adds all the numbers together into a variable called "arrTotal"

//7e. divide "arrTotal" by the number of elements in "numbersArr" (this number should be obtained using JavaScript, not hard-coded) and store this in a property called "averageNum" on "statsObj"

//7f. return "statsObj"

//8. Call the "getStats" function and pass in the "stats" object and the "numbers" array and store the returned value into a new variable called "testStats"

//9. Log the values of the "largestNum" and "averageNum" properties of the returned object to the console in the format "The largest number was ## and the average of all the numbers was ##"
