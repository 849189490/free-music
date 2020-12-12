// 混入
import { mapState, mapMutations, mapActions } from 'vuex'
import {
  CHANGE_LIST_CHECKED,
  CHANGE_LOOP_INDEX,
  CHANG_EPAUSE,
  BOOL_PAUSE,
  CHANGE_CURRENT_TIME,
  CHANGE_DURATION_TIME,
  CHANGE_MUTED,
  CAN_I_LISTEN_MY_SONG,
  ASYNC_SEARCH_SONGS,
  ASYNC_NOW_SONG,
} from 'store/consts.js'
// 音乐控件部分的混入
export const mixCtrlStore = {
  computed: {
    ...mapState([
      'listChecked',
      'loopIndex',
      'isPause',
      'currentTime',
      'duration',
      'muted',
      'songsList',
      'filterSongList',
      'nowSong',
      'canIListenMySong',
    ]),
  },
  methods: {
    ...mapMutations([
      CHANGE_LIST_CHECKED,
      CHANGE_LOOP_INDEX,
      CHANG_EPAUSE,
      BOOL_PAUSE,
      CHANGE_CURRENT_TIME,
      CHANGE_DURATION_TIME,
      CHANGE_MUTED,
      CAN_I_LISTEN_MY_SONG,
    ]),
    ...mapActions([ASYNC_SEARCH_SONGS, ASYNC_NOW_SONG]),
  },
}

// // 收藏功能的混入
// export const mixCollect = {

// }
