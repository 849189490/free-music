<template>
  <section class="search-wrap">
    <slot name="left"><span>&nbsp;</span></slot>
    <div class="center-search">
      <input
        @blur="deactiveBtn"
        @focus="activeBtn"
        @keyup.enter="searchSongs"
        class="iconfont icon-search"
        type="text"
        v-model="inpVal"
        :placeholder="holder"
      />
      <div ref="btn" @click="searchSongs" class="search-btn iconfont icon-search"></div>
    </div>
    <slot name="right"><span>&nbsp;</span></slot>
  </section>
</template>

<script>
import { ASYNC_SEARCH_SONGS } from 'store/consts'
import { searchMusic } from 'network/index/main'

import { mapActions } from 'vuex'
export default {
  name: 'MainSearch',
  data() {
    return {
      holder: '\ue60d 搜索音乐',
      inpVal: '',
    }
  },
  methods: {
    ...mapActions([ASYNC_SEARCH_SONGS]),
    activeBtn() {
      this.$refs.btn.style.visibility = 'visible'
      this.holder = ''
    },
    deactiveBtn() {
      if (!this.inpVal) {
        this.$refs.btn.style.visibility = 'hidden'
        this.holder = '\ue60d 搜索音乐'
      }
    },
    searchSongs() {
      this.inpVal && this[ASYNC_SEARCH_SONGS](this.inpVal)
      // 当前的路径中是否含有/songs,如果有就不需要跳转,直接改变数据即可
      let curRoute = this.$route.fullPath.indexOf('/songs') === -1
      if (curRoute) {
        this.$router.push(`/songs/${this.inpVal}`)
      } else {
        this.$router.replace(`/songs/${this.inpVal}`)
      }
    },
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
    position: relative;
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
    .search-btn {
      visibility: hidden;
      position: absolute;
      right: 6px;
      top: 9px;
      font-size: 14px;
      cursor: pointer;
    }
  }
}
</style>
