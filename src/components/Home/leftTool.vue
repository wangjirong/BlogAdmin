<template>
    <div id="leftTool">
        <Menu theme="dark">
            <Submenu name="1">
                <template slot="title">
                    <Icon type="ios-menu-outline"/>
                    导航
                </template>
                <MenuItem v-for="(item,index) in menuList" :key="item.id" :name="'1-'+index+1" :to="item.href"
                          target="_blank">{{item.title}}
                </MenuItem>
            </Submenu>
            <Submenu name="2">
                <template slot="title">
                    <Icon type="ios-book-outline"/>
                    文章
                </template>
                <MenuItem name="2-1" to="/blog/blogList">列表</MenuItem>
                <MenuItem name="2-2" to="/blog/addBlog">增加</MenuItem>
            </Submenu>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-calendar"/>
                    日志
                </template>
                <MenuItem name="3-1" to="/diary/diaryList">列表</MenuItem>
                <MenuItem name="3-2" to="/diary/addDiary">增加</MenuItem>
            </Submenu>
            <Submenu name="4">
                <template slot="title">
                    <Icon type="ios-people"/>
                    友链
                </template>
                <MenuItem name="4-1" to="/friendLink/linkList">列表</MenuItem>
                <MenuItem name="4-2" to="/friendLink/addLink">新增</MenuItem>
            </Submenu>
        </Menu>
    </div>
</template>

<script>
    export default {
        name: "leftTool",
        data() {
            return {
                menuList: [
                    {
                        href: "/",
                        title: "首页"
                    },
                    {
                        href: "/",
                        title: "博客"
                    },
                    {
                        href: "/",
                        title: "日志"
                    },
                    {
                        href: "/",
                        title: "关于"
                    },
                    {
                        href: "/",
                        title: "友链"
                    }
                ]
            }

        }

    }
</script>

<style scoped lang="less">
    @import "../../style/Admin/leftTool";
</style>
