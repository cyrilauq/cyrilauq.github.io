<template>
  <main>
    <SectionTitle :title="currentProject?.name || ''" bg-color="#bbbb0054" />
    <NotchedBorder class="container">
      <div>
        <h2>Description</h2>
        <p>{{ currentProject?.description }}</p>
      </div>
      <TechnologiesSection :technologies="currentProject?.technologies" />
      <GitHubLinks :links="currentProject?.links" />
      <ScreenShotSection :screenshot-links="currentProject?.screenshotLinks" />
    </NotchedBorder>
  </main>
</template>
<script lang="ts" setup>
import GitHubLinks from '@/components/project/GitHubLinks.vue'
import ScreenShotSection from '@/components/project/ScreenShotSection.vue'
import TechnologiesSection from '@/components/project/TechnologiesSection.vue'
import NotchedBorder from '@/components/style/NotchedBorder.vue'
import SectionTitle from '@/components/style/SectionTitle.vue'

import { useFetchProjects } from '@/modules/composables/useFetchProjects'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { fetchById, currentProject } = useFetchProjects()

onMounted(() => {
  fetchById(route.params.id as string).catch((error) => console.error(error))
})
</script>
<style lang="css" scoped>
main {
  margin-block-start: 25px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  margin-block-start: 0.7rem;
}

.container :deep(.container) {
  padding: 50px;
}
</style>
