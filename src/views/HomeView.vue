<script setup lang="ts">
import PhotoPresentationComponent from '@/components/presentation/PhotoPresentationComponent.vue'
import PresentationTextComponent from '@/components/presentation/PresentationTextComponent.vue'
import ProjectList from '@/components/project/ProjectList.vue'
import ProjectListMiniature from '@/components/project/ProjectListMiniature.vue'
import SkillSection from '@/components/skill/SkillSection.vue'
import SectionTitle from '@/components/style/SectionTitle.vue'
import { useFetchProjects } from '@/modules/composables/useFetchProjects'
import { useFetchSkills } from '@/modules/composables/useFetchSkills'
import { onMounted } from 'vue'

const { projects, fetchLast4Project, currentProject, fetchById } = useFetchProjects()
const { lastSkills } = useFetchSkills()

onMounted(() => {
  fetchLast4Project().then(() => {
    if (projects.value !== undefined) {
      fetchById(projects.value[0].id).catch((error) => console.error(error))
    }
  })
})

const onSelectedProjectChanged = (projectId: string) => {
  fetchById(projectId).catch((error) => console.error(error))
}
</script>

<template>
  <main>
    <section class="presentation-section">
      <PresentationTextComponent />
      <PhotoPresentationComponent />
    </section>
    <section class="projects-section secundary-section">
      <SectionTitle title="My projects" class="section-title" />
      <div>
        <ProjectList :projects="projects" @project-selected="onSelectedProjectChanged" />
        <ProjectListMiniature :project="currentProject" />
      </div>
    </section>
    <section class="secundary-section">
      <SectionTitle title="My skills" class="section-title" />
      <SkillSection :skills="lastSkills" />
      <p>
        <RouterLink :to="{ name: 'all-skills' }">Want to see all my skills?</RouterLink>
      </p>
    </section>
  </main>
</template>
<style lang="css" scoped>
main section:first-child {
  margin-block-start: 2rem;
}

.section-title {
  margin-top: 50px;
  margin-bottom: 10px;
}

section>div {
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

.presentation-section,
.projects-section {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.secundary-section {
  width: 90%;
  align-items: center;
  flex-direction: column;
}

.secundary-section>div {
  width: 100%;
  justify-content: space-around;
}

@media screen and (max-width: 540px) {
  .presentation-section {
    width: 100%;
    flex-direction: column-reverse;
    flex-wrap: wrap;
  }

  .projects-section div {
    width: 100%;
    flex-direction: column-reverse;
  }
}
</style>
