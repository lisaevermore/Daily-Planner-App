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



var currentTime;
for (let i = 9; i < 19; i++) {
    let momentHour = moment().hours()
    let rowDiv = $("<div>").addClass("row my row")
    let hourDiv = $("<div>").addClass("col-1 hour")
    let textarea = $("<textarea>").addClass("col-10 description ")
    let button = $("<button>").addClass("saveBtn").text("save")
    $(".container").append(rowDiv.append(hourDiv, textarea, button))
};


saveButtonEl.on("click", function (event) {
    event.preventDefault();
    //console.log("moew");

  
    var timeLeft = 5;
    clearInterval(savedTextDisplayEl)
    var timeInterval = setInterval(function () {
        savedTextDisplayEl.textContent = "Appintment Added to localStorage ✔️"
        timeLeft--;
        if(timeLeft === 0){
          clearInterval(savedTextDisplayEl)
        }
      }, 1000);
    
  });
  var inputs = document.getElementsByTagName('textarea').value;
     console.log(inputs);
    //let list = localStorage.setItem("list", JSON.stringify(input));
    let list = JSON.parse(localStorage.getItem('list' (input)));
    

    if (list === null) {
        list = [];
        list.push(inputs);
        localStorage.setItem('list', JSON.stringify(list));
    } else {
        list.push(inputs);
        localStorage.setItem('list', JSON.stringify(list));
    }

 


  //console.log(hours);
  console.log(currentHour)
