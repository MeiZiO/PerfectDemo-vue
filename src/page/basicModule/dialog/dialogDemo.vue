<template>
  <el-dialog
    :visible.sync="visibleFlag"
    :title="params.title"
    @close="cancel"
    :append-to-body="true"
    :close-on-click-modal="false"
    :width="'30%'">
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="ok" :loading="loading">确 定</el-button>
      <el-button type="default" @click="cancel">取 消</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: ['modalOpen', 'params'],
  data () {
    return {
      loading: false,
      visibleFlag: false
    }
  },
  methods: {
    cancel() {
      this.$emit('modal-cancel', 'modalDemo')
    },
    ok() {
        this.loading = true
        setTimeout(() => {
          this.$message({
            type: 'success',
            message: '点击了确定'
          })
          this.$emit('modal-done', 'modalDemo')
          this.loading = false
        }, 300)
      },
  },
  watch: {
    modalOpen (val) {
      this.visibleFlag = val
      if (val) {
        // 打开弹框,进行相应的初始化
      }
    }
  }
}
</script>
