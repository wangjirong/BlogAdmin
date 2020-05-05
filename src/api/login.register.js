import {post} from '../Plugin/axios.method'
import store from '../store'
import router from "../router";
import {Message} from "view-design";

// import JwtDecode from 'jwt-decode'

export async function login(url, user) {
    const token = await post(url, user)
    console.log(token.eleToken)
    if (token) {
        store.dispatch('setToken', token.eleToken)
        Message.success("登录成功")
        router.push('/')
    } else Message.error("账号或密码错误！")
}
