// задача 1

const cars = [
  {
    title: "BMW",
    price: 40000,
    count: "15",
  },
  {
    title: "Toyota",
    price: 20000,
    count: "13",
  },
  {
    title: "Ford",
    price: 30000,
    count: "20",
  },
  {
    title: "Chevrolet",
    price: 60000,
    count: "9",
  },
  {
    title: "Volkswagen",
    price: 30000,
    count: "13",
  },
];

const body = document.querySelector("body"); 
const carsList = document.createElement("ul"); 
const totalCarsPriceElement = document.createElement("p"); 
const totalCarsAmountElement = document.createElement("p"); 
const carsListItemFooter = document.createElement("div");

let totalCarsPrice = 0; 
let totalCarsAmount = 0; 

carsList.classList.add("cars-list"); 

cars.forEach((car) => {
  const carsListItem = document.createElement("li"); 
  const carsListItemTitle = document.createElement("h3"); 
  const carsListItemPrice = document.createElement("p"); 
  const carsListItemAmount = document.createElement("p"); 

  carsListItem.classList.add("cars-list-item");

  totalCarsPrice += car.price; 
  totalCarsAmount += parseInt(car.count); 

  carsListItemTitle.innerText = car.title; 
  carsListItemPrice.innerText = `Price: ${car.price}`; 
  carsListItemAmount.innerText = `Amount: ${car.count}`; 
  totalCarsAmountElement.innerText = `Total cars amount: ${totalCarsAmount}`; 
  totalCarsPriceElement.innerText = `Total cars price: ${totalCarsPrice}`; 

  carsListItemFooter.append(totalCarsPriceElement, totalCarsAmountElement);

  carsListItem.append(carsListItemTitle, carsListItemPrice, carsListItemAmount); 
  carsList.append(carsListItem, carsListItemFooter); 
});

body.append(carsList);



const data = [
  {
    number: 1,
    fullName: "Bill Gates",
    position: "Founder Microsoft",
    salary: "$1000",
  },
  {
    number: 2,
    fullName: "Steve Jobs",
    position: "Founder Apple",
    salary: "$1200",
  },
  {
    number: 3,
    fullName: "Larry Page",
    position: "Founder Google",
    salary: "$1100",
  },
  {
    number: 4,
    fullName: "Mark Zuckerberg",
    position: "Founder Facebook",
    salary: "$1300",
  },
];

// создаём элементы таблицы
const table = document.createElement("table");
const tableHead = document.createElement("thead");
const tableBody = document.createElement("tbody");


<table>
  <thead>
    <tr>
      <td>...</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>...</td>
    </tr>
  </tbody>
</table>

*/

const tableHeadRow = document.createElement("tr");
const numberHead = document.createElement("th");
const fullNameHead = document.createElement("th");
const positionHead = document.createElement("th");
const salaryHead = document.createElement("th");

numberHead.innerText = "No.";
fullNameHead.innerText = "Full Name";
positionHead.innerText = "Position";
salaryHead.innerText = "Salary";

tableHeadRow.append(numberHead, fullNameHead, positionHead, salaryHead);
tableHead.append(tableHeadRow);

data.forEach((founder) => {
  const tableBodyRow = document.createElement("tr");
  const numberTableData = document.createElement("td");
  const fullNameTableData = document.createElement("td");
  const positionTableData = document.createElement("td");
  const salaryTableData = document.createElement("td");

  numberTableData.innerText = founder.number;
  fullNameTableData.innerText = founder.fullName;
  positionTableData.innerText = founder.position;
  salaryTableData.innerText = founder.salary;

  tableBodyRow.append(
    numberTableData,
    fullNameTableData,
    positionTableData,
    salaryTableData
  );
  tableBody.append(tableBodyRow);
});

table.append(tableHead, tableBody);

body.append(table);

// задача 3

const dogs = [
  {
    breed: "golden retriever",
    age: 7,
  },
  {
    breed: "labrador retriever",
    age: 4,
  },
  {
    breed: "french bulldog",
    age: 12,
  },
  {
    breed: "beagle",
    age: 6,
  },
  {
    breed: "german shepherd dog",
    age: 2,
  },
  {
    breed: "poodle",
    age: 3,
  },
  {
    breed: "bulldog",
    age: 4,
  },
];

const dogsContainer = document.createElement("div");
dogsContainer.classList.add("dogs-container");

dogs.forEach((dog) => {
  const paragraph = document.createElement("p");

  paragraph.innerText = `${dog.breed}'s age is ${dog.age}`;
  dogsContainer.append(paragraph);
});

body.append(dogsContainer);

// задача 4

const movies = [
  { name: "Фильм 1", year: 2000 },
  { name: "Фильм 2", year: 2005 },
  { name: "Фильм 3", year: 2010 },
  { name: "Фильм 4", year: 2015 },
  { name: "Фильм 5", year: 2020 },
];

const moviesList = document.createElement("ul");
moviesList.classList.add("movies-list");

movies.forEach((movie) => {
  const moviesListItem = document.createElement("li");
  const moviesListItemName = document.createElement("h3");
  const moviesListItemYear = document.createElement("p");

  moviesListItem.classList.add("movies-list-item");

  moviesListItemName.innerText = movie.name;
  moviesListItemYear.innerText = movie.year;

  moviesListItem.append(moviesListItemName, moviesListItemYear);
  moviesList.append(moviesListItem);
});

body.append(moviesList);
