<style lang="less" scoped>
.showTabs{
    text-align: left;
}
.monacoClass1{
    width: 500px;
    height: 180px;
}
.monacoClass2{
    width: 500px;
    height: 150px;
}
.tabClass{
    // height: calc(100vh - 250px);
}
</style>

<template>
    <el-tabs v-model="activeName" type="border-card" class="tabClass">
        <el-tab-pane label="保留页码,不刷新数据" name="refresh"  class="showTabs">
            <h1>1.路由设置</h1>
            <div class="monacoClass1">
                <monaco :code="code1" theme="vs" @mounted="onMounted" language="json"></monaco>
            </div>
            <h1>2.路由守卫</h1>
            <p>路由守卫: router.beforeEach((to, from, next) => {})</p>
            <p>在localstorage中放置一个变量flag,当路由再次跳转到"列表"时</p>
            <p>从 详情界面 跳转 列表界面,需要保留页码,flag=true</p>
            <p>从 其他界面 跳转 列表界面,不需要保留页码,flag=false</p>
            <h1>3.列表界面进行判断刷新</h1>
            <p>由于设置了keep-alive: true</p>
            <p>因此第一次载入列表界面,钩子的触发顺序created-> mounted-> activated，退出时触发deactivated;</p>
            <p>再次载入列表界面,只触发activated</p>
            <p>因此我们的刷新操作要放到activated中,flag为false时,即不需要保留页码</p>
            <div class="monacoClass2">
                <monaco :code="code2" theme="vs" @mounted="onMounted2" language="json"></monaco>
            </div>
            <h1>后记:</h1>
            <p>为什么动态控制keep-alive的值,再搭配this.$destroy()?   his.$destroy()之后keep-alive将不会生效</p>
            <p>keep-alive的动态控制后,不同入口进入缓存的页面,呈现出来的视图始终是一个入口的</p>
        </el-tab-pane>
        <el-tab-pane label="保留页码,刷新数据" name="NeverRefresh"  class="showTabs">
            <p>这种情况采取localstorage存储的笨办法了</p>
            <h1>1.跳转前,先存储页码信息</h1>
            <h1>2.路由守卫中,不是从 列表->详情/详情->列表 则清空存储的页码信息</h1>
            <h1>3.列表界面,取出页码信息,存在则在mounted中进行页码初始化</h1>
            <h1>4.查询列表page参数正确,但是页面显示页码不一致(可能出现的情况)</h1>
            <p>在赋值total的地方,使用一个变量控制分页组件的展示,先赋值为false,再在nextTick中赋值为true</p>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
const code1 = `
{
    name: 'xx',
    path: 'yy',
    meta: {
        keep-alive: true
    },
    component: () => import('../aa.vue')
}
`
const code2 = `
activated({
    if (!JSON.parse(localstorage.from)) {
        this.query.page = 1
        this.search();
    }
})
`

export default {
    data () {
        return {
            code1,
            code2,
            editor1: null,
            editor2: null,
            activeName: 'refresh',
        }
    },
    methods:{
        onMounted(editor) {
            this.editor1 = editor;
        },
        onMounted2(editor) {
            this.editor2 = editor;
        }
    },
    mounted () {
        this.$store.commit('SET_NAME', '保留页码')
        this.$store.commit('SET_TYPE', 'Vue')
        this.$store.commit('SET_MARK', `
            场景模拟:查询一个列表,切换分页后访问某条详情数据,从详情界面返回<br/>
            1.需要保留页码,不刷新数据<br/>
            2.保留页码,刷新数据`)
    }
}
</script>