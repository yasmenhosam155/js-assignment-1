//  -Q1
const result = Number("123") + 7;
console.log(result);

//--------------------------------------------------------------------------
// -Q2

function isFalsy(input) {
  if (
    input == null ||
    input == undefined ||
    input == "" ||
    input == 0 ||
    input == false ||
    input == NaN
  ) {
    return "Invalid";
  } else {
    return "Valid Truthy Value";
  }
}

console.log(isFalsy(""));
console.log(isFalsy(0));
console.log(isFalsy(false));
console.log(isFalsy("yasmen"));
console.log(isFalsy("2"));

//--------------------------------------------------------------------------
// -Q3
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue;
  else console.log(i);
}

//--------------------------------------------------------------------------
// -Q4

const arr = [1, 2, 3, 4, 5];
const evenArr = arr.filter((index) => {
  return index % 2 == 0;
});

console.log(evenArr);

//--------------------------------------------------------------------------
// -Q5

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];
console.log(merged);

//--------------------------------------------------------------------------
// -Q6

function dayOfWeek(dayNum) {
  switch (dayNum) {
    case 1:
      console.log("Sunday");
      break;
    case 2:
      console.log("Monday");
      break;
    case 3:
      console.log("Tuesday");
      break;
    case 4:
      console.log("Wednesday");
      break;
    case 5:
      console.log("Thursday");
      break;
    case 6:
      console.log("Friday");
      break;
    case 7:
      console.log("Saturday");
      break;

    default:
      break;
  }
}

dayOfWeek(2);

//--------------------------------------------------------------------------
// -Q7

const arrStr = ["a", "ab", "abc"];
const arrLength = arrStr.map((element) => {
  return element.length;
});

console.log(arrLength);

//--------------------------------------------------------------------------
// -Q8

function divisable(num) {
  if (num % 3 == 0 && num % 5 == 0) {
    return "Divisible by both";
  } else if (num % 3 == 0) {
    return "Divisible by 3 only";
  } else if (num % 5 == 0) {
    return "Divisible by 5 only";
  } else {
    return "Not divisible ";
  }
}

console.log(divisable(15));

//--------------------------------------------------------------------------
// -Q9

const square = (num) => {
  return num * num;
};

console.log(square(5));

//--------------------------------------------------------------------------
// -Q10

const person = { name: "John", age: 25 };

function extract(obj) {
  return `${obj.name} is ${obj.age} years old`;
}

console.log(extract(person));

//--------------------------------------------------------------------------
// -Q11

function sum({ n1 = 0, n2 = 0, n3 = 0, n4 = 0, n5 = 0 }) {
  return n1 + n2 + n3 + n4 + n5;
}

console.log(
  sum({
    n1: 1,
    n2: 2,
    n3: 3,
    n4: 4,
    n5: 5,
  }),
);

//--------------------------------------------------------------------------
// -Q12

function delayedSuccess() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("success");
    }, 3000);
  });
}
delayedSuccess()
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.error("Error:", err);
  });

//--------------------------------------------------------------------------
// -Q13

const inputArr = [1, 3, 7, 2, 4];

function largest(arrNum) {
  arrNum.sort();
  console.log(`Largest Number is ${arrNum[arrNum.length - 1]}`);
}

largest(inputArr);

//--------------------------------------------------------------------------
// -Q14

function getKeys(obj) {
  return Object.keys(obj);
}

const user = {
  name: "john",
  age: 25,
};

console.log(getKeys(user));

//--------------------------------------------------------------------------
// -Q15

function splitWords(input) {
  return input.split(" ");
}

console.log(splitWords("The quick brown fox"));

//----------------------------------------------------------------------------ESSAY------------------------------------------------------------------------

/**
 *
 *
 * 1. What is the difference between forEach and for...of? When would you use each?
 * for each means for every element inside this array execute this method for it
 * for...of means for every element inside this object check if there is some value == x (example)
 *
 * 2.What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples.
 * hoisting : means this variables already declared on the top and we can use it
 * TDZ : means that this varaible can't be used before initialize it
 *
 * 3.What are the main differences between == and ===?
 * == : compares between values and check if there are same (without care about the data type) (5 == "5")
 * === : strict compare between values that first value must be same of the another value in data type ( "5" === "5")
 *
 * 4.Explain how try-catch works and why it is important in async operations.
 * try-catch works that it execute operation and on sucess it gives us output and if there is error ,it catch error and display it
 * its important becuase if there is error catched the program not stop , its handled
 *
 * 5. What’s the difference between type conversion and coercion? Provide examples of each.
 * conversion : we convert data type to another data type (const x = Number("5") , result will be 5)
 * coercion : javascript convert data type to another during an operation (console.log(5 + "10"),  , result will be 510)
 *
 *
 */
