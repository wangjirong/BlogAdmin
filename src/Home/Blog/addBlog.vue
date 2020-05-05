<template>
    <div id="addBlog" class="flex-column-left">
        <div class="nav-info flex-vertical mb-5">
            <div class="flex-column-left mr-1">
                <div class="flex-vertical mb-5">
                    <label class="title-label mr-5 fs-7">文章标题:</label>
                    <Input v-model="blog.title" placeholder="请输入文章标题" style="width: 350px"/>
                </div>
                <div class="flex-vertical">
                    <label class="state-label mr-5 fs-7">文章概述:</label>
                    <Input v-model="blog.state" placeholder="请输入文章概述" style="width: 350px"/>
                </div>

            </div>
            <div class="flex-column-left mr-1">
                <div class="flex-vertical mb-5">
                    <label class="state-label mr-5 fs-7">文章标签:</label>
                    <Input v-model="blog.classification" placeholder="请输入文章标签" style="width: 200px"/>
                </div>
                <div class="flex-vertical">
                    <label class="state-label mr-5 fs-7">是否原创:</label>
                    <RadioGroup v-model="blog.type">
                        <Radio label="apple" class="mr-1">
                            <span>原创</span>
                            <Icon type="logo-buffer"/>
                        </Radio>
                        <Radio label="android">
                            <span>转载</span>
                            <Icon type="ios-desktop"/>
                        </Radio>
                    </RadioGroup>
                </div>
            </div>
            <div class="ml-1">
                <Upload
                        ref="upload"
                        :show-upload-list="false"
                        :on-success="handleSuccess"
                        :format="['jpg','jpeg','png']"
                        :max-size="2048"
                        :paste="true"
                        multiple
                        type="drag"
                        action="//jsonplaceholder.typicode.com/posts/"
                        style="display: inline-block;width:58px;">
                    <div style="width: 58px;height:58px;line-height: 58px;">
                        <Icon type="md-cloud-upload" size="20"/>
                    </div>
                </Upload>
            </div>
        </div>
        <div class="mavon">
            <mavon-editor
                    :toolbars="toolbars"
                    :ishljs="true"
                    ref="md"
                    :subfield="true"
                    codeStyle="tomorrow-night"
                    v-model="blog.text"/>
        </div>

    </div>
</template>
<script>
    import Vue from 'vue'
    import mavonEditor from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'

    Vue.use(mavonEditor)

    import toolbars from "../../config/mavon.editor.config.toolbar";

    export default {
        data() {
            return {
                toolbars,
                blog: {
                    title: null,
                    state: null,
                    cover: null,
                    classification: null,
                    type: null,
                    text: null
                }
            }
        },
        methods: {
            handleSuccess() {
            }

        }
    }
</script>

<style scoped>
    .mavon {
        width: 100%;
        height: 100%;
    }
</style>
