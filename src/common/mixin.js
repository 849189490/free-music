// 混入
import { mapState, mapMutations } from 'vuex'
import {
  CHANGE_LIST_CHECKED,
  CHANGE_LOOP_INDEX,
  CHANG_EPAUSE,
  BOOL_PAUSE,
  CHANGE_CURRENT_TIME,
  CHANGE_DURATION_TIME,
  CHANGE_MUTED,
} from 'store/consts.js'
// 音乐控件部分的混入
export const mixCtrlStore = {
  computed: {
    ...mapState(['listChecked', 'loopIndex', 'isPause', 'currentTime', 'duration', 'muted']),
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
    ]),
  },
}
