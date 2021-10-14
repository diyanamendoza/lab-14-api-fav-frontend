import request from 'superagent';
const URL = 'https://cryptic-falls-98375.herokuapp.com';

// Search
export async function getResults(name){
    const response = await request 
    .get(`${URL}/search?q=${name}`)
    return response.body;
}
// Create Favorite
export async function createFav(fav, token) {
    const response = await request
        .post(`${URL}/api/favs`)
        .set('Authorization', token)
        .send(fav)
    return response.body;
}
// Get Favorite
export async function getFavs(token) {
    const response = await request
        .get(`${URL}/api/favs`)
        .set('Authorization', token)
    return response.body;
}

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