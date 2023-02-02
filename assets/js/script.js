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

let hours = [
    ["9AM", moment()],
    ["10AM", moment()],
    ["11AM", moment()],
    ["12PM", moment()],
    ["1PM", moment()],
    ["2PM", moment()],
    ["3PM", moment()],
    ["4PM", moment()],
    ["5PM", moment()],
];

var currentTime;
for (let i = 0; i < hours.length; i++) {
    const [time, hour] = hours[i];
    var schedulTime = hours[i][0];
    $(".time-block") .append(
            `<div class="row my-row">
            <div class="col col-1 hour">${time}</div>
                <input class="col-10 description textarea past type="text" id="content ">
                <button class = "saveBtn"> save </button>
            </div>`
        );

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

 


  //console.log(hours);
  console.log(currentHour)
