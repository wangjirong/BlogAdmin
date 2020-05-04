<template>
    <header id="elHeader" class=" flex-vertical-space">
        <span class="logo">Blog Admin</span>
        <Dropdown class="user center">
            <img src="../../assets/avatar.jpg" alt="老王" class="avatar" title="老王">
            <DropdownMenu slot="list">
                <DropdownItem>
                    <button>退出登录</button>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </header>
</template>

<script>
    export default {
        name: "elHeader"
    }
</script>

<style scoped lang="less">
    @import "../../style/Admin/header";

</style>
