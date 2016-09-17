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

  console.log(empName);
  console.log(empRole);
  console.log(empMonthlyRate);
  console.log(empStartDate);

  database.ref().push({
    empStartDate: empStartDate,
    name: empName,
    empRole: empRole,
    empMonthlyRate: empMonthlyRate,
    dataAdded: firebase.database.ServerValue.TIMESTAMP
  })

  // console.log(key);
  printEmployees();
  return false;
})

//do this when child added to array
/*dataRef.ref().on("child_added", function(childSnapshot) {

}*/

//do this to pull the most recent user
// dataRef.ref().orderByChild("dateAdded".limitToLast(1)).on("child_added", function(snapshot) {
  
// }

function printEmployees() {
  console.log("Printing employees");
  var list = $('<ul>');
  var printName = $('<li>');
  printName.append(empName);
  list.append(printName);

  var printRole = $('<li>');
  printRole.append(empRole);
  list.append(printRole);

  var printStartDate = $('<li>');
  printStartDate.append(empStartDate);
  list.append(printStartDate);

  var printRate = $('<li>');
  printRate.append(empMonthlyRate);
  list.append(printRate);



  $('#empList').append(list);



}