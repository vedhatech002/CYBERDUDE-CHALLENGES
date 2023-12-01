# Array of object looping (Javascript Challenge)

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> Task #6: Create a Array of Objects and loop through it. Discuss about various looping options.
>
> Here I've Created an array of object productsData and filtering product by various type of loops.

```js
// Create a Array of Objects and loop through it. Discuss about various looping options.
const productsData = [
  {
    id: 1,
    name: "Cotton Buffalo Check Slim Fit Casual Shirt",
    category: "shirts",
    price: 799,
    img: "https://www.dennislingo.com/cdn/shop/products/4_6c6c6c34-aadb-4294-b7c5-95784455cc9d_720x.jpg?v=1663893926",
  },
  {
    id: 2,
    name: "BRILLIANCE BLACK SHIRT",
    category: "shirts",
    price: 899,
    img: "https://www.snitch.co.in/cdn/shop/files/NOTAG-010-M7888.jpg?v=1685453209&width=1800",
  },
  {
    id: 3,
    name: "Men's Navyblue Slim Fit Casual Shirt",
    category: "shirts",
    price: 599,
    img: "https://www.dennislingo.com/cdn/shop/products/DLMSH319_NB_1_720x.jpg?v=1679661865",
  },
  {
    id: 4,
    name: "Tapered Fit Cotton Chinos ",
    category: "pants",
    price: 999,
    img: "https://www.dennislingo.com/cdn/shop/products/1_b75a6003-3866-4a75-8c28-c265f2e3d768_720x.jpg?v=1663891949",
  },
  {
    id: 5,
    name: "Solid Indigo Denim Jeans For Men",
    category: "pants",
    price: 2599,
    img: "https://www.dennislingo.com/cdn/shop/products/STDLMJNS2028-IN_7_720x.jpg?v=1688983163",
  },
  {
    id: 6,
    name: "POISE BEIGE TROUSERS",
    category: "pants",
    price: 1499,
    img: "https://www.snitch.co.in/cdn/shop/files/IMG_6273.jpg?v=1694259997&width=120",
  },
  {
    id: 7,
    name: "Men Blue Polo Collar Pockets T-shirt",
    category: "tshirts",
    price: 649,
    img: "https://www.dennislingo.com/cdn/shop/products/main-image_2227b736-7985-4259-b7ec-eebe93c5c94e_120x.jpg?v=1693402539",
  },
  {
    id: 8,
    name: "Olive Tshirts for Men",
    category: "tshirts",
    price: 720,
    img: "https://www.dennislingo.com/cdn/shop/products/DLMTSS23140_OL_6_720x.jpg?v=1690265082",
  },
  {
    id: 9,
    name: "Mandarin Collar Solid Cotton Teal Tshirt",
    category: "tshirts",
    price: 499,
    img: "https://www.dennislingo.com/cdn/shop/products/DLMTSS23130-TL_2_720x.jpg?v=1688718408",
  },
];
// filter by arr method
let filterCategory = productsData.filter(
  (value) => value.category === "tshirts"
);
// console.log(filterCategory);

//filter by foreach loop method and function
function filterbyforeach() {
  let filterArr = [];
  productsData.forEach((e) => {
    if (e.category === "tshirts") {
      filterArr.push(e);
    }
  });
  return filterArr;
}
let tshirt = filterbyforeach();
// console.log(tshirt);

//filter by for loop
let filterArr = [];
for (let i = 0; i < productsData.length; i++) {
  if (productsData[i].category === "shirts") {
    filterArr.push(productsData[i]);
  }
}
// console.log(filterArr);
let filterForof = [];
for (let product of productsData) {
  if (product.category === "pants") {
    filterForof.push(product);
  }
}
// console.log(filterForof);

//using for in
for (const key in productsData) {
  if (productsData[key].category === "shirts") {
    // console.log(productsData[key]);
  }
}

//using while loop
let i = 0;
while (i < productsData.length) {
  if (productsData[i].price > 1000) {
    console.log(productsData[i]);
  }
  i++;
}
```

### Live link ->

Deploy it and put the link here.

## Acknowledgement:

- [@AnbuSelvan](https://github.com/anburocky3) | GitHub Profile.

## References:

- [Cyberdude Javascript playalist](https://www.youtube.com/playlist?list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa)
