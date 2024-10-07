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
@font-face {
  font-family: 'sourcesanspro';
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url(https://design.penpot.app/fonts/sourcesanspro-regular.woff) format('woff');
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 30%;
}

nav a {
  height: fit-content;
  line-height: 1.2;
  color: rgba(232, 79, 75, 1);
  text-transform: uppercase;

  line-break: auto;
  overflow-wrap: initial;
  white-space: break-spaces;
  text-rendering: geometricPrecision;
  caret-color: rgba(232, 79, 75, 1);
  text-decoration: none;
  letter-spacing: 0px;
  font-size: 14px;
  font-family: 'sourcesanspro';
  font-style: normal;
  font-weight: 400;
  border-bottom: 1px solid rgba(232, 79, 75, 1);
  margin-inline: 1.1rem;
}

nav a:hover,
.router-link-active,
.router-link-exact-active {
  color: rgba(52, 211, 214, 1);
  caret-color: rgba(52, 211, 214, 1);
  border-bottom: 1px solid rgba(52, 211, 214, 1);
}

@media screen and (max-width: 540px) {
  nav {
    width: 100%;
    height: auto;
    flex-direction: unset;
    flex-wrap: wrap;
    justify-content: unset;
  }
}
</style>
