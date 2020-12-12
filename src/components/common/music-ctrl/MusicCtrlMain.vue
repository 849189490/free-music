<template>
  <section id="wrap">
    <audio loop @pause="audioPause" @play="audioPlay" class="audio" ref="audio" :src="nowSong.url"></audio>
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
    <div class="voice">
      <span :class="{ 'img-gray': muted }" class="iconfont icon-voice" @click.stop="voiceCtrl"></span>
      <div class="volume" ref="volume">
        <div class="volume-base">
          <div class="base-scroll"></div>
          <div class="base-circle"></div>
        </div>
        <div class="volume-level">34%</div>
        <div @click.stop="shutVolume" class="volume-img">
          <span :class="{ 'img-gray': muted }" class="iconfont icon-voice"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { throttle } from 'common/utils'
import { mixCtrlStore } from 'common/mixin'
import {
  CHANGE_LIST_CHECKED,
  CHANGE_LOOP_INDEX,
  CHANG_EPAUSE,
  BOOL_PAUSE,
  CHANGE_CURRENT_TIME,
  CHANGE_DURATION_TIME,
  CHANGE_MUTED,
  CAN_I_LISTEN_MY_SONG,
} from 'store/consts'
export default {
  name: 'MusicCtrlItem',
  mixins: [mixCtrlStore],
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
    // 当播放时间改变时通知vuex / 频率300ms每次
    this.audioTimeEvent()
    // 添加全局window事件,当点击到window时让音量控制隐藏
    this.volumeWindowEvent()
    // 元数据加载完后切歌
    this.cutMySong()
  },
  watch: {
    cneedToChange(val) {
      this.$refs.audio.currentTime = val
    },
  },
  methods: {
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
    // 控制音量控件的显示隐藏
    voiceCtrl() {
      if (window.getComputedStyle(this.$refs.volume).display === 'none') {
        this.$refs.volume.style.display = 'block'
      } else {
        this.$refs.volume.style.display = 'none'
      }
    },
    // 添加一个全局window的点击事件,如果window被点击时volume是显示状态,那么将会被隐藏
    volumeWindowEvent() {
      let that = this
      window.addEventListener('click', function() {
        if (that.$refs.volume.style.display && that.$refs.volume.style.display === 'block') {
          that.$refs.volume.style.display = 'none'
        }
      })
    },
    // 静音
    shutVolume() {
      this.$refs.audio.muted = !this.$refs.audio.muted
      this[CHANGE_MUTED](this.$refs.audio.muted)
    },
    // 元数据加载后切歌
    cutMySong() {
      let that = this
      this.$refs.audio.addEventListener('canplay', function() {
        if (that.canIListenMySong) {
          this.play()
          that[BOOL_PAUSE](true)
        } else {
          that[CAN_I_LISTEN_MY_SONG]()
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
// .audio {
//   position: absolute;
//   top: -200px;
// }
#wrap {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 220px;
  height: 67px;
  .loop {
    span {
      font-size: 16px;
    }
  }
  .img-gray {
    color: #c4c4c4;
  }
  .voice {
    position: relative;
    span {
      font-size: 16px;
    }
    .volume {
      display: none;
      transform-style: preserve-3d;
      position: absolute;
      left: -30px;
      top: -260px;
      width: 71px;
      height: 238px;
      border-radius: 7px;
      background: #fff;
      &::after {
        content: '';
        display: block;
        position: absolute;
        left: 28px;
        bottom: -8px;
        width: 16px;
        height: 16px;
        background: #fff;
        transform: rotateZ(45deg) translateZ(-1px);
        box-shadow: 1px 1px 5px var(--green);
      }
    }
    .volume-base {
      position: relative;
      width: 3px;
      height: 125px;
      margin: 22px auto 0;
      background: #ececec;
      .base-scroll {
        position: absolute;
        bottom: 0;
        width: 3px;
        height: 50px;
        background: var(--green);
      }
      .base-circle {
        position: absolute;
        left: -5px;
        bottom: 37px;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        background: var(--green);
      }
    }

    .volume-level {
      padding: 15px 0;
      border-bottom: 1px solid #eee;
      text-align: center;
    }
    .volume-img {
      text-align: center;
      font-size: 18px;
      color: var(--green);
      line-height: 48px;
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
