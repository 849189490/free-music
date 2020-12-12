<template>
  <section class="music-wrap">
    <div :data-father="true" ref="ctrlParent" @click.stop="ctrlParentChange" class="music-ctrls">
      <div ref="current" class="current"></div>
      <div ref="ctrl" class="ctrl"></div>
    </div>
    <slot name="left"></slot>
    <slot name="center"></slot>
    <slot name="right"></slot>
  </section>
</template>

<script>
import { getRootOffset } from 'common/utils'
import { mixCtrlStore } from 'common/mixin'
import {
  CHANGE_LIST_CHECKED,
  CHANGE_LOOP_INDEX,
  CHANG_EPAUSE,
  BOOL_PAUSE,
  CHANGE_CURRENT_TIME,
  CHANGE_DURATION_TIME,
  CHANGE_MUTED,
} from 'store/consts.js'

export default {
  name: 'MusicCtrl',
  mixins: [mixCtrlStore],
  data() {
    return {
      percent: 0, // 当前播放的比率
      startX: 0, // 记录小圆圈到window的距离
      moveSize: 0, // 拖动距离
      maxSize: 0, // 记录小圆圈的可移动距离
    }
  },
  mounted() {
    this.maxSize = parseInt(window.getComputedStyle(this.$refs.current.parentNode).width) - 9
    this.dragProgress()
  },
  watch: {
    currentTime(val) {
      // 播放到100%时
      if (this.percent === 1) {
        if (this.loopIndex === 0) {
          // 播放下一曲
        } else if (this.loopIndex === 1) {
          // 重新放一遍
        } else {
          // 随机播放
        }
      } else {
        this.percent = this.currentTime / this.duration
        // 歌曲进度条的变化
        this.$refs.ctrl.style.left = this.$refs.current.style.width = this.maxSize * this.percent + 'px'
      }
    },
  },
  methods: {
    // 点击进度条时改变播放进度
    ctrlParentChange(e) {
      // 使用dataset来保证控制的是含有data-parent的ctrlParent
      let target = e.target.dataset.father ? e.target : e.target.parentNode
      // 减9是去掉小圆圈的宽度,避免超出
      let size = parseInt(window.getComputedStyle(target).width) - 9
      // 获取data-parent到window的距离getRootOffset(target)
      // moveSize代表播放进度条要移动到的距离
      this.moveSize = e.pageX - getRootOffset(target).x
      let finalChange = (this.moveSize / size) * this.duration
      this[CHANGE_CURRENT_TIME](finalChange)
      this.$emit('change-current-time', finalChange)
    },
    // 拖动进度条的事件
    dragProgress() {
      let that = this
      this.$refs.ctrl.addEventListener('mousedown', function(e) {
        that.startX = e.pageX - this.offsetLeft
        document.onmousemove = function(e) {
          that.moveSize = e.pageX - that.startX
          // 边界问题处理
          if (e.pageX - that.startX < 0) {
            that.moveSize = 0
          }
          if (e.pageX - that.startX > that.maxSize) {
            that.moveSize = that.maxSize
          }
          // 改变控件的大小和位置
          that.$refs.current.style.width = that.$refs.ctrl.style.left = that.moveSize + 'px'
          document.onmouseup = function() {
            // 改变vuex音乐的播放进度
            let val = (that.moveSize / that.maxSize) * that.duration
            that[CHANGE_CURRENT_TIME](val)
            that.$emit('change-current-time', val)
            // 移除事件
            document.onmousemove = ''
            document.onmouseup = ''
          }
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.music-wrap {
  display: flex;
  justify-content: space-around;
  width: 100%;
  .music-ctrls {
    position: absolute;
    top: -3px;
    height: 3px;
    width: 100%;
    background: #d9d9d9;
    .current {
      position: absolute;
      left: 0;
      height: 3px;
      width: 0;
      background: var(--green);
    }
    .ctrl {
      position: absolute;
      left: 0;
      top: -3px;
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: var(--green);
    }
  }

  header {
    width: 100%;
    height: 100%;
  }
}
</style>
