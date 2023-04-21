var currentDateEl = $("#currentDay");
var scheduleEl = $(".container-fluid");
var saveButtonEl = $(".saveBtn");
var descriptionEl = $(".description");
var timeBlockEl = $(".time-block");
var formatDate = dayjs();


/* adding a click event to the save button that will store the text into localStorage */
$(function () {
    saveButtonEl.on("click", function(event){
      event.preventDefault();

      var hourAndText = {
        text: $(this).siblings(".description").val(),
        scheduledHour: $(this).parent().attr("id")
      }
      localStorage.setItem("textDescription", JSON.stringify(hourAndText));
    })

    /* representing the past, present, and future with color of the time as the day goes on */
    var currentHour = dayjs().format("HH");
    var hours = [09, 10, 11, 12, 13, 14, 15, 16, 17];
    $(hours).each(function(i, hour){
     if(hour < currentHour){
      $("#" + hour).addClass("past")

     }
     else if(hour == currentHour){
      $("#" + hour).addClass("present")

     }
     else if(hour > currentHour){
      $("#" + hour).addClass("future")
     }
    })

    /* making sure the text will still stay on the page after refreshing it */
    function init(){
        var hourAndText = JSON.parse(localStorage.getItem("textDescription"));
        $(".saveBtn").siblings(".description").text(hourAndText.text);
        for(var i = 0; i < hourAndText.length; i++){
          if(timeBlockEl == 09){
            $("#9").text(hourAndText[i].text);
          }
          else if(timeBlockEl == 10){
            $("#10").text(hourAndText[i].text);
          }
          else if(timeBlockEl == 11){
            $("#11").text(hourAndText[i].text);
          }
          else if(timeBlockEl == 12){
            $("#12").text(hourAndText[i].text);
          }
          else if(timeBlockEl == 13){
            $("#13").text(hourAndText[i].text);
          }
          else if(timeBlockEl == 14){
            $("#14").text(hourAndText[i].text);
          }
          else if(timeBlockEl == 15){
            $("#15").text(hourAndText[i].text);
          }
          else if(timeBlockEl == 16){
            $("#16").text(hourAndText[i].text);
          }
          else if(timeBlockEl == 17){
            $("#17").text(hourAndText[i].text);
          }
        }
      }
    init();

    /* displaying the current day and time */
    $(currentDateEl).text(formatDate.format("dddd, MMMM DD hh:mm A"));
  }); 