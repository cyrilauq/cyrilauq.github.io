<template>
  <header>
    <AppNavMenu v-once />
  </header>
</template>
<script setup lang="ts">
import AppNavMenu from '@/components/global/menu/AppNavMenu.vue'
</script>
<style lang="css" scoped>
header {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
