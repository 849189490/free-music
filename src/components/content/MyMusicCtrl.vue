<template>
  <section class="ctrl-wrap">
    <music-ctrl @change-current-time="changeCurrentTime">
      <music-left-detail slot="left" />
      <music-ctrl-main :cneedToChange="needToChange" slot="center" />
      <music-right-detail slot="right" />
    </music-ctrl>
  </section>
</template>

<script>
import MusicCtrl from 'components/common/music-ctrl/MusicCtrl'
import MusicCtrlMain from 'components/common/music-ctrl/MusicCtrlMain'
import MusicRightDetail from 'components/common/music-ctrl/MusicRightDetail'
import MusicLeftDetail from 'components/common/music-ctrl/MusicLeftDetail'
export default {
  name: 'MyMusicCtrl',
  components: {
    MusicCtrl,
    MusicCtrlMain,
    MusicRightDetail,
    MusicLeftDetail,
  },
  data() {
    return {
      needToChange: 0,
    }
  },
  methods: {
    changeCurrentTime(val) {
      this.needToChange = val
    },
  },
}
</script>

<style lang="scss" scoped>
.ctrl-wrap {
  min-width: 850px;
  min-height: 67px;
  width: 100%;
  height: 100%;
  background: var(--gray);
}
</style>
