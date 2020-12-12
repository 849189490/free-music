<template>
  <section class="like-wrap">
    <h2>我喜欢</h2>
    <div class="search-nav">
      <nav-bar :clist="list" :size="35"></nav-bar>
    </div>
    <music-btns></music-btns>
    <songs-list></songs-list>
  </section>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import MusicBtns from 'components/content/music-btns/MusicBtns'
import SongsList from 'components/common/songs-list/SongsList'
export default {
  name: 'Like',
  data() {
    return {
      path: '/like',
      list: ['歌曲', '歌单', '专辑', '主播电台', '视频'],
    }
  },
  components: {
    NavBar,
    MusicBtns,
    SongsList,
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.like-wrap {
  width: 100%;
  height: 100%;
  overflow: auto;
  h2 {
    font-size: 32px;
    color: #000;
    line-height: 84px;
    padding: 0 40px;
  }
  .search-nav {
    padding: 14px 36px 0;
  }
}
</style>
