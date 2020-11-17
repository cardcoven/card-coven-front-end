import request from 'superagent'
const page = 'Page-Size'

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