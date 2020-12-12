<template>
  <section class="songs-wrap myscroll">
    <div class="search-key">
      搜索:"<span>{{ $route.params.song }}</span
      >"
    </div>
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
  name: 'Songs',
  data() {
    return {
      path: '/songs',
      list: ['歌曲', '视频', '专辑', '歌单', '歌词', '歌手', '用户'],
    }
  },
  components: {
    NavBar,
    MusicBtns,
    SongsList,
  },
  computed: {
    // 歌名 name artists.name
    // 歌手 artists[0].name 遍历 artists
    // 是否有mv artists.mvid 0无, 1有
    // 专辑 album.name
    // 编号 id
    // 时长 duration
  },
}
</script>

<style lang="scss" scoped>
.songs-wrap {
  width: 100%;
  height: 100%;
  overflow: auto;
  .search-key {
    height: 60px;
    font-size: 16px;
    color: #777;
    line-height: 60px;
    padding-left: 36px;
    background: #ededed;
    span {
      font-weight: bold;
    }
  }
  .search-nav {
    padding: 14px 36px 0;
  }
}
</style>
