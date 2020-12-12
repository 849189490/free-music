<template>
  <section class="songlist-wrap">
    <div class="list-head">
      <span class="head-song">歌曲</span>
      <span class="head-person">歌手</span>
      <span class="head-album">专辑</span>
      <span class="head-time">时长</span>
    </div>
    <div class="list-empty" v-if="filterSongList.length === 0">
      空空如也
    </div>
    <ul v-else class="search-list">
      <li v-for="(item, index) of filterSongList" :key="index + item.id" class="list-item">
        <div class="head-song" @click.stop="headSongClick">
          <div class="head-song-left">
            <span :class="{ red: item.collect }" :data-collect="item.id" class="iconfont icon-collect"></span>
            <span class="icon-name">{{ item.name }}</span>
          </div>
          <div class="head-song-right">
            <span
              :data-id="item.id"
              :data-duration="item.duration"
              :data-collected="item.collect"
              class="iconfont icon-play"
            ></span>
            <span class="iconfont icon-add"></span>
            <span class="iconfont icon-dowmload"></span>
            <span class="iconfont icon-more"></span>
          </div>
        </div>
        <div class="head-person" v-html="fullArtists(item.artists)"></div>
        <div class="head-album">{{ item.album }}</div>
        <div class="head-time">{{ item.duration | timeFilter }}</div>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { CHANGE_FILTER_SONG_LIST } from 'store/consts'
import { _localKeeper } from 'local/localstorage'
import { mixCtrlStore } from 'common/mixin'
import { ASYNC_NOW_SONG } from 'store/consts'
export default {
  name: 'SongsList',
  data() {
    return {}
  },
  created() {},
  updated() {},
  mixins: [mixCtrlStore],
  filters: {
    timeFilter(val) {
      val /= 1000
      let second = parseInt(val % 60)
      second = second > 9 ? second : '0' + second
      let minute = parseInt(val / 60)
      minute = minute > 9 ? minute : '0' + minute
      return minute + ' : ' + second
    },
  },
  methods: {
    ...mapMutations([CHANGE_FILTER_SONG_LIST]),
    headSongClick(e) {
      if (e.target.dataset.id) {
        // 发送请求,开始放歌
        this[ASYNC_NOW_SONG]({
          id: e.target.dataset.id,
          duration: e.target.dataset.duration,
          collect: e.target.dataset.collected,
        })
      }
      if (e.target.dataset.collect) {
        let item = this.filterSongList.find(val => val.id == e.target.dataset.collect)
        _localKeeper.setItem('like', item).then(res => {
          this[CHANGE_FILTER_SONG_LIST](res)
        })
      }
    },
    fullArtists(val) {
      // 用span包裹,data-id记录歌手id,后续可以完善歌手索引
      return val
        .reduce((pre, cur) => {
          return `${pre}<span data-id="${cur.id}">${cur.name}</span> / `
        }, '')
        .slice(0, -2)
    },
  },
}
</script>

<style lang="scss" scoped>
.songlist-wrap {
  .list-empty {
    font-size: 18px;
    line-height: 66px;
    text-align: center;
    word-spacing: 16px;
    letter-spacing: 16px;
  }
  .list-head,
  .list-item {
    display: flex;
    justify-content: space-between;
    padding-left: 36px;
    overflow: hidden;
    white-space: nowrap;
    span {
      font-size: 12px;
      line-height: 36px;
    }
    .head-song {
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      width: 360px;
    }
    .head-person {
      overflow: hidden;
      width: 130px;
    }
    .head-album {
      overflow: hidden;
      width: 180px;
    }
    .head-time {
      width: 160px;
    }
  }
  .search-list {
    // 52px 14px
    font-size: 14px;
    line-height: 52px;
    color: #000;
    li {
      &:hover .head-song > .head-song-right {
        display: flex;
      }
      div {
        flex-grow: 0;
      }
      .head-song {
        .head-song-left {
          width: 200px;
          .red {
            color: #f00;
          }
        }
        .head-song-right {
          display: none;
          align-items: center;
          justify-content: flex-end;
          width: 160px;
          span {
            padding: 0 3px;
            color: #878787;
            font-size: 14px;
            &:hover {
              color: var(--green);
            }
          }
        }
        span {
          font-size: 14px;
        }
        .icon-name {
          margin-left: 6px;
        }
      }
    }
  }
}
</style>
