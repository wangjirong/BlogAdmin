<template>
    <div id="app">
        <Loading></Loading>
        <router-view/>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isRouterAlive: true
            };
        },
        provide() {
            return {
                reload: this.reload
            };
        },
        methods: {
            reload() {
                this.isRouterAlive = false;
                this.$nextTick(() => {
                    this.isRouterAlive = true;
                });
            }
        },
        components: {
            Loading: () => import('./components/Iview/Loading')
        },
        created() {
            //在页面加载时读取sessionStorage里的状态信息
            if (sessionStorage.getItem("store")) {
                this.$store.replaceState(
                    Object.assign(
                        {},
                        this.$store.state,
                        JSON.parse(sessionStorage.getItem("store"))
                    )
                );
                // sessionStorage.clear();
            }

            //在页面刷新时将vuex里的信息保存到sessionStorage里
            window.addEventListener("beforeunload", () => {
                sessionStorage.setItem("store", JSON.stringify(this.$store.state));
            });
        }
    }

</script>
<style>
    @import "./style/init.css";
    @import "./style/style.css";
</style>
