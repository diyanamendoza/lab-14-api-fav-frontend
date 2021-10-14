import request from 'superagent';
const URL = 'https://cryptic-falls-98375.herokuapp.com';

// Search
export async function getResults(name){
    const response = await request 
    .get(`${URL}/search?q=${name}`)
    return response.body;
}
// Create Favorite

// Get Favorite

//login
export async function login(email, password) {
    const response = await request
    .post(`${URL}/auth/signin`)
    .send ({email, password})
    
    return response.body;
}

//signup: 
export async function signUp(email, password) {
    const response = await request
    .post(`${URL}/auth/signup`)
    .send ({email, password})
    
    return response.body;
}