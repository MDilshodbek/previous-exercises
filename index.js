//Shopping Create & Update part

// let store = {};
// function shopping(input) {
//   switch (input.method) {
//     case "create":
//       store[input.key] = input.value;
//       break;
//     case "update":
//       store[input.key] = input.value;
//       break;
//     case "delete":
//       delete store[input.key];
//       break;
//   }
//   return store;
// }

// console.log(
//   shopping({
//     method: "create",
//     key: "meat",
//     value: "chicken",
//   })
// );

// console.log(
//   shopping({
//     method: "delete",
//     key: "meat",
//     value: "beef",
//   })
// );

// Calculation part

// let cart = {};
// function shopping(purchase) {
//   switch (purchase.type) {
//     case "buy":
//       cart[purchase.product] = {
//         price: purchase.price,
//         count: purchase.count,
//       };
//       break;
//     case "calcel":
//       delete cart[purchase.product];
//   }

//   let sum = 0;
//   let values = Object.values(cart);

//   for (let i = 0; i < values.length; i++) {
//     sum += values[i].price * values[i].count;
//   }

//   return {
//     Product_list: cart,
//     total_number: values.length,
//     total_cost: sum,
//   };
// }

// console.log(
//   shopping({
//     type: "buy",
//     product: "bread",
//     price: 4000,
//     count: 3,
//   })
// );

// console.log(
//   shopping({
//     type: "buy",
//     product: "cheese",
//     price: 5000,
//     count: 1,
//   })
// );

// Library

// const books = {
//   "Atomic habits": {
//     about: "Self improvement",
//     borrow_to: "",
//     borrow_count: 8,
//   },
//   "From Zero to One": {
//     about: "Business",
//     borrow_to: "",
//     borrow_count: 5,
//   },
//   "Rich Dad, Poor Dad": {
//     about: "entrepreneurship",
//     borrow_to: "",
//     borrow_count: 18,
//   },
//   "This is marketing": {
//     about: "Marketing",
//     borrow_to: "",
//     borrow_count: 12,
//   },
// };
// function library(input) {
//   const found_book = books[input.book_name];

//   if (input.type === "borrow" && typeof found_book === "undefined") {
//     console.log("Book not found");
//   } else if (input.type === "borrow" && found_book.borrow_to !== "") {
//     console.log("Book already borrowed");
//   } else if (input.type === "borrow") {
//     books[input.book_name].borrow_to = input.student_name;
//     books[input.book_name].borrow_count += 1;
//   } else if (input.type === "return") {
//     books[input.book_name].borrow_to = "";
//   }

//   console.log(books);
// }

// library({
//   type: "borrow",
//   book_name: "Atomic habits",
//   student_name: "Makhsad",
// });

// library({
//   type: "return",
//   book_name: "Atomic habits",
//   student_name: "Makhsad",
// });

// library({
//   type: "borrow",
//   book_name: "Atomic habits",
//   student_name: "Akhad",
// });

// Formatted string

// let people = {
//   person1: {
//     name: "Dilshodbek",
//     age: 25,
//   },
//   person2: {
//     name: "Akhad",
//     age: 24,
//   },
// };

// let keys = Object.keys(people);
// // console.log(keys[0].name);
// function format(name) {
//   for (let i = 0; i < keys.length; i++) {
//     if (people[keys[i]].name === name) {
//       console.log(`Name -> ${people[keys[i]].name}, Age -> ${people[keys[i]].age}`);
//     }
//   }
// }

// format("Akhad");

// Bank system

// let bank = {
//   123456: {
//     balance: 2000,
//   },
//   humo: {
//     balance: 15000,
//   },
// };

// function execute(type, amount, secret = "not provided") {
//   if (secret === "not provided") {
//     return console.log("Please provide account number");
//   }

//   if (bank[secret]) {
//     if (type === "withdrawal") {
//       bank[secret].balance -= amount;
//     } else {
//       bank[secret].balance += amount;
//     }
//   } else {
//     console.log("Operation declined");
//   }
// }
// execute("withdrawal", 500, 123456);
// execute("withdrawal", 1000, "humo");
// console.log(bank);

