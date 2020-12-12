const state = {
  listChecked: 'shop', // 记录当前被选中的左侧列表
  loopIndex: 0, // 当前播放器的播放模式: 0列表循环, 1单曲循环, 3列表播放
  isPause: false, // 当前是否播放, false代表暂停
  currentTime: 0, // 当前播放时间
  duration: 318, // 歌曲总时间
  muted: false, // 是否静音
  songsList: [], // 保存搜索到的歌单
  filterSongList: [], // 保存过滤后的歌单,所有共享此歌单的均需要保持此格式
  canIListenMySong: false, // 做一个第一次打开浏览器的判断,因谷歌限制,在用户操作之前播放会报错
  nowSong: {
    id: 8888,
    name: '旧城之王',
    url: 'http://www.qigexiaoairen.cn:3001/public/旧城之王.mp3',
    img: 'http://www.qigexiaoairen.cn:3001/public/bird.jpg',
    album: '未知',
    artists: [{ id: 111, name: '木马' }],
    fullArtists: '木马',
    duration: 318000,
    collect: true,
  }, // 保存当前要播放的音乐的信息
  readyToPlay: [
    {
      id: 8888,
      name: '旧城之王',
      url: 'http://www.qigexiaoairen.cn:3001/public/旧城之王.mp3',
      img: 'http://www.qigexiaoairen.cn:3001/public/bird.jpg',
      album: '未知',
      artists: [{ id: 111, name: '木马' }],
      fullArtists: '木马',
      duration: 318000,
      collect: true,
    },
  ], // 当前的播放列表

  allHistory: 0, // 保存当前项目的历史记录条数, 控制顶部前进和后退按钮是否可用
  nowHistory: 0, // 保存当前在的位置
}
export default state
