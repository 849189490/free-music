<template>
  <section class="wrap">
    <h1>FLY音乐</h1>
    <div class="wrap-scroll myscroll">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MusicSort',
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.wrap {
  background-color: #f0f0f0;
  // 解除BFC限制
  display: flex;
  flex-wrap: wrap;
  h1 {
    width: 200px;
    height: 62px;
    font-size: 16px;
    padding-top: 23px;
    padding-left: 68px;
    background: url('~assets/img/logo.png') no-repeat 33px 20px;
    background-size: 24px 24px;
  }
  .wrap-scroll {
    height: 696px;
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>
