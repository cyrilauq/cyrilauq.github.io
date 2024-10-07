<script setup lang="ts">
import AppHeader from '@/components/global/AppHeader.vue'
import AppFooter from './components/global/AppFooter.vue'
</script>

<template>
  <AppHeader v-once />

  <RouterView />

  <AppFooter v-once />
</template>

<style scoped></style>
