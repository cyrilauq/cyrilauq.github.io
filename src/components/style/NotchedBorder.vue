<template>
  <div class="notched-border-wrapper">
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
export type NotchedBorderProps = {
  bgColor?: string
  borderColor?: string
}

withDefaults(defineProps<NotchedBorderProps>(), {
  borderColor: 'rgba(41, 105, 109, 0.75)',
  bgColor: 'rgba(93, 126, 120, 0.75)'
})
</script>
<style lang="css" scoped>
.notched-border-wrapper {
  clip-path: polygon(0 20%, 10% 0, 100% 0, 100% 80%, 90% 100%, 0% 100%);
  padding: 2px;
  background-color: v-bind(borderColor);
}

.notched-border-wrapper > .container {
  background-color: v-bind(bgColor);
  height: 100%;
  clip-path: polygon(0 20%, 10% 0, 100% 0, 100% 80%, 90% 100%, 0% 100%);
  width: 100%;
  height: 100%;
}
</style>
