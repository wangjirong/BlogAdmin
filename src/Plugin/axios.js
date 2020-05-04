import axios from 'axios'
import Vue from 'vue'
import store from '../store/index'

axios.defaults.headers.post['Content-Type'] = ['application/x-www-form-urlencoded', 'application/form-data'];
axios.defaults.timeout = 1000 * 10;
axios.defaults.withCredentials = true;


//请求拦截
axios.interceptors.request.use(config => {
    store.dispatch('setLoading', true)
    const token = sessionStorage.getItem('eleToken');
    // const token = document.cookie.replace(/(?:(?:^|.*;\s*)_ci_ve_\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if (token)
        config.headers.Authorization = token;

    return config;

}, error => {
    return Promise.reject(error);
})


//响应拦截
axios.interceptors.response.use(response => {
    store.dispatch('setLoading', false)
    return response;
}, error => {
    store.dispatch('setLoading', false)
    this.$Message.error(error.response.data);
    const status = error.response.status;
    if (status === 401) {
        this.$Message.error("登录超时，请重新登录");//token过期登录超时
        let cookieArray = document.cookie.split(";");
        for (let i = 0; i < cookieArray.length; i++) {
            if (cookieArray[i].indexOf("_cir_ve_") === (0 || 1)) {
                cookieArray.splice(i, 1);
                i--;
            }
        }

        // sessionStorage.removeItem('eleToken');
        this.$routes.push('/login');
    }
    return Promise.reject(error);
})


Vue.prototype.$axios = axios
export default axios
