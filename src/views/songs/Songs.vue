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
      <li class="list-item">
        <div class="head-song">
          <span class="iconfont icon-collect"></span>
          <span class="icon-name">旧城之王(live)</span>
        </div>
        <div class="head-person">
          木马
        </div>
        <div class="head-collect">乐队</div>
        <div class="head-time">05:18</div>
      </li>
      <li class="list-item">
        <div class="head-song">
          <span class="iconfont icon-collect"></span>
          <span class="icon-name">旧城之王(live)</span>
        </div>
        <div class="head-person">
          木马
        </div>
        <div class="head-collect">乐队</div>
        <div class="head-time">05:18</div>
      </li>
    </ul>
  </section>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'Songs',
  data() {
    return {
      list: ['歌曲', '视频', '专辑', '歌单', '歌词', '歌手', '用户'],
    }
  },
  components: {
    NavBar,
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
    //  360px 130px 180px 160px
    display: flex;
    justify-content: space-between;
    padding-left: 36px;
    span {
      font-size: 12px;
      line-height: 36px;
    }
    .head-song {
      width: 360px;
    }
    .head-person {
      width: 130px;
    }
    .head-collect {
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
      .head-song {
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
