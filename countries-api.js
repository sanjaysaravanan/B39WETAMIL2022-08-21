// GET ---> Read Operation

/*
  Http Method
  GET --> Read Operation ( works in browser)
  POST --> Create Operation
  PUT --> Update Operation
  DELETE --> Delete Operation

  Colectively called as CRUD (Create, Read, Update, Delete)
*/


// for making http API call 

// Step 1
// Create Obj which is capable of making an API Call
const request = new XMLHttpRequest();

// Step 2
// Open an connection / Config
request.open('GET', 'https://restcountries.com/v3.1/all');

// Step 3.0
// send a request to the destination
request.send(null);

// Step 3.1
// Function to process the response
request.onload = function () {
  const countries = JSON.parse(request.responseText);
  console.log(countries);

  // for (var country of countries) {
  //   const { flag } = country;
  //   console.log(flag);
  // }

  for (var i = 0; i < countries.length; i++) {
    const { flag, name: { common } } = countries[i];
    console.log(flag, common);
  }
}