<template>
  <section class="wrap">
    <music-sort>
      <music-sort-item @change-url="changeUrl">
        <span slot="title">在线音乐</span>
        <div slot="content">
          <p data-check="song" :class="{ 'list-checked': listChecked === 'shop' }" data-url="/shop">
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
      <music-sort-item @change-url="changeUrl">
        <span slot="title">我的音乐</span>
        <div slot="content">
          <p :class="{ 'list-checked': listChecked === 'collect' }" data-check="collect" data-url="/like">
            <span class="iconfont icon-collect"></span>
            <span>我喜欢</span>
          </p>
          <p :class="{ 'list-checked': listChecked === 'computer' }" data-check="computer">
            <span class="iconfont icon-computer"></span>
            <span>本地和下载</span>
          </p>
          <p :class="{ 'list-checked': listChecked === 'history' }" data-check="history" data-url="/history">
            <span class="iconfont icon-history"></span>
            <span>播放历史</span>
          </p>
          <p :class="{ 'list-checked': listChecked === 'list' }" data-check="list">
            <span class="iconfont icon-list"></span>
            <span>试听列表</span>
          </p>
          <p :class="{ 'list-checked': listChecked === 'curplay' }" data-check="curplay" data-url="/curplay">
            <span class="iconfont icon-list"></span>
            <span>当前播放</span>
          </p>
        </div>
      </music-sort-item>
    </music-sort>
  </section>
</template>

<script>
import { _localKeeper } from 'local/localstorage'
import { CHANGE_FILTER_SONG_LIST } from 'store/consts.js'
import { mapState, mapMutations } from 'vuex'
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
    ...mapState(['listChecked', 'readyToPlay']),
  },
  methods: {
    ...mapMutations([CHANGE_FILTER_SONG_LIST]),
    changeUrl(url) {
      this._localChooseList(url)
    },

    // // 当前播放列表
    // 我喜欢
    // 歌单
    // 让本地缓存与路由做个映射
    // 所有缓存相关的函数的命名统一_func
    _localChooseList(url) {
      switch (url) {
        // case '/': localKeeper.get()
        case '/shop': {
          this.$router.push('/shop')
          break
        }
        case '/like': {
          this[CHANGE_FILTER_SONG_LIST](_localKeeper.getItem('like'))
          this.$router.push('/like')
          break
        }
        case '/curplay': {
          this[CHANGE_FILTER_SONG_LIST](this.readyToPlay)
          this.$router.push('/curplay')
          break
        }
        case '/history': {
          // this[CHANGE_FILTER_SONG_LIST](_localKeeper.getItem('history'))
          this.$router.push('/history')
          break
        }
        default: {
          console.log(url)
          break
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.wrap {
  background: var(--gray);
}
</style>
