// ************ DOM SELECTORS ************
// 1. getElementsByTagName
const tagName = document.getElementsByTagName("h1");
console.log(tagName);
console.log(tagName.length);

// 2. getElementById
const idItem = document.getElementById("main");
console.log(idItem);

// 3. getElementsByClassName
const classItem = document.getElementsByClassName("cls");
console.log(classItem);

// 4. querySelector
const querySelect = document.querySelector(".cls-1#id-1")
console.log(querySelect)

// 5. querySelectorAll
const querySelectAll = document.querySelectorAll("li")
console.log(querySelectAll)
console.log(querySelectAll.length)
console.log(querySelectAll[2].textContent)

// ---------------------------------------
// Storing data in variables
