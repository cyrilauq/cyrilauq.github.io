<template>
  <nav>
    <RouterLink v-for="(link, i) in links" :to="{ name: link.to }" :key="i">{{
      link.name
    }}</RouterLink>
  </nav>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const links = ref([
  { name: 'Home', to: 'home' },
  { name: 'Skills', to: 'all-skills' },
  { name: 'Projects', to: 'all-projects' },
  { name: 'Contact', to: 'contact' }
])
</script>
<style lang=""></style>
