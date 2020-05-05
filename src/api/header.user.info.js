import JwtDecode from 'jwt-decode'
import store from '../store'

export function getUser() {
    const token = store.getters.GET_TOKEN
    const user = JwtDecode(token);
    return Promise.resolve(user)
}
