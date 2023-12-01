# Functions (Javascript Challenge)

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> Task #5: Function (Expression, Return, Pass Arguments and Parameters, IIFE) (Reference)explain that functions.
>
> Here I've Created a differnce type of functions.

```js
//function declaration with rest parameters -> rest parameters bundling up the arguments into array.

function calcAvaerage(...rest) {
  let n = rest.length;
  let total = rest.reduce((a, b) => a + b);
  let avg = total / n;
  console.log(avg);
}
calcAvaerage(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//function expression with return
let add = function addNums(num1, num2) {
  return num1 + num2;
};
let sum = add(5, 5); //calling function
console.log(sum);

//annonymus function
let calcAge = function () {
  let currentDate = new Date();
  let birthYear = 2002;
  let currentYear = currentDate.getFullYear();
  let myAge = currentYear - birthYear;
  console.log(`my Age is ${myAge}`);
};
calcAge();

//arrow function
let product = (a, b) => {
  return a * b;
};
console.log(product(10, 5));

//callback function
function func(callback) {
  callback();
}
function callback() {
  console.log("i'm call back function");
}
func(callback);
```

### Live link ->

Deploy it and put the link here.

## Acknowledgement:

- [@AnbuSelvan](https://github.com/anburocky3) | GitHub Profile.

## References:

- [Cyberdude Javascript playalist](https://www.youtube.com/playlist?list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa)
