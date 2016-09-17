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
  console.log("Printing employees");
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

  $('#empList').append(list);
}

// Create Firebase "watcher" (.on("value"))
database.ref().on("child_added", function(snapshot) {
  
  console.log(snapshot.val());

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

