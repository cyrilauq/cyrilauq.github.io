<script setup lang="ts">
import AppProjectMiniature from '@/components/project/AppProjectMiniature.vue'
import { useFetchProjects } from '@/modules/composables/useFetchProjects'
import { onMounted } from 'vue'

const { projects, fetchAllProjects } = useFetchProjects()

onMounted(() => {
  fetchAllProjects()
})
</script>

<template>
  <main>
    <h1>My projects</h1>
    <div class="projects-wrapper">
      <div v-if="!projects || projects.length === 0">
        <p>No project to display</p>
      </div>
      <template v-else>
        <AppProjectMiniature v-for="(project, index) in projects" :key="index" :project="project" />
      </template>
    </div>
  </main>
</template>
<style lang="css" scoped>
.projects-wrapper {
  display: flex;
  flex-wrap: wrap;
}
</style>
