# Array Primitive (Javascript Challenge)

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> Task #3: Create an Array with primitive datatypes and manipulate with _Crud_ operations.
>
> Here I've Created an Array with favorite food list and manipulate with the crud operations.

```js
let favFoods = ["parotta", "biriyani", "chikencurry", "oniondosa", "Noodles"];

//adding food items to arrray
let addItem = (foodItem) => {
  favFoods.push(foodItem);
};
addItem("poori");

console.log(favFoods);

//reading array
function printFoods() {
  console.log("😍 my fav Foods");
  favFoods.forEach((e) => {
    console.log("😋 " + e);
  });
}
printFoods();
//update
let updateFood = (curfood, upfood) => {
  let findIndex = favFoods.indexOf(curfood);
  //override with another value
  favFoods[findIndex] = upfood;
};
updateFood("parotta", "wheatparotta");
console.log(favFoods);

//delete
let deleteFood = (food) => {
  let findIndex = favFoods.indexOf(food);
  favFoods.splice(findIndex, 1);
  console.log(`${food} was deleted from array!....`);
};
deleteFood("oniondosa");
printFoods();
```

### Live link ->

Deploy it and put the link here.

## Acknowledgement:

- [@AnbuSelvan](https://github.com/anburocky3) | GitHub Profile.

## References:

- [Cyberdude Javascript playalist](https://www.youtube.com/playlist?list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa)
