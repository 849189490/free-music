// 公共方法

// 节流
export function throttle(fn, interval) {
  let last = 0 // last为上一次触发回调的时间
  // 将throttle处理结果当作函数返回
  return function() {
    let that = this // 保留调用时的this上下文
    let args = arguments // 保留调用时传入的参数
    let now = +new Date() // 记录本次触发回调的时间
    // 判断上次触发的时间和本次触发的时间差是否小于时间间隔的阈值
    if (now - last >= interval) {
      // 如果时间间隔大于我们设定的时间间隔阈值，则执行回调
      last = now
      fn.apply(that, args)
    }
  }
}
// 获取元素到window的距离
export function getRootOffset(ele) {
  let x = 0
  let y = 0
  while (ele) {
    x += ele.offsetLeft
    y += ele.offsetTop
    ele = ele.offsetParent
  }
  return { x, y }
}

// 时间过滤
