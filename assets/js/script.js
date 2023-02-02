// save reference to important DOM elements
var currentDisplayEl = $('#currentDay');
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
    //console.log(momentHour)

    // color-code each timeblock based on past, present, and future when the timeblock is viewed.
    let colourKey = "";
    if( momentHour < i){
        colourKey = "future"
    } else if (momentHour === i ){
        colourKey = "present"
    } else {
        colourKey = "past"
    }
    // add AM or PM text to the time displayed
    let hourDisplay = ""
    if(i < 12){
        hourDisplay = i + " AM"
    } else if(i === 12){
        hourDisplay = i + " PM"
    } else {
        hourDisplay = i - 12 + " PM"
    }

    let rowDiv = $("<div>").addClass("row my-row")
    let hourDiv = $("<div>").addClass("col-1 hour").text(hourDisplay)
    let textarea = $("<textarea>").addClass("col-10 description " + colourKey).val(localStorage.getItem(i))
    let button = $("<button>").addClass("saveBtn").text("save").attr("id", i)
    // saving and geting value from local storage
    .click(function(){
        var hourKey = $(this).attr("id")
        var value = $(this).siblings(".description").val()
        localStorage.setItem(hourKey, value)
    })
    $(".container").append(rowDiv.append(hourDiv, textarea, button))

};

//when a button is click the message use show up for 3 sce.
$('.saveBtn').on("click", function(){
    document.getElementById('saved').innerHTML = "Appintment Added to localStorage ✔️";

    setTimeout(function(){
        document.getElementById("saved").innerHTML = '';
    }, 3000);
})
  
 


  //console.log(hours);
