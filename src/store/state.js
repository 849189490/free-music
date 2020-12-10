const state = {
  listChecked: 'song', // 记录当前被选中的左侧列表
  loopIndex: 0, // 当前播放器的播放模式: 0列表循环, 1单曲循环, 3列表播放
  isPause: false, // 当前是否播放, false代表暂停
  currentTime: 0, // 当前播放时间
  duration: 0, // 歌曲总时间
  muted: false, // 是否静音
}
export default state
