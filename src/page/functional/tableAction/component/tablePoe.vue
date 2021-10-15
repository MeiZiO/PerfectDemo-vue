<!--
适用情况：表格操作列按钮比较多
参数说明：
params  数组 按钮相关信息
data    对象 表格当前行信息
maxActions  number 直观显示按钮数，大于这个值时，部分按钮将放到更多里面
示例：
js
opeButtons:[
{
  title: this.$t('buttons.del'),
  icon: 'bn bnedit'
  disabled: (item) => { // 是否禁用
    return item.source != 0
  },
  ifShow: (item) => { // 是否展示
    return true
  },
  action: (item) => {
    this.appDel(item);
  }
},
{
  title: '编辑',
  action: (item) => {
    this.appDel(item);
  }
},
{
  title: '添加',
  action: (item) => {
    this.appDel(item);
  }
},
{
  title: '查看',
  action: (item) => {
    this.appDel(item);
  }
}
]
html:
<tableOPe :params="opeButtons" :data="scope.row" :max-actions="3"></tableOPe>
-->
<template>
  <div>
    <template v-for="(action,i) in actions">
      <!-- <el-tooltip class="item" effect="dark" :content="typeof action.title === 'function' ? action.title(data) : action.title" placement="top"  :key="i"> -->
        <el-button  plain circle :key="i"
                    :style="(i==0?`padding-right:6px;`:'') + (i==2?`padding-left:6px;`:'')"
                    :type="typeof action.type === 'function' ? action.type(data) : action.type"
                    :icon="typeof action.icon === 'function' ? action.icon(data) : action.icon"
                    :disabled="typeof action.disabled === 'function' ? action.disabled(data) : action.disabled"
                    v-if="!showDivider && (typeof action.ifShow === 'function' ? action.ifShow(data) : true)"
                    @click.native.prevent="typeof action.disabled === 'function' ? (action.disabled(data) ? null : action.action(data)) : (action.disabled ? null : action.action(data))">
        </el-button>
        <el-button  :key="i"
                    :style="(i==0?`padding-right:6px;`:'') + (i==2?`padding-left:6px;`:'')"
                    :type="typeof action.type === 'function' ? action.type(data) : action.type"
                    :icon="typeof action.icon === 'function' ? action.icon(data) : action.icon"
                    :disabled="typeof action.disabled === 'function' ? action.disabled(data) : action.disabled"
                    v-if="showDivider &&(typeof action.ifShow === 'function' ? action.ifShow(data) : true)"
                    @click.native.prevent="typeof action.disabled === 'function' ? (action.disabled(data) ? null : action.action(data)) : (action.disabled ? null : action.action(data))">
          {{typeof action.title === 'function' ? action.title(data) : action.title}}
        </el-button>
        <el-divider :key="i" direction="vertical" v-if="actions.length >1 && i != actions.length -1 && showDivider"></el-divider>
      <!-- </el-tooltip> -->
    </template> <!--v-if="show(data)"-->
    <el-divider direction="vertical" v-if="showDivider && showFlag"></el-divider>
    <!-- <el-dropdown trigger="hover" style="margin-left:10px;" v-if="showFlag"> -->
    <el-dropdown trigger="hover" v-if="showFlag">
      <!-- <el-tooltip class="item" effect="dark" content="更多" placement="top"> -->
        <el-button v-if="!showDivider" size="mini" type="info" icon="el-icon-more-outline" plain circle></el-button>
        <el-button v-else size="mini" type="text"> 更多<i class="el-icon-arrow-down el-icon--right"></i></el-button>
      <!-- </el-tooltip> -->
      <el-dropdown-menu slot="dropdown">
        <template v-for="(action,i) in moreActions">
          <el-dropdown-item
                            :key="i"
                            :disabled="typeof action.disabled === 'function' ? action.disabled(data) : false"
                      @click.native.prevent="typeof action.disabled === 'function' ? (action.disabled(data) ? null : action.action(data)) : (action.disabled ? null : action.action(data))"
                      v-if="typeof action.ifShow === 'function' ? action.ifShow(data) : true"
                      :icon="typeof action.icon === 'function' ? action.icon(data) : action.icon"
          >
                      {{typeof action.title === 'function' ? action.title(data) : action.title}}
          </el-dropdown-item>
        </template>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>

  export  default {
    props: ['params','data','maxActions', 'showDivider'],
    data(){
      return {
      }
    },
      methods:{
        show(data){
            return this.moreActions.some(x=>{return typeof x.ifShow === 'function' ? x.ifShow(data) : true})
        }
      },
    computed: {
      buttons(){
        let arr=[];
        this.params.forEach((item)=>{
          if(typeof item.ifShow === 'function' ? item.ifShow(this.data) : true){
            arr.push(item)
          }
        })
        return arr;
      },
      actions() {
        let arr=this.buttons;
        return arr.length<=this.maxActions?arr:arr.slice(0,this.maxActions-1)
      },
      moreActions(){
        let arr=this.buttons;
        return  arr.length<=this.maxActions?[]:arr.slice(this.maxActions-1)
      },
      showFlag(){
        return this.moreActions.length > 0
      },
    }

  }
</script>
<style lang="scss" scoped>
.over:hover{
  color: #1e54d5!important
}
</style>
