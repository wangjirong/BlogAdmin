<template>
    <div id="register" class="center cover fixed background">
        <div class="container flex-column-left">
            <Input class="mb-5" v-model="user.userName" prefix="ios-contact" placeholder="Enter UserName" size="default"
                   style="width: 250px"/>
            <Input class="mb-5" v-model="user.password" prefix="ios-lock-outline" type="password" password
                   placeholder="Enter Password" size="default" style="width: 250px"/>
            <Input class="mb-5" v-model="password2" prefix="md-lock" type="password" password
                   placeholder="Confirm Password" size="default" style="width: 250px"/>
            <Input class="mb-5" v-model="user.cellPhone" prefix="md-phone-portrait" placeholder="Enter CellPhone"
                   size="default"
                   style="width: 250px"/>
            <Input class="mb-5" v-model="user.email" prefix="md-chatbubbles" placeholder="Enter Email" size="default"
                   style="width: 250px"/>
            <button class="register">注册</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data() {
            return {
                user: {
                    userName: null,
                    password: null,
                    cellPhone: null,
                    email: null
                },
                password2: null
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../style/View/register";

</style>
