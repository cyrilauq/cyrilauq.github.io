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
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'all-skills' },
  { name: 'Projects', to: 'all-projects' },
  { name: 'Contact', to: 'contact' }
])
</script>
<style lang="css" scoped>
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 30%;
}

nav a {
  border-radius: 25px;
  padding-inline: 1rem;
}

nav a:hover {
  color: hsla(160, 100%, 37%, 1);
  background-color: hsla(160, 100%, 37%, 0.2);
}
</style>
