import request from 'superagent';
import { PER_PAGE } from './constants';

const URL = 'https://card-coven-back-end-2020.herokuapp.com';
const MTGURL = 'https://api.magicthegathering.io/v1/cards';

export async function createUser(state) {
    try {
        return await request.post(`${URL}/auth/signup`)
        .send(state)
    } catch(err) {
        throw err;
    }
}

export async function fetchAllCards(page) {
    try {
        return await request
            .get(`https://api.magicthegathering.io/v1/cards?pageSize=${PER_PAGE}&page=${page}&contains=imageUrl`)
            .set()

    } catch (e) {
        return {
            error: e.message
        }
    }
}