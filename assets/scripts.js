 var config = {
   apiKey: "AIzaSyBMiMqCuAuxhbqQl_bFhkevI6pycmSGiFs",
   authDomain: "employeedata-b4a7e.firebaseapp.com",
   databaseURL: "https://employeedata-b4a7e.firebaseio.com",
   storageBucket: "employeedata-b4a7e.appspot.com",
   messagingSenderId: "669041241216"
 };
 firebase.initializeApp(config);

var database = firebase.database();

var empName;
var empRole;
var empMonthlyRate;
var empStartDate;
var tablePrinted = "false";

$('#submitData').on('click', function() {

  empName = $('#name').val().trim();
  empRole = $('#empRole').val().trim();
  empMonthlyRate = $('#monthlyRate').val().trim();
  empStartDate = $('#startDate').val().trim();

  database.ref().push({
    empStartDate: empStartDate,
    name: empName,
    empRole: empRole,
    empMonthlyRate: empMonthlyRate,
    dataAdded: firebase.database.ServerValue.TIMESTAMP
  })

  return false;
})


function printEmployees(empName, empRole,empMonthlyRate,empStartDate) {

  if (tablePrinted == "false") {
    var tableHeader = $('<table>');
    var printName = $('<td>');
    var printRole = $('<td>');
    var printStartDate = $('<td>');
    var printRate = $('<td>'); 
    var monthsEmployed = $('<td>');
    var totalBilled = $('<td>'); 
    printName.append("Employee Name");
    printRole.append("Employee Role");
    printStartDate.append("Start Date");
    printRate.append("Rate");
    monthsEmployed.append("Months Employed");
    totalBilled.append("Total Billed");
    tableHeader.append(printName);
    tableHeader.append(printRole);
    tableHeader.append(printStartDate);
    tableHeader.append(printRate);
    tableHeader.append(monthsEmployed);
    tableHeader.append(totalBilled);
    tablePrinted = "true";
  }


  $('#empList').append(tableHeader);

  var list = $('<table>');
  var printName = $('<td>');
  printName.append(empName);
  list.append(printName);

  var printRole = $('<td>');
  printRole.append(empRole);
  list.append(printRole);

  var printStartDate = $('<td>');
  printStartDate.append(empStartDate);
  list.append(printStartDate);

  var printRate = $('<td>');
  printRate.append(empMonthlyRate);
  list.append(printRate);

  var printMonthlyRate = $('<td>');
  printMonthlyRate.append("date");
  list.append(printMonthlyRate);

  var printBilled = $('<td>');
  printBilled.append("$50");
  list.append(printBilled);

  $('#empList').append(list);
<<<<<<< HEAD

}
=======
}

// Create Firebase "watcher" (.on("value"))
database.ref().on("child_added", function(snapshot) {
  
  empName = snapshot.val().name;
  empRole = snapshot.val().empRole;
  empMonthlyRate = snapshot.val().empMonthlyRate;
  empStartDate = snapshot.val().empStartDate; 
  printEmployees(empName, empRole,empMonthlyRate,empStartDate);

  // Create Error Handling
}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});


//do this to pull the most recent user
// dataRef.ref().orderByChild("dateAdded".limitToLast(1)).on("child_added", function(snapshot) {
  
// }

//do this when child added to array
/*dataRef.ref().on("child_added", function(childSnapshot) {

}*/

>>>>>>> 856e2d229b88640ac06b5a8b9c1e33cce0c21a56
