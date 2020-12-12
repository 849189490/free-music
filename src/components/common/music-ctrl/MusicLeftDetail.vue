<template>
  <section id="wrap">
    <div class="pic">
      <img :src="nowSong.img" alt="" />
    </div>
    <div class="detail">
      <div class="detail-top">
        <span class="top-title">{{ nowSong.name }}</span>
        <span class="top-author"> - {{ nowSong.fullArtists }}</span>
      </div>
      <div class="detail-bottom">
        <span  :data-collect="nowSong.id" :class="{'red': nowSong.collect}" class="iconfont icon-collect"></span>
        <a
          target="_blank"
          class="iconfont icon-dowmload"
          :href="nowSong.url"
          :download="nowSong.name + '-' + nowSong.fullArtists"
        ></a>
        <span class="iconfont icon-more"></span>
      </div>
    </div>
  </section>
</template>

<script>
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
  name: 'MusicLeftDetail',
  data() {
    return {}
  },
  mixins: [mixCtrlStore],
  filters: {},
}
</script>

<style lang="scss" scoped>
#wrap {
  display: flex;
  justify-content: space-between;
  width: 370px;
  height: 67px;
  box-sizing: border-box;
  padding: 12px 40px 0;
  .pic {
    width: 40px;
    height: 40px;
    border-radius: 4px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .detail {
    width: 240px;
    height: 40px;
    .detail-top {
      line-height: 20px;
      margin-left: 8px;
      .top-title {
        color: #000;
      }
      .top-author {
        color: #8b8b8b;
      }
    }
    .detail-bottom {
      display: flex;
      line-height: 20px;
      font-size: 16px;
      .red {
        color: #f00;
      }
      span,
      a {
        margin: 0 8px;
      }
    }
  }
}
</style>
