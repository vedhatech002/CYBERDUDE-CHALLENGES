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
