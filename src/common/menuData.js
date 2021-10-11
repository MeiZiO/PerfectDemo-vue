let menuData = [
  {
    name: '基础组件',
    children: [
      {
        name: '简单弹框',
        path: '/basicModule/dialog',
      },
      {
        name: '表单弹框',
        path: '/basicModule/dialog',
      }
    ]
  },
  {
    name: 'js简单功能',
    children: [
      {
        name: '点击复制',
        path: '/jsMethods/clickCopy',
      }
    ]
  },
  {
    name: '对象数组',
    children: [
      {
        name: '去重',
        path: '/objectArr/uniq',
      }
    ]
  },
  {
    name: '异常汇总',
    path: '/allBug',
    children: []
  },
  {
    name: '模板示例',
    path: '/mei/demo',
    children: []
  },
  {
    name: '模板示例2',
    path: '/mei/demo2',
    children: []
  },
  {
    name: '菜单二',
    path: '/other',
    children: [
      {
        name: '子菜单一',
        path: 'other/1',
      },
      {
        name: '子菜单二',
        path: 'other/2'
      }
    ]
  }
]
export default menuData