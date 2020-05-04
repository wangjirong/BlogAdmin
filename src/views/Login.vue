<template>
    <div id="login" class="center cover fixed background">
        <div class="container flex-column-left">
            <Input class="mb-5" aria-required="true" v-model="user.userName" prefix="ios-contact"
                   placeholder="Enter UserName" size="default"
                   style="width: 250px"/>
            <Input class="mb-5" aria-required="true" v-model="user.password" prefix="ios-lock-outline" type="password"
                   password
                   placeholder="Enter Password" size="default" style="width: 250px"/>
            <div class="btn-group center" style="width: 250px">
                <Button type="primary" @click='userLogin' class="mr-1">登录</Button>
                <Button type="primary" @click="register" class="ml-1">注册</Button>
            </div>
        </div>
    </div>
</template>

<script>
    import {login} from '../api/login.register'

    export default {
        name: "Login",
        data() {
            return {
                user: {
                    userName: "",
                    password: ""
                }
            }
        },
        methods: {
            userLogin() {
                login()
            },
            register() {
                this.$router.push('/register')
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../style/View/login.less";
</style>
