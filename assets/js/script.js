// save reference to important DOM elements
var currentDisplayEl = $('#currentDay');
var saveButtonEl = $('.saveBtn');
let currentHour = moment().format('hA');
var savedTextDisplayEl = document.getElementById('.saved');

//var currentHour = Date.now().getHours(); //get current time hour

// handle displaying the the date
$("#currentDay").text(moment().format("dddd, MMMM Do"));
// function displayTime() {
//   var toDay = moment().format('dddd, MMMM Do');
//   currentDisplayEl.text(toDay);
// }