/* eslint-disable */
let data = [
  {
    name: '视图数据与实际数据不一致',
    type: ['vue', '视图'],
    show: true,
    detail: 'console出来的数据与视图上的数据不一致,',
    reason: `
      this.$nextTick( () => {<br/>
        &nbsp;&nbsp;&nbsp;// 赋值<br/>
        &nbsp;&nbsp;&nbsp;// 使用<br/>
      });<br/>
      或<br/>
      setTimeOUT(()=>,0)<br/>
      或<br/>
      this.$set(key,'value')<br/>`
  },
  {
    name: 'Navigating to current location (XXX) is not allowed',
    type: ['vue'],
    show: true,
    detail: '在vue cli3的项目中,接连两次访问了同一个路由地址(业务场景，切换用户,从后台重新获取菜单,再次重定向到导航界面，强制reload)',
    reason: `
    （在路由入口文件中使用以下代码）<br/>
    // 解决两次访问相同路由地址报错<br/>
    const originalPush = VueRouter.prototype.push<br/>
    VueRouter.prototype.push = function push(location) {<br/>
    &nbsp;&nbsp;&nbsp; return originalPush.call(this, location).catch(err => err)<br/>
    }<br/>`
  },
  {
    name: 'vue编译内存溢出javaScript heap out of memory',
    type: ['vue'],
    show: true,
    detail: '编译项目时报错,内存溢出',
    reason: `
      1)下载依赖时,混合使用了npm/yarn => 删除使用一个命令重新下载依赖<br/>
      2)在package.json中的scripts脚本,你运行的命令后加上<br/>
        &nbsp;&nbsp;
        -max_old_space_size=4096<br/>
        &nbsp;&nbsp;
        或 npx --max_old_space_size=4096<br/>
        &nbsp;&nbsp;
        或node--max_old_space_size=4096<br/>
      3)在vue.config.js中的chainWebpack里加<br/>
        config.plugin('fork-ts-checker').tap(args => {<br/>
          &nbsp;&nbsp; args[0].memoryLimit = 10240;<br/>
          &nbsp;&nbsp; return args;<br/>
        })<br/>
      4)在package.json中的scripts脚本中可能存在这样的命令,执行一下<br/>
        &nbsp;&nbsp; fix-memory-limit: cross-env LIMIT=4096 increase-memory-limit<br/>
      5)全局安装npm install -g increase-memory-limit<br/>
        &nbsp;&nbsp; 进入项目目录执行increase-memory-limit<br/>
      6)在node_modules/.bin中的一些文件中加--max_old_space_size=4096,如<br/>
          &nbsp;&nbsp;  @IF EXIST "%~dp0 \node.exe"(<br/>
          &nbsp;&nbsp; "%~dp0\node.exe”"%~dp0\..\@ioniclapp-scripts\bin\ionic-app-scripts.js”%*)<br/>
          &nbsp;&nbsp;  ELSE(<br/>
          &nbsp;&nbsp; @SETLOCAL<br/>
          &nbsp;&nbsp; @SET PATHEXT=%PATHEXT : ;.JS;=;%<br/>
          &nbsp;&nbsp; node --max_old_space_size=4096“%~dp0\..\@ioniclapp-scripts\bin\ionic-app-scripts.js”%*<br/>
          &nbsp;&nbsp; )<br/>
      7)删除npmrc文件(不是nodejs安装目录npm模块下的那个npmrc文件，而是C.\Users(账户八下的.npmrc文件)。
      `
  },
]
export default data