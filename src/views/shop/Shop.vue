<template>
  <section id="wrap">
    <h2>音乐馆</h2>
    <nav-bar></nav-bar>
  </section>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'Shop',
  components: {
    NavBar,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
#wrap {
  width: 100%;
  height: 100%;
  padding: 0 40px;
  h2 {
    font-size: 32px;
    color: #000;
    line-height: 84px;
  }
}
</style>
