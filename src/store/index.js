import Vue from 'vue'
import Vuex from 'vuex'

// const loading = {
//     setLoading: "SET_LOADING",
//     getLoading: "GET_LOADING"
// }
import {loading, token} from './state.config.function.name'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        isLoading: false,
        token: null
    },
    getters: {
        [loading.getLoading]: state => state.isLoading,
        [token.getToken]: state => state.token
    },
    mutations: {
        [loading.setLoading]: (state, isLoading) => {
            if (isLoading) state.isLoading = isLoading
            else state.isLoading = false
        },
        [token.setToken]: (state, token) => {
            if (token) state.token = token
            else state.token = null
        }
    },
    actions: {
        setLoading: ({commit}, isLoading) => commit(loading.setLoading, isLoading),
        setToken: ({commit}, Token) => commit(token.setToken, Token)
    }
    ,
})
