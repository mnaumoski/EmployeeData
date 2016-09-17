// #name
// #empRole
// #monthlyRate
// #startDate
// #submitData


$('#submitData').on('click', function() {
  var empName = $('#name').val().trim();
  var empRole = $('#empRole').val().trim();
  var empMonthlyRate = $('#monthlyRate').val().trim();
  var empStartDate = $('#startDate').val().trim(); 

  console.log(empName);
  console.log(empRole);
  console.log(empMonthlyRate);
  console.log(empStartDate);
  
  // database.ref().set({
  //   name: empName,
  //   empRole: empRole,
  //   empMonthlyRate: empMonthlyRate,
  //   empStartDate: empStartDate
  // })

})


