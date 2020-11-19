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
        return await request
            .post(`${URL}/api/decks`)
            .send(newDeck)
            .set('Authorization', token);
    } catch (e) {
        throw e;
    }
}

export async function fetchCards(deckId, token) {
    try {
        return await request
            .get(`${URL}/api/cards/${deckId}`)
            .set('Authorization', token);
    } catch (e) {
        throw e;
    }
}

export async function fetchAllCards(type, mana, subtype, set, page) {
    try {
        return await request

            .get(`${MTGURL}?&pageSize=${PER_PAGE}&page=${page}&subtypes=${subtype}&types=${type}&colors=${mana}&setName=${set}`)
    } catch (e) {
        return {
            error: e.message
        }
    }
}

export async function fetchCarByName(page, name) {
    try {
        return await request

            .get(`${MTGURL}?&pageSize=${PER_PAGE}&page=${page}&name=${name}`)
    } catch (e) {
        return {
            error: e.message
        }
    }
}

export async function fetchCardByName(page, name) {
    try {
        return await request

            .get(`${MTGURL}?&pageSize=${PER_PAGE}&page=${page}&name=${name}`)
    } catch (e) {
        return {
            error: e.message
        }
    }
}

export async function fetchDecks(token) {
    try {
        return await request

            .get(`${URL}/api/decks`)
            .set('Authorization', token)
    } catch (e) {
        return {
            error: e.message
        }
    }
}


export async function postCard(newCard, token) {
    try {
        return await request

            .post(`${URL}/api/cards`)
            .send(newCard)
            .set('Authorization', token)
    } catch (e) {
        return {
            error: e.message
        }
    }
}
export async function fetchByParams(type, mana, subtype, set, page) {
    try {
        return await request
            .get(`${MTGURL}?&pageSize=${PER_PAGE}&page=${page}&subtypes=${subtype}&types=${type}&colors=${mana}&setName=${set}`)
    } catch (e) {
        return {
            error: e.message
        }
    }
}

// API DELETE every card from deck_id
// Must do before able to delete deck
export async function deleteDecksCards(deckId, token) {
    try {   
        await request.delete(`${URL}/api/cards/${deckId}`)
        .set('Authorization', token)

        return
    } catch (e) {
    throw e;
    }
}

// API DELETE current deck
// Deck must be empty
export async function deleteDeck(deckId, token) {
    try {   
        await request.delete(`${URL}/api/decks/${deckId}`)
        .set('Authorization', token)

        return
    } catch (e) {
    throw e;
    }
}

export async function fetchByType(page, type) {
    try {
        return await request
            .get(`https://api.magicthegathering.io/v1/cards?types=${type}&pageSize=${PER_PAGE}&page=${page}`)
    } catch (e) {
        return {
            error: e.message
        }
    }
}

export async function fetchBySubType(page, type) {
    try {
        return await request
            .get(`https://api.magicthegathering.io/v1/cards?subtypes=${type}&pageSize=${PER_PAGE}&page=${page}`)
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
export function manaToString(array) {
    let string = '|'
    for (let i = 0; i < array.length; i++) {
        string = string + array[i] + '|'
    }
    return string
}
export const sets = [
    'Limited Edition Alpha',
    'Limited Edition Beta',
    'Unlimited Edition',
    'Revised Edition',
    'Fourth Edition',
    'Fifth Edition',
    'Classic Sixth Edition',
    'Seventh Edition',
    'Eighth Edition',
    'Ninth Edition',
    'Magic 2010',
    'Magic 2011',
    'Magic 2012',
    'Magic 2013',
    'Magic 2014',
    'Magic 2015',
    'Magic Origins',
    'Core Set 2019',
    'Core Set 2020',
    'Core Set 2021',
    'Arabian Nights',
    'Antiquities',
    'Legends',
    'The Dark',
    'Fallen Empires',
    'Ice Age',
    'Homelands',
    'Alliances',
    'Mirage',
    'Visions',
    'Weatherlight',
    'Tempest',
    'Stronghold',
    'Exodus',
    'Urza\'s Saga',
    'Urza\'s Legacy',
    'Urza\'s Destiny',
    'Mercadian Masques',
    'Nemesis',
    'Prophecy',
    'Invasion',
    'Planseshift',
    'Apocalaypse',
    'Odyssey',
    'Torment',
    'Judgment',
    'Onslaught',
    'Legions',
    'Scourge',
    'Mirrodin',
    'Darksteel',
    'Fifth Dawn',
    'Champions of Kamigawa',
    'Betrayers of Kamigawa',
    'Saviors of Kamigawa',
    'Racnica: City of Guilds',
    'Guildpact',
    'Dissension',
    'Coldsnap',
    'Time Spiral',
    'Planar Chaos',
    'Future Sight',
    'Lorwyn',
    'Morningtide',
    'Shadowmoor',
    'Eventide',
    'Shards of Alara',
    'Conflux',
    'Alara Reborn',
    'Zendikar',
    'Wolrdwake',
    'Rise of Eldrazi',
    'Scars of Mirrodin',
    'Mirrodin Besieged',
    'New Phyrexia',
    'Innistrad',
    'Dark Ascension',
    'Avacyn Restored',
    'Return to Ravnica',
    'Gatecrash',
    'Dragon\'s Maze',
    'Theros',
    'Born of the Gods',
    'Journey into Nyx',
    'Khans of Tarkir',
    'Fate Reforged',
    'Dragons of Tarkir',
    'Battle for Zendikar',
    'Oath of the Gatewatch',
    'Shadows over Innistrad',
    'Eldritch Moon',
    'Kaladesh',
    'Aether Revolt',
    'Amonkhet',
    'Hour of Devastation',
    'Ixalan',
    'Rivals of Ixalan',
    'Dominaria',
    'Guilds of Ravnica',
    'Ravnica Allegiance',
    'War of the Spark',
    'Throne of Eldraine',
    'Theros Beyond Death',
    'Ikoria: Lair of Behemoths',
    'Zendikar Rising',
]
