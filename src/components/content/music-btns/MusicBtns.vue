<template>
  <section class="btn-wrap">
    <div class="search-btn">
      <fly-btn @click.native="playAll" :bg="'#1ed3ac'" :color="'#eefbf8'">
        <span slot="img" class="iconfont icon-play"></span>
        <span slot="btn">播放全部</span>
      </fly-btn>
      <fly-btn>
        <span slot="img" class="iconfont icon-dowmload"></span>
        <span slot="btn">下载</span>
      </fly-btn>
      <fly-btn>
        <span slot="img" class="iconfont icon-list"></span>
        <span slot="btn">批量操作</span>
      </fly-btn>
    </div>
  </section>
</template>

<script>
import { CHANGE_READY_TO_PLAY } from 'store/consts'
import { mapState, mapMutations } from 'vuex'
import FlyBtn from 'components/common/btn/FlyBtn'
export default {
  name: 'MusicBtns',
  data() {
    return {}
  },
  components: {
    FlyBtn,
  },
  computed: {
    ...mapState(['readyToPlay']),
  },
  methods: {
    ...mapMutations([CHANGE_READY_TO_PLAY]),
    playAll() {
      this[CHANGE_READY_TO_PLAY]()
    },
  },
}
</script>

<style lang="scss" scoped>
.btn-wrap {
  .search-btn {
    display: flex;
    align-items: center;
    height: 90px;
    padding-left: 36px;
    .btn-play {
      background: var(--green);
      color: #eefbf8;
    }
  }
}
</style>
