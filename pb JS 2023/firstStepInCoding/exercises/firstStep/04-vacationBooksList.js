

function vacationBooksList (input) {
let numberOfPages = Number (input [0]);
let pagesOnHour = Number (input [1]);
let days = Number (input [2]);
let haoursPerDay = (numberOfPages / pagesOnHour) / days;
console.log (haoursPerDay);
}
vacationBooksList (["212", "20", "2"]);