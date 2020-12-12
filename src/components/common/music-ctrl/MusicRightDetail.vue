<template>
  <section id="wrap">
    <div class="wrap-time">
      <span>{{ currentTime | timeFilter }}</span>
      <span> / </span>
      <span>{{ duration | timeFilter }}</span>
      <span> 词</span>
    </div>
    <div class="wrap-list iconfont icon-list">{{ readyToPlay.length }}</div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'MusicRightDetail',
  data() {
    return {}
  },
  computed: {
    ...mapState(['currentTime', 'duration', 'readyToPlay']),
  },
  filters: {
    timeFilter(val) {
      val = parseInt(val)
      let second = parseInt(val % 60)
      second = second > 9 ? second : '0' + second
      let minute = parseInt(val / 60)
      minute = minute > 9 ? minute : '0' + minute
      return minute + ' : ' + second
    },
  },
}
</script>

<style lang="scss" scoped>
#wrap {
  display: flex;
  justify-content: flex-end;
  width: 300px;
  height: 67px;
  box-sizing: border-box;
  padding: 15px 30px 0;
  span {
    font-size: 14px;
    line-height: 40px;
    color: #8e8e8e;
  }
  .wrap-list {
    margin-left: 10px;
    font-size: 14px;
    line-height: 40px;
    color: #8e8e8e;
  }
}
</style>
