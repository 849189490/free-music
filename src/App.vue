<template>
  <div id="app">
    <div class="left-ctrl">
      <my-music-sort></my-music-sort>
    </div>
    <div class="content">
      <div class="top-nav">
        <my-music-header></my-music-header>
      </div>
      <div class="middle-content">
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>
      <div class="bottom-ctrl">
        <my-music-ctrl></my-music-ctrl>
      </div>
    </div>
  </div>
</template>
<script>
import MyMusicHeader from 'components/content/MyMusicHeader'
import MyMusicSort from 'components/content/MyMusicSort'
import MyMusicCtrl from 'components/content/MyMusicCtrl'

export default {
  name: 'App',
  components: {
    MyMusicHeader,
    MyMusicSort,
    MyMusicCtrl,
  },
}
</script>
<style lang="scss">
@import url('~assets/css/base.css');
@import url('~assets/icons/iconfont.css');
.iconfont {
  font-size: 18px;
}
#app {
  display: flex;
  position: relative;
  width: 1136px;
  height: 778px;
  margin: 50px auto;
  .left-ctrl {
    width: 200px;
  }
  .content {
    width: 936px;
    .bottom-ctrl {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 936px;
      height: 67px;
    }
    .middle-content {
      width: 936px;
      height: 646px;
    }
  }
}
</style>
