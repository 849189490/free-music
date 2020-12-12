<template>
  <section class="shop-wrap">
    <h2>音乐馆</h2>
    <nav-bar></nav-bar>
    <div class="swiper">
      <my-swiper></my-swiper>
    </div>
  </section>
</template>

<script>
/**
 * @description : 首页音乐馆
 * @prop { Number } :
 *
 */
import { _localChooseList } from 'local/localstorage'
import NavBar from 'components/common/navbar/NavBar'
import MySwiper from 'components/content/MySwiper'
export default {
  name: 'Shop',
  components: {
    NavBar,
    MySwiper,
  },
  data() {
    return {}
  },
  created() {},
}
</script>

<style lang="scss" scoped>
.shop-wrap {
  width: 100%;
  height: 100%;
  padding: 0 40px;
  h2 {
    font-size: 32px;
    color: #000;
    line-height: 84px;
  }
  .swiper {
    min-height: 200px;
  }
}
</style>
