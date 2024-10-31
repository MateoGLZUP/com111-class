function addActivity() {
  function addActivity() {
    alert("Function called");
}

  var activity = [
      document.getElementById("date").value,
      document.getElementById("time_start").value,
      document.getElementById("time_end").value,
      document.getElementById("activity").value,
      document.getElementById("place").value,
      document.getElementById("type").value,
      document.getElementById("notes").value,
      document.getElementById("status").checked ? "Busy" : "Free"
  ];

  // Check if any field is empty
  if (activity.includes("")) {
      document.getElementById("activitySpan").innerText = "Missing data";
      return;
  }

  // Get the schedule table body and insert a new row
  var scheduleBody = document.getElementById("schedule-table").getElementsByTagName("tbody")[0];
  var newRow = scheduleBody.insertRow();

  // Insert each activity value into a new cell
  activity.forEach(function(value) {
      var cell = newRow.insertCell();
      cell.textContent = value;
  });

  // Clear any previous error message
  document.getElementById("activitySpan").innerText = "";


}
