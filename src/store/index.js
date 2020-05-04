import Vue from 'vue'
import Vuex from 'vuex'

// import { loading } from '../config/vuex.config'
const loading = {
    setLoading: "SET_LOADING",
    getLoading: "GET_LOADING"
}
Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        isLoading: false
    },
    getters: {
        [loading.getLoading]: state => state.isLoading
    },
    mutations: {
        [loading.setLoading]: (state, isLoading) => {
            if (isLoading) state.isLoading = isLoading
            else state.isLoading = false
        }
    },
    actions: {
        setLoading: ({commit}, isLoading) => commit(loading.setLoading, isLoading)
    }
    ,
})
