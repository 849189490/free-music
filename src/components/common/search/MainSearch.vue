<template>
  <section class="search-wrap">
    <slot name="left"><span> </span></slot>
    <div class="center-search">
      <input class="iconfont icon-search" type="text" :placeholder="holder" />
    </div>
    <slot name="right"><span> </span></slot>
  </section>
</template>

<script>
export default {
  name: 'MainSearch',
  data() {
    return {
      holder: '\ue60d 搜索音乐',
    }
  },
}
</script>

<style lang="scss" scoped>
.search-wrap {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  .center-search {
    flex-grow: 1;
    min-width: 180px;
    height: 34px;
    input {
      width: 100%;
      height: 34px;
      font-size: 14px;
      padding: 0 20px;
      border-radius: 17px;
      background: #e0e0e0;
      border: none;
      &::placeholder {
        content: '&#xe60d;';
      }
    }
  }
}
</style>
