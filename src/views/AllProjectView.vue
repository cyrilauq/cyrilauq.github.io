<script setup lang="ts">
import AppProjectMiniature from '@/components/project/AppProjectMiniature.vue'
import { useFetchProjects } from '@/modules/composables/useFetchProjects'

const { projects } = useFetchProjects()
</script>

<template>
  <main>
    <AppProjectMiniature v-for="(project, index) in projects" :key="index" :project="project" />
  </main>
</template>
