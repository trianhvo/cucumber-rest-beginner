const { Given, When, Then } = require('@cucumber/cucumber');
const axios = require('axios');
const fs = require('fs');

let request;
let response;

Given('I have the request in file {string}', (fileName) => {
  // Read the request JSON file
  request = JSON.parse(fs.readFileSync(fileName, 'utf8'));
});

When('I call the API POST', async () => {
  try {
    // Make a POST request to your API
    // You can use axios or any other HTTP client library
    response = await axios.post('http://localhost:3000/', request); // Modify the URL as needed
  } catch (error) {
    response = error.response;
  }
});

When('I call the API PUT', async () => {
  try {
    // Make a PUT request to your API
    response = await axios.put('http://localhost:3000/', request); // Modify the URL as needed
  } catch (error) {
    response = error.response;
  }
});

When('I call the API GET', async () => {
  try {
    // Make a GET request to your API
    response = await axios.get('http://localhost:3000/'); // Modify the URL as needed
  } catch (error) {
    response = error.response;
  }
});

When('I call the API DELETE', async () => {
  try {
    // Make a DELETE request to your API
    response = await axios.delete('http://localhost:3000/'); // Modify the URL as needed
  } catch (error) {
    response = error.response;
  }
});

Then('I have the response in file {string}', (fileName) => {
  // Read the expected response JSON file
  const expectedResponse = JSON.parse(fs.readFileSync(fileName, 'utf8'));
  
  // Implement your assertion logic to compare the actual response with the expectedResponse
  // For example, you can use a testing library like Chai or assert the values manually
});
