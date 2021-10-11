/*
 * @,@Author: ,: yangxinmei
 * @,@Date: ,: 2021-01-20 17:38:02
 * @,@LastEditTime: ,: 2021-01-20 17:38:02
 */
export const deepCopy = (target) =>{
  if (target instanceof Array) {
    let n = [];
    for (let i = 0; i < target.length; ++i) {
      n[i] = deepCopy(target[i]);
    }
    return n;
  } else if (target instanceof Object) {
    let n = {}
    for (let i in target) {
      n[i] = deepCopy(target[i]);
    }
    return n;
  } else {
    return target;
  }
}