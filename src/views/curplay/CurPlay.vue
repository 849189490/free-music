<template>
  <section class="cur-wrap">
    <songs-list></songs-list>
  </section>
</template>

<script>
/**
 * @description : 当前播放列表
 * @prop { Number } :
 *
 */
import SongsList from 'components/common/songs-list/SongsList'
export default {
  name: 'CurPlay',
  data() {
    return {
      path: '/curplay',
    }
  },
  components: {
    SongsList,
  },
}
</script>

<style lang="scss" scoped>
.cur-wrap {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
