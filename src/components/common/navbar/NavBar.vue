<template>
  <section class="nav-wrap">
    <nav ref="nav">
      <a
        v-for="item of clist"
        :class="{ 'a-bottom': item === checked }"
        :key="item"
        @click="changeChecked(item)"
        href="javascript:;"
        >{{ item }}</a
      >
    </nav>
  </section>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    clist: {
      type: Array,
      default() {
        return ['精选', '有声电台', '排行', '歌手', '分类歌单', '数字专辑', '手机专享']
      },
    },
    size: {
      type: Number,
      default: 54,
    },
  },
  data() {
    return {
      checked: '精选',
    }
  },
  mounted() {
    this.navInit()
  },
  methods: {
    changeChecked(item) {
      this.checked = item
    },
    // 初始化nav
    navInit() {
      this.checked = this.clist[0]
      Array.from(this.$refs.nav.children).forEach(item => {
        item.style.marginRight = this.size + 'px'
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.nav-wrap {
  nav {
    display: flex;
    a {
      position: relative;
      font-size: 14px;
      padding-bottom: 9px;
      margin-right: 54px;
      &:hover {
        color: var(--green);
      }
    }
    .a-bottom {
      color: var(--green);
      &::after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: -3px;
        display: block;
        width: 24px;
        height: 3px;
        background: var(--green);
        transform: translateX(-50%);
      }
    }
  }
}
</style>
