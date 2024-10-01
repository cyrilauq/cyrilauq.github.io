<template>
  <header>
    <AppNavMenu v-once class="nav-menu" />
  </header>
</template>
<script setup lang="ts">
import AppNavMenu from '@/components/global/menu/AppNavMenu.vue'
</script>
<style lang="css" scoped>
header {
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  background: rgba(126, 40, 45, 0.885);
  box-shadow: 0 0 10px 10px rgba(126, 40, 45, 0.885);
  align-items: flex-end;
}
</style>
