<template>
  <img :src="flagSrc" :class="{ 'flag-round': round }" class="flag-icon" alt="flag" />
</template>

<script>
/*
|---------------------------------------------------------------------
| Flag Icon Component
|---------------------------------------------------------------------
|
| 根据国家代码显示相应的国旗
|
*/
export default {
  props: {
    // 国家 ISO 代码
    flag: {
      type: String,
      default: 'us'
    },
    // 圆形或方形国旗
    round: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    flagSrc() {
      // 使用公共资源目录中的图片
      return `/images/flags/${this.flag}.svg`
    }
  }
}
</script>

<style lang="scss" scoped>
.flag-icon {
  height: 22px;
  width: 22px;
  object-fit: cover;

  &.flag-round {
    border-radius: 100%;
    height: 26px;
    width: 26px;
  }
}
</style>
