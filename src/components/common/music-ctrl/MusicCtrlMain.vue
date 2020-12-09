<template>
  <section id="wrap">
    <audio
      @pause="audioPause"
      @play="audioPlay"
      controls
      class="audio"
      ref="audio"
      src="http://www.qigexiaoairen.cn:3001/public/旧城之王.mp3"
    ></audio>
    <div class="loop" @click.stop="changeLoop">
      <span class="iconfont" :class="loopCheck"></span>
    </div>
    <div class="pre">
      <span class="iconfont icon-pre-copy"></span>
    </div>
    <div class="pause" @click.stop="changeMyPause">
      <span v-if="!isPause" class="iconfont icon-play"></span>
      <span v-else class="iconfont icon-stop"></span>
    </div>
    <div class="next">
      <span class="iconfont icon-next"></span>
    </div>
    <div class="voice" @click="voiceCtrl">
      <span class="iconfont icon-voice"></span>
    </div>
  </section>
</template>

<script>
import { throttle } from 'common/utils'
import { CHANGE_LOOP_INDEX, CHANG_EPAUSE, BOOL_PAUSE, CHANGE_CURRENT_TIME, CHANGE_DURATION_TIME } from 'store/consts.js'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'MusicCtrlItem',
  props: {
    cneedToChange: 0, // 当此属性发生改变时意味着播放进度需要更新
  },
  data() {
    return {
      // 控制循环模式
      loopStyle: ['icon-loop', 'icon-single', 'icon-random'],
      loopCheck: 'icon-loop',
    }
  },
  mounted() {
    this.audioTimeEvent()
  },
  computed: {
    ...mapState(['loopIndex', 'isPause', 'currentTime', 'duration']),
  },
  watch: {
    cneedToChange(val) {
      this.$refs.audio.currentTime = val
    },
  },
  methods: {
    ...mapMutations([CHANGE_LOOP_INDEX, CHANG_EPAUSE, BOOL_PAUSE, CHANGE_CURRENT_TIME, CHANGE_DURATION_TIME]),
    changeLoop() {
      this[CHANGE_LOOP_INDEX]()
      this.loopCheck = this.loopStyle[this.loopIndex]
    },
    // 修改播放状态
    changeMyPause() {
      if (!this.isPause) {
        this.$refs.audio.play()
      } else {
        this.$refs.audio.pause()
      }
      // 提交给vuex
      this[CHANG_EPAUSE]()
    },
    // 给audio添加事件监听, 并做节流操作
    audioTimeEvent() {
      let that = this
      this.$refs.audio.addEventListener(
        'timeupdate',
        throttle(e => {
          that[CHANGE_CURRENT_TIME](e.target.currentTime)
          that[CHANGE_DURATION_TIME](e.target.duration)
        }, 300)
      )
    },
    // 同步播放控件与Vuex的状态
    audioPause() {
      this[BOOL_PAUSE](false)
    },
    audioPlay() {
      this[BOOL_PAUSE](true)
    },
    // 控制声音
    voiceCtrl() {
      console.log(this.$refs.audio.volume)
    },
  },
}
</script>

<style lang="scss" scoped>
.audio {
  position: absolute;
  top: -200px;
}
#wrap {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 220px;
  height: 67px;
  .loop,
  .voice {
    span {
      font-size: 16px;
    }
  }
  .pre,
  .next {
    span {
      font-size: 22px;
      color: #000;
    }
  }
  .pause {
    span {
      font-size: 36px;
      color: var(--green);
    }
  }
}
</style>