// var str = "Hello World! i just started programming";
// var vowels = ["a", "e", "i", "o", "u"];
// for (let i = 0; i < vowels.length; i++) {
//   console.log(vowels.length);
//   if (str.includes(vowels[i])) {
//     str = str.replaceAll(vowels[i], "o");
//   }
// }
// console.log(str);

// function test(str) {
//   var vowels = ["a", "e", "i", "o", "u"];
//   for (let i = 0; i < vowels.length; i++) {
//     console.log(vowels.length);
//     if (str.includes(vowels[i])) {
//       str = str.replaceAll(vowels[i], "o");
//     }
//   }
//   return str;
// }

// console.log(test(str));

// var library = {
//   "Law of Succes": {
//     Authore: "Napoleon Hills",
//     Pages: 3000,
//   },
//   "Atomic Habits": {
//     Authore: "James Clear",
//     Pages: 2000,
//   },
//   "Zero to One": {
//     Authore: "Peter Thiel",
//     Pages: 1000,
//   },
// };

// let keys = Object.keys(library);
// function formatted_string(input) {
//   if (library[input]) {
//     console.log(
//       `Book Authore: ${library[input].Authore} Pages: ${library[input].Pages}`
//     );
//   } else console.log("Book not found");
//   return input;
// }

// formatted_string("Law of Succes");

// const restaurant = {
//   name: "Crispy",
//   menu: [
//     { item: "Crispy chicken", price: 12.0 },
//     { item: "Crispy fish", price: 10.0 },
//     { item: "Crispy potato fries", price: 8.0 },
//     { item: "cheese ball", price: 3.0 },
//     { item: "cheese stick", price: 2.0 },
//     { item: "icecream", price: 4.0 },
//   ],
//   vegan: false,
// };

// function getMenu(restaurantName) {
//   if (restaurantName === restaurant.name) {
//     restaurant.menu.forEach((value) => {
//       console.log(`${value.item}: $${value.price}\n`);
//     });
//   }
//   return "Restaurant not found.";
// }

// console.log(getMenu("Crispy"));
// function getMenu(restaurantName) {
//   if (restaurantName === restaurant.name) console.log(restaurant.menu);
// }

// getMenu("Crispy");

// let str = ["Friends", "Hello"];
// let number = 0;
// let number = str[0];
// function longestStr(str) {
//   for (let i = 0; i < str.length; i++) {
//     // if (str[i].length > number) {
//     //   number = str[i].length;
//     // }
//     if (str[i].length > number.length) {
//       number = str[i];
//     }
//   }
//   return number;
// }

// console.log(longestStr(str));

// let info = [
//   {
//     name: "John",
//     age: 30,
//   },
//   {
//     name: "Jane",
//     age: 20,
//   },
//   {
//     name: "Mary",
//     age: 40,
//   },
// ];

// function filterobject(info, object) {
//   return info.filter((value) => value["name"] !== object.value);
// }

// console.log(filterobject(info, { key: "name", value: "Jane" }));

// let number = [7, 8, 9, 10, 11, 12];
// let maxnum = 0;

// for (let i = 0; i < number.length; i++) {
//   if (number[i] > maxnum) {
//     maxnum = number[i];
//   }
// }
// console.log(maxnum);

// let numbers = [1, 2, 3, 4, 5, 6];

// function specific(input) {
//   for (let i = 0; i < numbers.length; i++) {
//     if (input === numbers[i]) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(specific(3));

// let people = [
//   { name: "John", age: 30 },
//   { name: "Tom", age: 20 },
//   { name: "Mary", age: 40 },
//   { name: "Alex", age: 30 },
// ];

// const result = function (data, input) {
//   return data.sort((a, b) => {
//     if (a.name < b.name) {
//       return -1;
//     }else if (a.name > b.name) {
//       return 1;
//     }
//     return 0;
//   });
// };

// console.log(result(people, "name"));

let info = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "Jane",
    age: 20,
  },
  {
    name: "Mary",
    age: 40,
  },
];

function filterobject(info, object) {
  return info.filter((value) => {
    return value.name === object.value;
  });
}

console.log(filterobject(info, { key: "name", value: "Jane" }));

// let person = {
//   name: "Dilshodbek",
//   age: 25,
// };

// let bla = Object.entries(person).map((value) => {
//   console.log(value[0], value[1]);
// });
