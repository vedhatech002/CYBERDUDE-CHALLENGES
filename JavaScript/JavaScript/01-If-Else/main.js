//program to greet based on current time using if else

//Conditions
// IF the hour is between 0 to 12 -> Good Moorning
// IF the hour is between 12 to 17 -> Good Afternoon
// IF the hour is greaterthan 17 -> Good Evening

//get current date using date()[inbuildobject]  and assigning it to hour variable
const hour = new Date();
//get current hour using getHours() method and assigning to hrs variable
const hrs = hour.getHours();

if (hrs >= 0 && hrs < 12) {
  console.log("Good Morning");
} else if (hrs >= 12 && hrs <= 17) {
  console.log("Good Afternoon");
} else {
  console.log("Good Evening");
}
