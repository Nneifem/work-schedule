// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDateEl = $("#currentDay");
var scheduleEl = $(".container-fluid");
var saveButtonEl = $(".saveBtn");
var descriptionEl = $(".description");
var timeBlockEl = $(".time-block");
var hourEl = $(".hour");
var formatDate = dayjs();

$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    saveButtonEl.on("click", function(event){
      event.preventDefault();
      var text = $(this).siblings(".description").val();
      var scheduledHour = $(this).parent().attr("id");

      localStorage.setItem(scheduledHour, text);
      init();
      console.log(init());
    })

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    var currentHour = dayjs().format("HH");
    var hours = [09, 10, 11, 12, 13, 14, 15, 16, 17];
    $(hours).each(function(i, hour){
     if(hour < currentHour){
      console.log("show me")
      $("#" + hour).addClass("past")

     }
     else if(hour == currentHour){
      console.log("show me too")
      $("#" + hour).addClass("present")

     }
     else if(hour > currentHour){
      console.log("show me as well")
      $("#" + hour).addClass("future")
     }
    })
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    function init(){
      var hourlyDescription = localStorage.getItem(timeBlockEl.attr("id"));
      descriptionEl.addClass(hourlyDescription);
    }
    // TODO: Add code to display the current date in the header of the page.
    $(currentDateEl).text(formatDate.format("dddd, MMMM DD hh:mm A"));
  }); 