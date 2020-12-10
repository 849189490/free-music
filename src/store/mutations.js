import {
  CHANGE_LIST_CHECKED,
  CHANGE_LOOP_INDEX,
  CHANG_EPAUSE,
  BOOL_PAUSE,
  CHANGE_CURRENT_TIME,
  CHANGE_DURATION_TIME,
  CHANGE_MUTED,
  ASYNC_SEARCH_SONGS,
  ASYNC_NOW_SONG,
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

  // actions
  [ASYNC_SEARCH_SONGS](state, payload) {
    state.songsList = payload
  },
  [ASYNC_NOW_SONG](state, payload) {
    state.nowSong = payload
  },
}
export default mutations
