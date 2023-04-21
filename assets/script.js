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
      $("#" + hour).addClass("past");

     }
     else if(hour == currentHour){
      $("#" + hour).addClass("present");

     }
     else if(hour > currentHour){
      $("#" + hour).addClass("future");
     }
    })

    /* making sure the text will still stay on the page after refreshing it */
    function init(){
        var hours = [09, 10, 11, 12, 13, 14, 15, 16, 17];
        var hourAndText = JSON.parse(localStorage.getItem("textDescription"));
        // $(".saveBtn").siblings(".description").text(hourAndText.text);
        for(var i = 9; i < hourAndText.length; i++){
          if(hourAndText[0].scheduledHour == hours[0]){
            $(".time-block").text(hourAndText[i].text);
          }
          else if(thourAndText[1].scheduledHour == hours[1]){
            $(".time-block").text(hourAndText[i].text);
          }
          else if(thourAndText[2].scheduledHour == hours[2]){
            $("#.time-block").text(hourAndText[i].text);
          }
          else if(hourAndText[3].scheduledHour == hours[3]){
            $("#.time-block").text(hourAndText[i].text);
          }
          else if(hourAndText[4].scheduledHour == hours[4]){
            $(".time-block").text(hourAndText[i].text);
          }
          else if(hourAndText[5].scheduledHour == hours[5]){
            $(".time-block").text(hourAndText[i].text);
          }
          else if(hourAndText[6].scheduledHour == hours[6]){
            $(".time-block").text(hourAndText[i].text);
          }
          else if(hourAndText[7].scheduledHour == hours[7]){
            $(".time-block").text(hourAndText[i].text);
          }
          else if(hourAndText[8].scheduledHour == hours[8]){
            $(".time-block").text(hourAndText[i].text);
          }
        }
      }
    init();

    /* displaying the current day and time */
    $(currentDateEl).text(formatDate.format("dddd, MMMM DD hh:mm A"));
  }); 