import request from 'superagent'

export async function fetchApi() {
    try {
        return await request
            .get('http://api.magicthegathering.io/v1/cards?pageSize=20')

    } catch (e) {
        return {
            error: e.message
        }
    }
}