<template>
  <section class="header-wrap">
    <div class="search">
      <main-search>
        <div class="history" slot="left">
          <span :class="{ 'green-span': backGreen }" class="iconfont icon-back" @click="backRoute"></span>
          <span :class="{ 'green-span': goGreen }" class="iconfont icon-go-copy" @click="goRoute"></span>
        </div>
        <span class="iconfont icon-song myicon" slot="right"></span>
      </main-search>
    </div>
    <div class="shut">
      <take-off></take-off>
    </div>
  </section>
</template>

<script>
import MainSearch from 'components/common/search/MainSearch'
import TakeOff from 'components/common/take-off/TakeOff'
export default {
  name: 'MusicHeader',
  components: {
    MainSearch,
    TakeOff,
  },
  data() {
    return {
      backGreen: true,
      goGreen: true,
    }
  },
  methods: {
    backRoute() {
      this.$router.go(-1)
      console.log(this.$router)
      console.log(this.$route)
      console.log(history)
    },
    goRoute() {
      this.$router.go(1)
      console.log(this.$router)
      console.log(this.$route)
      console.log(history)
    },
  },
}
</script>

<style lang="scss" scoped>
.header-wrap {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 62px;
  background: var(--gray);
  .green-span {
    &:hover {
      cursor: pointer;
      color: var(--green);
    }
  }
  .search {
    width: 360px;
    .history {
      width: 50px;
    }
    .myicon {
      text-align: right;
      width: 30px;
    }
  }
  .shut {
    width: 550px;
  }
}
</style>
