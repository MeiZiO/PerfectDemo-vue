<template>
  <el-card class="centerCard">
    <el-button type="primary" @click="openDemo">点击打开弹框</el-button>
    <dialogDemo :modalOpen="modalDemo.open" :params="modalDemo.params" @modal-cancel="modalCancelHandler" @modal-done="modalDoneHandler"/>
  </el-card>
</template>

<script>
import dialogDemo from './dialogDemo'
export default {
  data () {
    return {
      modalDemo: {
        open: false,
        params: {}
      }
    }
  },
  components: {
    dialogDemo
  },
  methods: {
    openDemo () {
      this.modalDemo.open = true;
      this.modalDemo.params = {
        title: 'Demo'
      }
    },
    modalCancelHandler(name) { // 弹框点击取消
      this[name].open = false
    },
    modalDoneHandler(name) { // 弹框点击确定
      this[name].open = false
    },
  },
  mounted () {
    this.$store.commit('SET_NAME', '简单弹框')
    this.$store.commit('SET_TYPE', '弹框')
    this.$store.commit('SET_MARK', '此样例是一个弹框模板,不包含弹框的具体展示内容')
  }
}
</script>
