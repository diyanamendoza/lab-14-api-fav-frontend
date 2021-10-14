import request from 'superagent';
const URL = 'https://hidden-everglades-21018.herokuapp.com';

// Search
export async function getResults(name){
    const response = await request 
    .get(`${URL}/search?q=${name}`)
    return response.body;
}
// Create Favorite

// Get Favorite

// Login 

//  Sign Up