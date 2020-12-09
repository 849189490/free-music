<template>
  <section class="item-wrap">
    <h2>
      <slot name="title"><span>在线音乐</span></slot>
      <slot name="ctrl"><span> </span></slot>
    </h2>
    <section class="list" @click="submitChange">
      <slot name="content"> </slot>
    </section>
  </section>
</template>

<script>
import { CHANGE_LIST_CHECKED } from 'store/consts.js'
import { mapMutations } from 'vuex'
export default {
  name: 'MusicSortItem',
  computed: {},
  methods: {
    ...mapMutations([CHANGE_LIST_CHECKED]),
    submitChange(e) {
      // 用事件委托的方式去显示选中的为了避免选不到需要的dataset属性,做了兼容处理
      this[CHANGE_LIST_CHECKED](
        e.target.dataset.check || e.target.parentNode.dataset.check || e.target.parentNode.parentNode.dataset.check
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.list-checked {
  color: #d2f6ee !important;
  background: #1ece9b !important;
}
.item-wrap {
  padding: 12px 23px 0 17px;
  h2 {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    line-height: 46px;
    color: #787878;
    font-weight: normal;
  }
  .list {
    p {
      width: 160px;
      height: 30px;
      box-sizing: border-box;
      padding-left: 14px;
      line-height: 30px;
      color: #303030;
      // color: #d2f6ed;
      margin-bottom: 10px;
      border-radius: 5px;
      span {
        &:last-child {
          margin-left: 8px;
        }
      }
    }
  }
}
</style>
