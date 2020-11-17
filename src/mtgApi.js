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

export async function fetchApi() {
    try {
        return await request
            .get('https://api.magicthegathering.io/v1/cards')
    } catch (e) {
        return {
            error: e.message
        }
    }
}