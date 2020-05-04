<template>
    <div id="app">
        <Loading></Loading>
        <router-view/>
    </div>
</template>
<script>
    export default {
        components: {
            Loading: () => import('./components/Iview/Loading')
        }
    }
</script>
<style>
    @import "./style/init.css";
    @import "./style/style.css";
</style>
