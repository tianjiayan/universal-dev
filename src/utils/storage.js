//存储数据
const setItem = (key, value) => {
  //将数组、对象类型的数据转化为json字符串进行存储
  if (typeof value == 'object') {
    value = JSON.stringify(value)
  }
  localStorage.setItem(key, value)
}
//获取数据
const getItem = (key) => {
  const data = localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (err) {
    return data
  }
}
//删除数据
const removeItem = (key) => {
  localStorage.removeItem(key)
}
//删除所有数据
const removeAllItem = (key) => {
  localStorage.clear()
}
export default {
  setItem,
  getItem,
  removeItem,
  removeAllItem
}
