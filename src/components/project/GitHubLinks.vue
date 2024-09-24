<template>
  <div>
    <h2>GitHub links</h2>
    <p v-if="links === undefined">No links provided for this project</p>
    <ul v-else>
      <li v-for="(link, index) in links" :key="index">
        <a :href="link.link" target="_blank">{{ link.name }}</a>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import ProjectLink from '@/modules/models/projectLink'

defineProps<{ links?: Array<ProjectLink> }>()
</script>
<style lang=""></style>
