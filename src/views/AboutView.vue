<template>
  <main>
    <h1>About</h1>
    <section>
      <h2>Some of my links</h2>
      <ul>
        <li v-for="(link, index) in links" :key="index">
          <a :href="link.link" target="_blank">{{ link.name }}</a>
        </li>
      </ul>
    </section>
  </main>
</template>
<script setup lang="ts">
import ProjectLink from '@/modules/models/projectLink'
import { ref } from 'vue'

const links = ref<Array<ProjectLink>>([
  ProjectLink.fromObject({
    link: 'https://github.com/cyrilauq',
    name: 'GitHub (for tests)'
  }),
  ProjectLink.fromObject({
    link: 'https://github.com/cycy243',
    name: 'GitHub (for bigger projects)'
  }),
  ProjectLink.fromObject({
    link: 'https://www.linkedin.com/in/cyril-auquier-984962142',
    name: 'LinkedIn'
  })
])
</script>
<style lang=""></style>
