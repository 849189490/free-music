<template>
  <section class="my-wrap">
    <div class="swiper-main">
      <swiper-main></swiper-main>
    </div>
    <div class="swiper-ctrl">
      <swiper-ctrl></swiper-ctrl>
    </div>
    <div class="swiper-circle">
      <swiper-circle></swiper-circle>
    </div>
  </section>
</template>

<script>
import SwiperMain from 'components/common/swipers/swiper-main'
import SwiperCtrl from 'components/common/swipers/swiper-ctrl'
import SwiperCircle from 'components/common/swipers/swiper-circle'
export default {
  name: 'MySwiper',
  data() {
    return {}
  },
  components: {
    SwiperMain,
    SwiperCtrl,
    SwiperCircle,
  },
}
</script>

<style lang="scss" scoped>
.my-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  .swiper-main {
    width: 100%;
    min-height: 170px;
  }
  .swiper-ctrl {
    position: absolute;
    top: 0;
    width: 100%;
    height: 40px;
  }
  .swiper-circle {
    width: 100%;
    min-height: 20px;
  }
}
</style>
