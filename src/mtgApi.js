import request from 'superagent';

const URL = 'https://card-coven-back-end-2020.herokuapp.com'

export async function createUser(state) {
    try {
        return await request.post(`${URL}/auth/signup`)
        .send(state)
    } catch(err) {
        throw err;
    }
}