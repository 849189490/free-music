<template>
  <section class="off-wrap">
    <span class="avatar">
      <img src="~assets/img/avatar.jpg" alt="" />
    </span>
    <span>coderfly</span>
    <span class="iconfont icon-push"></span>
    <span class="iconfont icon-enlarge"></span>
    <span class="iconfont icon-off"></span>
  </section>
</template>

<script>
export default {
  name: 'TakeOff',
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.off-wrap {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 200px;
  min-height: 60px;
  width: 100%;
  height: 100%;
  padding-right: 26px;
  .avatar {
    overflow: hidden;
    cursor: pointer;
    img {
      width: 20px;
      height: 20px;
      border-radius: 50%;
    }
  }
  span {
    font-size: 12px;
    margin: 0 7px;
    cursor: pointer;
  }
}
</style>
