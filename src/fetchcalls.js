import request from 'superagent'

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