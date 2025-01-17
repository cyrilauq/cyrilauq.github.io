<script setup lang="ts">
import AppHeader from '@/components/global/AppHeader.vue'
import AppFooter from './components/global/AppFooter.vue'
</script>

<template>
  <AppHeader v-once />

  <RouterView />

  <AppFooter v-once />
</template>

<style>
main {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


@media screen and (max-width: 540px) {
  .title-form {
    display: none;
  }

  main {
    width: 100%;
  }
}
</style>