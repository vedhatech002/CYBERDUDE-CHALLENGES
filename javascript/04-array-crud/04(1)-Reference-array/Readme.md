# Array Refernce (Javascript Challenge)

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> Task #3: Create an Array with reference datatypes and manipulate with _Crud_ operations.
>
> Here I've Created an products data with Array of object. And manipulate with the crud operations.I have used filter and map option to read data.And I used dynamic functions to get user input and performing crud operation.

```js
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
//read data
//function to display product
function displayProducts(products) {
  if (products.length > 0) {
    let products_details = products
      .map(
        (product) =>
          `
        Product Name : ${product.name} , Price : ${product.price}.
        `
      )
      .join("");

    console.log(products_details);
  } else {
    console.log("uhhho! sorry No products found");
  }
}

//filter by categories

function filterByCategory() {
  const allCategories = ["all", "shirts", "pants", "tshirts"];
  let choosedCategory = prompt(
    `we have only have " ${allCategories.join(" , ")} " categories,
      please enter any one above mentioned category to filter out!!`
  );
  let isAvailable = allCategories.indexOf(choosedCategory);
  console.log(isAvailable);

  if (isAvailable !== -1) {
    choosedCategory === "all"
      ? displayProducts(productsData)
      : displayProducts(
          productsData.filter((product) => product.category === choosedCategory)
        );
  } else {
    alert("category dosen't exists");
  }
}
// filterByCategory();

// -> Create
function getUserDataToAdd() {
  let isValidAdmin = checkAdmin();
  if (isValidAdmin) {
    let generateId = productsData.length + 1;
    let productName = prompt("Enter product Name");
    let productCategory = prompt("Enter Product Category");
    let productPrice = Number(prompt("Enter price of the product"));
    if (productName === "" || productCategory === "" || productPrice === "") {
      alert("please fill all the details ");
    } else {
      createProduct(generateId, productName, productCategory, productPrice);
    }
  } else {
    alert("please enter valid username or password");
  }
}
// getUserDataToAdd();

function createProduct(getid, getname, getcategory, getprice) {
  let id = getid;
  let name = getname;
  let category = getcategory;
  let price = getprice;
  //fatory function
  function createProductObject(id, name, category, price) {
    return {
      id: id,
      name: name,
      category: category,
      price: price,
    };
  }
  let newProductObject = createProductObject(id, name, category, price);
  productsData.push(newProductObject);

  alert("product successfully created");
}

console.log(productsData);

//Update
function updateProduct() {
  let toBeupdateId = Number(prompt("enter the product id to update values"));
  console.log(toBeupdateId);

  let findProduct = productsData.find((product) => product.id === toBeupdateId);
  console.log(findProduct);

  let tobeUpdateKey = prompt("enter the property name to be update!");
  let isValidProperty = tobeUpdateKey in findProduct;

  if (isValidProperty) {
    let updateValue = prompt(`enter value of ${tobeUpdateKey} to update`);
    findProduct[tobeUpdateKey] = updateValue;
    console.log(findProduct);
  } else {
    alert("key doesn't exists");
  }
}
// updateProduct();

//-> Delete
function deleteProduct() {
  let toBeDeleted = Number(
    prompt("enter the product id to delete the product")
  );

  let findProduct = productsData.find(
    (product, index) => product.id === toBeDeleted
  );
  let findIndex = productsData.indexOf(findProduct);
  if (findIndex !== -1) {
    productsData.splice(findIndex, 1);
    alert("product sucessfully deleted ");
    console.log(productsData);
  } else {
    alert(`please check the id. ${toBeDeleted} does not exists `);
  }
}
// deleteProduct();

//->check admin
function checkAdmin() {
  let adminName = prompt("enter admin Name");
  let adminPassword = prompt("enter password");
  if (adminName === "admin" && adminPassword === "admin@123") {
    return true;
  } else {
    return false;
  }
}
```

### Live link ->

Deploy it and put the link here.

## Acknowledgement:

- [@AnbuSelvan](https://github.com/anburocky3) | GitHub Profile.

## References:

- [Cyberdude Javascript playalist](https://www.youtube.com/playlist?list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa)
