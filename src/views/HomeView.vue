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
      <p>Hi, I am</p>
      <h1>Cyril Auquier</h1>
      <p>
        An enthousiast about developping things and about learning how dto develop in this amazing
        world.
      </p>
    </section>
    <section>
      <h2>Some of my project</h2>
      <div>
        <AppProjectMiniature
          v-for="(project, index) in lastProjects"
          :key="index"
          :project="project"
        />
      </div>
      <p><RouterLink :to="{ name: 'all-projects' }">View full project archive?</RouterLink></p>
    </section>
    <section>
      <SkillSection :skills="lastSkills" skills-type="Some of my skills" />
      <p><RouterLink :to="{ name: 'all-skills' }">Want to see all my skills?</RouterLink></p>
    </section>
  </main>
</template>
<style lang="css" scoped>
main section:first-child {
  margin-block: 2rem;
}

section > div {
  display: flex;
  justify-content: space-between;
}

section {
  display: flex;
  flex-direction: column;
}

section p:has(a) {
  margin-top: 2rem;
  align-self: center;
}
</style>
