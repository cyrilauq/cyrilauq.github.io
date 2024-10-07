<script setup lang="ts">
import AppProjectMiniature from '@/components/project/AppProjectMiniature.vue'
import { useFetchProjects } from '@/modules/composables/useFetchProjects'

const { projects } = useFetchProjects()
</script>

<template>
  <main>
    <h1>My projects</h1>
    <div class="projects-wrapper">
      <AppProjectMiniature v-for="(project, index) in projects" :key="index" :project="project" />
    </div>
  </main>
</template>
<style lang="css" scoped>
.projects-wrapper {
  display: flex;
  flex-wrap: wrap;
}
</style>
