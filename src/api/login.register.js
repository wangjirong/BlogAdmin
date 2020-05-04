import {post} from '../Plugin/axios.method'

// import JwtDecode from 'jwt-decode'

export async function login(url, user) {
    const token = await post(url, user)
    if (token) {
        sessionStorage.setItem('eleToken', token)
        this.$store.dispatch('setToken', token)
        this.$Message.success("登录成功")
        this.$router.push('/')

    } else this.$Message.error("账号或密码错误！")
}
