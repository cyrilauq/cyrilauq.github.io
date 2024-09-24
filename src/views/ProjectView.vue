<template>
  <main>
    <h1>{{ project?.name }}</h1>
    <div>
      <h2>Description</h2>
      <p>{{ project?.description }}</p>
    </div>
    <TechnologiesSection :technologies="project?.technologies" />
    <GitHubLinks :links="project?.links" />
    <ScreenShotSection :screenshot-links="project?.screenshotLinks" />
  </main>
</template>
<script lang="ts" setup>
import GitHubLinks from '@/components/project/GitHubLinks.vue'
import ScreenShotSection from '@/components/project/ScreenShotSection.vue'
import TechnologiesSection from '@/components/project/TechnologiesSection.vue'

import { useFetchProjects } from '@/modules/composables/useFetchProjects'
import Project from '@/modules/models/project'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const project = ref<Project>()

const { fetchById } = useFetchProjects()

onMounted(() => {
  fetchById([...route.params.id][0]).then((p) => (project.value = p))
})
</script>
<style lang=""></style>
