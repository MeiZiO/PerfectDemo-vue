<style lang="less" scoped>
.monacoClass{
    width: 500px;
    height: 180px;
    text-align: left;
}
</style>

<template>
    <el-card class="showCard">
        <div class="monacoClass">
            <monaco :code="code" theme="vs" @mounted="onMounted" language="json"></monaco>
        </div>
    </el-card>
</template>

<script>
const code = `
if(this.$route.path == '/index'){
    location.reload()
}else{
    this.$router.push({path:'/index'})
}
`
export default {
    data () {
        return {
            code,
            editor: null,
        }
    },
    methods: {
        onMounted(editor) {
            this.editor = editor;
        },
    },
    mounted () {
        this.$store.commit('SET_NAME', '回到首页')
        this.$store.commit('SET_TYPE', 'Vue')
        this.$store.commit('SET_MARK', `点击返回index首页`)
    }
}
</script>