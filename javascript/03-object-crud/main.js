let aboutMe = {
  name: "vijayavedhasekaran",
  age: 21,
  gender: "male",
  qualification: "BCA",
  hobbies: ["cycling", "music", "coding", "eating"],
  isInLove: false,
  mobileNo: 8248996382,
  address: {
    doorNO: "4/272-2",
    street: "Melakadu",
    place: "Karuppampulam",
    taluk: "vedaranyam",
    district: "Nagappatinam",
    pin: 614707,
    fulladdress() {
      return `  
                   ${this.doorNO},${this.street},
                   ${this.place},
                   ${this.taluk},
                   ${this.district},
                   ${this.pin}.
          `;
    },
  },
  checkloveStatus() {
    if (this.isInLove) {
      console.log(this.name + " is in love❤️");
    } else {
      console.log(this.name + " is morattu single😎");
    }
  },
  printHobbies() {
    this.hobbies.forEach((e) => {
      console.log(`He love to do ❤️${e}`);
    });
  },
};

console.log(aboutMe);
// -> Add properties
function addProperty(key, value) {
  aboutMe[key] = value;
  console.log(`${key} Successfully added in the object`);
}
addProperty("mail", "vedhatech02@gmail.com");
addProperty("job", "FullStack Engineer");
addProperty("skills", [
  "Html5",
  "Css3",
  "Bootstrap",
  "TailwindCss",
  "Javascript",
]);

console.log(aboutMe);

// -> Delete Properties
function deleteprop(key) {
  delete aboutMe[key];
  console.log(`${key} property was deleted from your Object`);
}
deleteprop("loveStatus");
console.log(aboutMe);

// -> Update property value
function updateProp(propKey, propvalue) {
  let iskeyExists = propKey in aboutMe;
  if (iskeyExists) {
    aboutMe[propKey] = propvalue;
    console.log("successfully updated");
  } else {
    console.log("property doesn't exsits");
  }
}

updateProp("me", 20);
console.log(aboutMe);

// ->Read Contact details

function shareContact() {
  console.log(
    `   
           Name: ${aboutMe.name},
           Mobile: ${aboutMe.mobileNo},
           Email: ${aboutMe.mail},
           Address:  ${aboutMe.address?.fulladdress()} 
          `
  );
}
// shareContact();

//read data using for in loop
function readAlldata() {
  for (let key in aboutMe) {
    if (typeof aboutMe[key] === "string" || typeof aboutMe[key] === "number") {
      console.log(`${key} : ${aboutMe[key]}`);
    }
  }

  console.log(`More about ${aboutMe.name} `);
  for (let key in aboutMe) {
    if (typeof aboutMe[key] === "function") {
      aboutMe[key]();
    }
  }
}
readAlldata();
