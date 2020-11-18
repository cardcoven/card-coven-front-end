import request from 'superagent';
import { PER_PAGE } from './constants';

const URL = 'https://card-coven-back-end-2020.herokuapp.com';
const MTGURL = 'https://api.magicthegathering.io/v1/cards';

export async function createUser(state) {
    try {
        return await request.post(`${URL}/auth/signup`)
            .send(state)
    } catch (err) {
        throw err;
    }
}

export async function userLogin(state) {
    try {
        return await request.post(`${URL}/auth/signin`)
            .send(state)
    } catch (err) {
        throw err;
    }
}

//Adds new deck into SQL back end
//contract requires a deck_name, deck_description, deck_type, and an owner_id
export async function createDeck(newDeck, token) {
    try {   
        await request
        .post('https://card-coven-back-end-2020.herokuapp.com/api/decks')
        .send(newDeck)
        .set('Authorization', token)

        return;
    } catch (e) {
    throw e;
    }
}

export async function fetchAllCards(page) {
    try {
        return await request

            .get(`${MTGURL}?&pageSize=20&page=${page}&`)
    } catch (e) {
        return {
            error: e.message
        }
    }
}

export async function fetchByType(page, type) {
    try {
        return await request
            .get(`https://api.magicthegathering.io/v1/cards?types=${type}&pageSize=20&page=${page}`)
    } catch (e) {
        return {
            error: e.message
        }
    }
}

export async function fetchBySubType(page, type) {
    try {
        return await request
            .get(`https://api.magicthegathering.io/v1/cards?subtypes=${type}&pageSize=20&page=${page}`)
    } catch (e) {
        return {
            error: e.message
        }
    }
}
export async function fetchByMana(page, type) {
    try {
        return await request
            .get(`https://api.magicthegathering.io/v1/cards?colors=${type}&pageSize=20&page=${page}`)
    } catch (e) {
        return {
            error: e.message
        }
    }

}

export const types = [
    "Artifact",
    "Conspiracy",
    "Creature",
    "Enchantment",
    "Instant",
    "Land",
    "Phenomenon",
    "Plane",
    "Planeswalker",
    "Scheme",
    "Sorcery",
    "Tribal",
    "Vanguard"
];
export const subtypes = [
    "Advisor",
    "Ajani",
    "Alara",
    "Ally",
    "Angel",
    "Antelope",
    "Ape",
    "Arcane"
];
export const colors = [
    "Black",
    "Red",
    "Blue",
    "Green",
    "White",
]
export function manaToString(array) {
    let string = '|'
    for (let i = 0; i < array.length; i++) {
        string = string + array[i] + '|'
    }
    return string
}
