<template>
    <div id="blogList" class="flex-column-center">
        <Table class="mb-1" border :columns="columns" :data="blogList" style="width: 100%"></Table>
        <Page :total="blogList.length"
              size="small"
              show-elevator
              show-sizer
              :tooltip="true"
              :on-change="onChange"
              :on-page-size-change="onPageSizeChange"/>
    </div>
</template>

<script>
    import {getBlogList} from "../../api/blog.getBlogList";

    export default {
        name: "blogList",
        data() {
            return {
                blogList: [],
                columns: [
                    {
                        title: '日期',
                        key: 'date',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.date)
                            ]);
                        }
                    },
                    {
                        title: '标题',
                        key: 'title'
                    },
                    {
                        title: '作者',
                        key: 'author'
                    },
                    {
                        title: '分类',
                        key: 'classification'
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
            }
        },
        methods: {
            show(index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
                })
            },
            remove(index) {
                this.data6.splice(index, 1);
            },
            onChange() {

            },
            onPageSizeChange() {

            }
        },
        async created() {
            this.blogList = await getBlogList({pageSize: 10, pageIndex: 1})
            console.log(this.blogList)
        }
    }
</script>

<style scoped>

</style>
