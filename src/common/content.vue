<style lang="less" scoped>
body, html {
    margin:0; padding: 0;
}
.el-menu--horizontal>.el-submenu .el-submenu__title{
  height: 32px!important
}
.home {
  .el-header{
    padding: 0;
    height: 32px!important;
    overflow: hidden;
  }
  .floatR {
    float: right;
  }
  .aside_menu {
    height: calc(100vh - 32px);
  }
  .aside_container {
    width: 200px;
    overflow: hidden;
    height: calc(100vh - 32px);
  }
}
</style>
<style lang="less">
.home{
  .header_container {
    .el-menu--horizontal>.el-submenu .el-submenu__title {
      height: 32px!important;
      line-height: 32px!important;
      font-size: 12px!important;
    }

    .el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title{
      height: 28px;
      line-height: 28px;
    }
  }

  .aside_container {
    text-align: left;
    .el-menu-item {
      color:#7D7D7D;
    }
    .el-submenu__title {
      color:#7D7D7D;
    }
    .el-menu-item.is-active {
      color: #9EC0E8;
    }
    .el-menu-item:hover {
      color: #000;
      background-color: #DDE8F7!important;
    }
    .el-submenu__title:hover {
      color: #000;
      background-color: #DDE8F7!important;
    }
  }
}
</style>
<template>
  <div class="home">
    <el-container>
      <el-header class="header_container">	
        <el-menu default-active="1" background-color="#EBF8FE" mode="horizontal">
          <el-submenu index="1" class="floatR">
            <template slot="title">版本</template>
            <el-menu-item index="2-1">v1.0</el-menu-item>
            <el-menu-item index="2-1">v2.0</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-header>
      <el-container>
        <div class="aside_container">
          <el-aside width="220px">
          <el-menu
            background-color="#FFF9FB"
            class="el-menu-vertical-demo aside_menu"
            :default-active="$route.path"
            router>
            <div v-for="(item1, index1) in menuData" :key="index1">
              <el-menu-item :index="item1.path" v-if="item1.children.length == 0">
                <!-- <i class="el-icon-menu"></i> -->
                  <span slot="title">{{item1.name}}</span>
              </el-menu-item>
              <el-submenu v-else :index="'' + index1">
                <template slot="title">
                  <span slot="title"></span>
                  <span slot="title">{{item1.name}}</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item v-for="(item2, index2) in item1.children" :index="item2.path" :key="index2">{{item2.name}}</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </div>
          </el-menu>
        </el-aside>
        </div>
        <el-container>
          <el-footer style="height:160px;padding:0;">
            <pageTitle :route="$route"></pageTitle>
          </el-footer>
          <el-main>
            <transition enter-active-class="fadeInUp" mode="out-in">
              <router-view></router-view>
            </transition>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import menuData from './menuData.js'
import pageTitle from './pageTitle'
export default {
  components: {
    pageTitle
  },
  data () {
    return {
      menuData
    }
  },
  methods:{
    
  },
  mounted() {
  },
  route: {
    data() {
      this.$root.showLoading();
      return this.fetchCertificates().then((res) => {
        this.$root.dismissLoading();
        if (res.error) return this.$root.toastError(res.error);
        if(res.data.certificates.length >0){
          return res.data;
        }else{
          console.log(this.$route ,"----当前页面的url信息----");
        }
      });
    },
    canActivate (transition) {
      console.log(transition,"======上一个页面的url信息=======");
      transition.next();
    }
  }
}
</script>

