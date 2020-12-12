<template>
  <section ref="btn" class="fly-btn-wrap">
    <slot name="img"><span class="iconfont icon-list"></span></slot>
    <slot name="btn"><span>批量操作</span></slot>
  </section>
</template>

<script>
/**
 * @description : 插槽中必须放span标签
 * @width { Number } : 按钮的宽
 * @height { Number } : 按钮的高
 * @bg { String } : 按钮的颜色
 * @color { String } : 文字的颜色
 *
 */
export default {
  name: 'FlyBtn',
  data() {
    return {}
  },
  mounted() {
    this.btnInit()
  },
  props: {
    width: {
      type: Number,
      default: 110,
    },
    height: {
      type: Number,
      default: 32,
    },
    bg: {
      type: String,
      default: '#e1e1e1',
    },
    color: {
      type: String,
      default: '#666',
    },
  },
  methods: {
    btnInit() {
      this.$refs.btn.style.backgroundColor = this.bg
      this.$refs.btn.style.color = this.color
    },
  },
}
</script>

<style lang="scss" scoped>
.fly-btn-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 32px;
  margin-right: 12px;
  border-radius: 16px;
  background: #e1e1e1;
  cursor: pointer;
  span {
    margin: 0 3px;
  }
}
</style>
