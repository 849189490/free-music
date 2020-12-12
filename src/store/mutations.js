import { _localKeeper } from 'local/localstorage'
import {
  CHANGE_LIST_CHECKED,
  CHANGE_LOOP_INDEX,
  CHANG_EPAUSE,
  BOOL_PAUSE,
  CHANGE_CURRENT_TIME,
  CHANGE_DURATION_TIME,
  CHANGE_MUTED,
  CHANGE_READY_TO_PLAY,
  CHANGE_FILTER_SONG_LIST,
  ASYNC_SEARCH_SONGS,
  ASYNC_NOW_SONG,
  CAN_I_LISTEN_MY_SONG,
} from './consts'
const mutations = {
  // 改变列表选中状态
  [CHANGE_LIST_CHECKED](state, payload) {
    state.listChecked = payload
  },
  // 改变播放模式
  [CHANGE_LOOP_INDEX](state) {
    state.loopIndex = state.loopIndex < 2 ? state.loopIndex + 1 : 0
  },
  // 控制是否播放
  [CHANG_EPAUSE](state) {
    state.isPause = !state.isPause
  },
  // 播放和暂停
  [BOOL_PAUSE](state, payload) {
    state.isPause = payload
  },
  // 改变当前播放时间
  [CHANGE_CURRENT_TIME](state, payload) {
    state.currentTime = payload
  },
  // 改变歌曲总时间, 切歌时记录
  [CHANGE_DURATION_TIME](state, payload) {
    state.duration = payload
  },
  // 切换是否静音
  [CHANGE_MUTED](state, payload) {
    state.muted = payload
  },
  // 第一次判断
  [CAN_I_LISTEN_MY_SONG](state) {
    state.canIListenMySong = true
  },

  // 改变要播放的列表 如果传值则按照传值,如果不传默认改为filterSongList
  [CHANGE_READY_TO_PLAY](state, payload) {
    state.readyToPlay = payload || state.filterSongList
    state.nowSong = state.readyToPlay[0]
  },
  [CHANGE_FILTER_SONG_LIST](state, payload) {
    state.filterSongList = payload || []
  },
  // actions
  [ASYNC_SEARCH_SONGS](state, payload) {
    // 保留原始信息
    state.songsList = payload
    state.listChecked = '/songs'
    // 取出like缓存, 用于对比记录是否收藏
    let _like = _localKeeper.getItem('like')
    // 过滤后留下需要的信息
    state.filterSongList = payload.map(item => {
      return {
        id: item.id,
        name: item.name || item.artists.name,
        artists: item.artists.reduce((pre, cur) => {
          return pre.concat({ id: cur.id, name: cur.name })
        }, []),
        album: item.album.name, // 专辑
        duration: item.duration,
        collect: _like.find(val => val.id == item.id), // 是否收藏,这里每条数据都要取出缓存遍历
      }
    })
  },
  [ASYNC_NOW_SONG](state, payload) {
    state.nowSong = payload
    state.currentTime = 0
    state.isPause = true
    console.log(payload)
    state.readyToPlay.push(payload)
  },
}
export default mutations
