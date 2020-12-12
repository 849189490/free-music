export const _localKeeper = {
  getItem(id) {
    return JSON.parse(localStorage.getItem(id))
  },
  // 收藏部分的缓存封装
  setItem(id, val) {
    // 完成后把完成的数据返回
    return new Promise((resolve, reject) => {
      let arr = []
      let item = localStorage.getItem(id)
      arr = item ? JSON.parse(item) : []
      // 判断本地存储中是否已存在
      // 有就删除, 没有就添加
      let flag = -1 // 记录重复的下标
      let bool = arr.some((song, index) => {
        if (song.id === val.id) {
          flag = index
          return true
        }
      })
      // 有就删除
      if (bool) {
        arr.splice(flag, 1)
      } else {
        arr = arr.concat(val)
      }
      localStorage.setItem(id, JSON.stringify(arr))
      resolve(arr)
    })
  },
  // 当前播放列表的缓存封装
  // setNowItem,
}

// 当前播放列表
// 我喜欢

// 歌单

// 让本地缓存与路由做个映射
// 所有缓存相关的函数的命名统一_func
