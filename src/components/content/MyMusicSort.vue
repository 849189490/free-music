<template>
  <section class="wrap">
    <music-sort>
      <music-sort-item>
        <span slot="title">在线音乐</span>
        <div slot="content">
          <p data-check="song" :class="{ 'list-checked': listChecked === 'song' }">
            <span class="iconfont icon-song"></span>
            <span>音乐馆</span>
          </p>
          <p :class="{ 'list-checked': listChecked === 'video' }" data-check="video">
            <span class="iconfont icon-video"></span>
            <span>视频</span>
          </p>
          <p :class="{ 'list-checked': listChecked === 'audio' }" data-check="audio">
            <span class="iconfont icon-audio"></span>
            <span>电台</span>
          </p>
        </div>
      </music-sort-item>
      <music-sort-item>
        <span slot="title">我的音乐</span>
        <div slot="content">
          <p :class="{ 'list-checked': listChecked === 'collect' }" data-check="collect">
            <span class="iconfont icon-collect"></span>
            <span>我喜欢</span>
          </p>
          <p :class="{ 'list-checked': listChecked === 'computer' }" data-check="computer">
            <span class="iconfont icon-computer"></span>
            <span>本地和下载</span>
          </p>
          <p :class="{ 'list-checked': listChecked === 'history' }" data-check="history">
            <span class="iconfont icon-history"></span>
            <span>播放历史</span>
          </p>
          <p :class="{ 'list-checked': listChecked === 'list' }" data-check="list">
            <span class="iconfont icon-list"></span>
            <span>试听列表</span>
          </p>
        </div>
      </music-sort-item>
    </music-sort>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import MusicSort from 'components/common/music-sort/MusicSort'
import MusicSortItem from 'components/common/music-sort/MusicSortItem'
export default {
  name: 'MyMusicSort',
  components: {
    MusicSort,
    MusicSortItem,
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(['listChecked']),
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.wrap {
  background: var(--gray);
}
</style>
