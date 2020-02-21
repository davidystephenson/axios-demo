const axios = require('axios')

async function getNos () {
  console.log('start the function')

  try {
    const response = await axios.get(
      'nos.nl'
      // http://nos.nl/
    )

    console.log('response test:', response)

    // log the HTML
    // console.log(response.data)
  } catch (error) {
    console.log('error test:', error.message)

    console.log('You did not write the HTTP')
  }
}

getNos()