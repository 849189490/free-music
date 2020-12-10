<template>
  <section class="songs-wrap myscroll">
    <div class="search-key">搜索:"<span>旧城之王 木马</span>"</div>
    <div class="search-nav">
      <nav-bar :clist="list" :size="35"></nav-bar>
    </div>
    <div class="search-btn">
      <div class="btn-play">
        <span class="iconfont icon-play"></span>
        <span>播放全部</span>
      </div>
      <div>
        <span class="iconfont icon-dowmload"></span>
        <span>下载</span>
      </div>
      <div>
        <span class="iconfont icon-list"></span>
        <span>批量操作</span>
      </div>
    </div>
    <div class="list-head">
      <span class="head-song">歌曲</span>
      <span class="head-person">歌手</span>
      <span class="head-collect">专辑</span>
      <span class="head-time">时长</span>
    </div>
    <ul class="search-list">
      <li v-for="item of songsList" :key="item.id" class="list-item">
        <div class="head-song" @click.stop="headSongClick">
          <div class="head-song-left">
            <span class="iconfont icon-collect"></span>
            <span class="icon-name">{{ item.name || item.artists.name }}</span>
          </div>
          <div class="head-song-right">
            <span :data-id="item.id" class="iconfont icon-play"></span>
            <span class="iconfont icon-add"></span>
            <span class="iconfont icon-dowmload"></span>
            <span class="iconfont icon-more"></span>
          </div>
        </div>
        <div class="head-person" v-html="fullArtists(item.artists)"></div>
        <div class="head-collect">{{ item.album.name }}</div>
        <div class="head-time">{{ item.duration | timeFilter }}</div>
      </li>
    </ul>
  </section>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import { mixCtrlStore } from 'common/mixin'
import {
  CHANGE_LIST_CHECKED,
  CHANGE_LOOP_INDEX,
  CHANG_EPAUSE,
  BOOL_PAUSE,
  CHANGE_CURRENT_TIME,
  CHANGE_DURATION_TIME,
  CHANGE_MUTED,
  ASYNC_NOW_SONG,
} from 'store/consts'
export default {
  name: 'Songs',
  data() {
    return {
      list: ['歌曲', '视频', '专辑', '歌单', '歌词', '歌手', '用户'],
    }
  },
  mixins: [mixCtrlStore],
  components: {
    NavBar,
  },
  computed: {
    // 歌名 name artists.name
    // 歌手 artists[0].name 遍历 artists
    // 是否有mv artists.mvid 0无, 1有
    // 专辑 album.name
    // 编号 id
    // 时长 duration
  },
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
    headSongClick(e) {
      if (e.target.dataset.id) {
        // 发送请求,开始放歌
        this[ASYNC_NOW_SONG](e.target.dataset.id).then(() => {
          this[BOOL_PAUSE](true)
          this[CHANGE_CURRENT_TIME](0)
        })
      }
    },
    fullArtists(val) {
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
.songs-wrap {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
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
  .search-btn {
    display: flex;
    align-items: center;
    height: 90px;
    padding-left: 36px;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 110px;
      height: 32px;
      margin-right: 12px;
      border-radius: 16px;
      background: #e1e1e1;
      cursor: pointer;
      span {
        margin: 0 3px;
      }
    }
    .btn-play {
      background: var(--green);
      color: #eefbf8;
    }
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
    .head-collect {
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
