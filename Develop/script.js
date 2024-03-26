$(document).ready(function () {
  // Event listener for save buttons
  $(".saveBtn").click(function () {
      var timeBlockId = $(this).parent().attr("id");
      var description = $(this).siblings(".description").val();
      localStorage.setItem(timeBlockId, description);
      console.log("Time Block ID: " + timeBlockId);
      console.log("Description: " + description);
  });

  // Apply past, present, or future class to each time block
  var currentHour = dayjs().hour();
  $(".time-block").each(function () {
      var timeBlockId = parseInt($(this).attr("id").split("-")[1]);
      if (timeBlockId < currentHour) {
          $(this).addClass("past").removeClass("present future");
      } else if (timeBlockId === currentHour) {
          $(this).addClass("present").removeClass("past future");
      } else {
          $(this).addClass("future").removeClass("past present");
      }

      // Retrieve saved user input from local storage and set textarea value
      var savedInput = localStorage.getItem($(this).attr("id"));
      $(this).find(".description").val(savedInput);
  });

  // Display the current date in the header of the page
  var currentDate = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").text(currentDate);
});
