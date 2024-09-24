<script setup lang="ts">
import AppProjectMiniature from '@/components/project/AppProjectMiniature.vue'
import SkillSection from '@/components/skill/SkillSection.vue'
import { useFetchProjects } from '@/modules/composables/useFetchProjects'
import { useFetchSkills } from '@/modules/composables/useFetchSkills'

const { lastProjects } = useFetchProjects()
const { lastSkills } = useFetchSkills()
</script>

<template>
  <main>
    <section>
      <h2>Some of my project</h2>
      <div>
        <AppProjectMiniature
          v-for="(project, index) in lastProjects"
          :key="index"
          :project="project"
        />
      </div>
      <p>And many more <RouterLink :to="{ name: 'all-projects' }">here</RouterLink></p>
    </section>
    <section>
      <SkillSection :skills="lastSkills" skills-type="Some of my skills" />
      <p>And many more <RouterLink :to="{ name: 'all-skills' }">here</RouterLink></p>
    </section>
  </main>
</template>
<style lang="css" scoped>
section > div {
  display: flex;
  justify-content: space-between;
}
</style>
