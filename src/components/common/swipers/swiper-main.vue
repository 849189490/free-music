<template>
  <section class="wrap">
    <ul class="wrap-scroll">
      <li></li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'SwiperMain',
  props: {},
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  overflow-x: scroll;
  .wrap-scroll {
    width: 1000%;
    height: 170px;
    background: #000;
    li {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    }
  }
}
</style>
