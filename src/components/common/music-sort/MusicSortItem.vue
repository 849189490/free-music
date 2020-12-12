<template>
  <section class="item-wrap">
    <h2>
      <slot name="title"><span>在线音乐</span></slot>
      <slot name="ctrl"><span>&nbsp;</span></slot>
    </h2>
    <section class="list" @click="submitChange">
      <slot name="content"><span>&nbsp;</span></slot>
    </section>
  </section>
</template>

<script>
/**
 * @description : 发射事件给父级, 可以将绑定的data-url发射给父级
 * @prop { function } : submitChange
 *
 */
import { mapMutations } from 'vuex'
import { CHANGE_LIST_CHECKED } from 'store/consts.js'
export default {
  name: 'MusicSortItem',
  computed: {},
  methods: {
    ...mapMutations([CHANGE_LIST_CHECKED]),
    submitChange(e) {
      // 用事件委托的方式去显示选中的为了避免选不到需要的dataset属性,做了兼容处理
      let check =
        e.target.dataset.check || e.target.parentNode.dataset.check || e.target.parentNode.parentNode.dataset.check
      if (check) {
        this[CHANGE_LIST_CHECKED](check)
      }
      // 与路由形成映射关系
      let url = e.target.dataset.url || e.target.parentNode.dataset.url || e.target.parentNode.parentNode.dataset.url
      // url !== this.$route.path避免用户重复点击
      if (url && url !== this.$route.path) {
        this.$emit('change-url', url)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.list-checked {
  color: #d2f6ee !important;
  background: var(--green) !important;
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
