const state = {
  listChecked: 'song', // 记录当前被选中的左侧列表
  loopIndex: 0, // 当前播放器的播放模式: 0列表循环, 1单曲循环, 3列表播放
  isPause: false, // 当前是否播放, false代表暂停
  currentTime: 0, // 当前播放时间
  duration: 0, // 歌曲总时间
  muted: false, // 是否静音
  songsList: [], // 保存搜索到的歌单
  nowSong: {
    id: 8888,
    name: '旧城之王',
    url: 'http://www.qigexiaoairen.cn:3001/public/旧城之王.mp3',
    img: '~assets/img/bird.jpg',
    collect: '未知',
    artists: [{ id: 111, name: '木马' }],
  }, // 保存当前要播放的音乐的信息
}
export default state
