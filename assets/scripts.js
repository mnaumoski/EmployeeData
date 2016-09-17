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
    empMonthlyRate: empMonthlyRate
  })

    return false;
})