<template>
    <header id="elHeader" class=" flex-vertical-space">
        <span class="logo">Blog Admin</span>
        <Dropdown class="user center">
            <img :src="user.avatar" :alt="user.userName" class="avatar" :title="user.userName">
            <DropdownMenu slot="list">
                <DropdownItem>
                    <button @click="loginOut">退出登录</button>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </header>
</template>

<script>
    import {getUser} from "../../api/header.user.info";

    export default {
        name: "elHeader",
        data() {
            return {
                user: null
            }
        },
        async created() {
            this.user = await getUser()
        },
        methods: {
            loginOut() {
                this.$store.dispatch('setToken', null)
                this.$router.push('/login')
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../../style/Admin/header";

</style>
