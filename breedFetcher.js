const request = require('request');

// take in command-line argument of the cat breed
const catBreed = process.argv.slice(2, 3);

request('https://api.thecatapi.com/v1/breeds/search?q=' + catBreed[0], (error, response, body) => {

  // if user does not input command line argurments
  if (catBreed.length === 0) {
    throw 'No output.  Please run again and enter a cat breed name.';
  }

  if (error !== null) {
    console.log(error);
    throw 'Address not found, program terminated';
  }

  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

  const data = JSON.parse(body)[0];
  if (data === undefined) {
    console.log('The cat breed was not found!');
  } else {
    //const data = JSON.parse(body);
    console.log(data);
  }
});
