//获取所有的非一级路由

const getchildrenrouter = (routers) => {
  const arr = []
  routers.forEach((item) => {
    if (item.children && item.children.length > 0) {
      arr.push(...item.children)
    }
  })
  return arr
}
//获取所有的一级数据
export const filterRouters = (routers) => {
  const childrenrouter = getchildrenrouter(routers)
  //   routers 完整的路由  16条数据
  return routers.filter((item) => {
    return !childrenrouter.find((childrenrouter) => {
      return childrenrouter.path == item.path
    })
  })
}
//检测空对象  一级检测空数据  如果为空返回true
const isNull = (data) => {
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true
  return false
}

//将所有的一级路由数据处理称菜单数据

export const generateMenus = (routers) => {
  const arr = []
  routers.forEach((item) => {
    if (isNull(item.meta) && isNull(item.children)) return

    if (isNull(item.meta) && !isNull(item.children)) {
      arr.push(...generateMenus(item.children))
      return
    }

    //获取三条数据的path路径
    const routePath = item.path
    let route = arr.find((item) => item.path == routePath)

    if (!route) {
      route = {
        ...item,
        path: routePath,
        children: []
      }

      if (item.meta.title && item.meta.icon) {
        arr.push(route)
      }
    }
    if (item.children) {
      route.children.push(...generateMenus(item.children))
    }
  })
  console.log(arr)
  return arr
}
