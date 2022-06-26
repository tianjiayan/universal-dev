<template>
  <!-- 展示svg在线图标 -->
  <div v-if="isExternal" class="svg-icon svg-external-icon" :style="styleExternalIcon"></div>
  <!-- 展示svg本地图标 -->
  <svg v-else class="svg-icon" :class="[props.className]" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { isExternal as external } from '../utils/validate'

const props = defineProps({
  icon: {
    type: String,
    default: ''
  },
  className: {
    type: String,
    default: ''
  }
})

const styleExternalIcon = computed(() => {
  return {
    mask: `url(${props.icon}) no-repeat 50% 50%`,
    '-webkit-mask': `url(${props.icon}) no-repeat 50% 50%`
  }
})

const isExternal = computed(() => {
  console.log(external(props.icon))
  return external(props.icon)
})

const iconName = computed(() => {
  return `#icon-${props.icon}`
})

</script>

<style scoped>
.svg-icon{
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  /* mask : url(https://res.lgdsunday.club/user.svg) no-repeat 50% 50%;
  -webkit-mask: url(https://res.lgdsunday.club/user.svg) no-repeat 50% 50%; */
}
.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
