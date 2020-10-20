export let code = 
`
  // data是原对象数组
  // key是去重的参考属性
  // keyArr是去重的参考数组
  // arr是去重后的对象数组
  let key = 'name'
  let keyArr = []
  let arr = []
  data.forEach(item=>{
    if(!keyArr.includes(item[key])){
      arr.push(item)
      keyArr.push(item[key])
    }
  })
`