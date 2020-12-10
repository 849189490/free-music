<template>
  <section id="wrap">
    <div class="wrap-time">
      <span>00:24</span>
      <span> / </span>
      <span>03:33</span>
      <span> 词</span>
    </div>
    <div class="wrap-list iconfont icon-list">96</div>
  </section>
</template>

<script>
export default {
  name: 'MusicRightDetail',
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
#wrap {
  display: flex;
  justify-content: flex-end;
  width: 300px;
  height: 67px;
  box-sizing: border-box;
  padding: 15px 30px 0;
  span {
    font-size: 14px;
    line-height: 40px;
    color: #8e8e8e;
  }
  .wrap-list {
    margin-left: 10px;
    font-size: 14px;
    line-height: 40px;
    color: #8e8e8e;
  }
}
</style>
