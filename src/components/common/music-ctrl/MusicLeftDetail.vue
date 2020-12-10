<template>
  <section id="wrap">
    <div class="pic">
      <img src="~assets/img/bird.jpg" alt="" />
    </div>
    <div class="detail">
      <div class="detail-top">
        <span class="top-title">旧城之王</span>
        <span class="top-author"> - 木马</span>
      </div>
      <div class="detail-bottom">
        <span class="iconfont icon-collect"></span>
        <span class="iconfont icon-dowmload"></span>
        <span class="iconfont icon-more"></span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MusicLeftDetail',
  data() {
    return {}
  },
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
      span {
        margin: 0 8px;
      }
    }
  }
}
</style>
