<script setup lang="ts">
import PhotoPresentationComponent from '@/components/presentation/PhotoPresentationComponent.vue'
import PresentationTextComponent from '@/components/presentation/PresentationTextComponent.vue'
import AppProjectMiniature from '@/components/project/AppProjectMiniature.vue'
import ProjectList from '@/components/project/ProjectList.vue'
import ProjectListMiniature from '@/components/project/ProjectListMiniature.vue'
import SkillSection from '@/components/skill/SkillSection.vue'
import SectionTitle from '@/components/style/SectionTitle.vue'
import { useFetchProjects } from '@/modules/composables/useFetchProjects'
import { useFetchSkills } from '@/modules/composables/useFetchSkills'
import Project from '@/modules/models/project'
import { computed, onMounted, reactive, ref } from 'vue'

const { lastProjects } = useFetchProjects()
const { lastSkills } = useFetchSkills()

const projectsToDisplay = computed(() =>
  lastProjects.value?.map((p) => {
    return { id: p.id, name: p.name }
  })
)

const selectedProject = ref<Project | undefined>()

onMounted(() => {
  if (lastProjects.value !== undefined) {
    selectedProject.value = lastProjects.value[0]
  }
})

const onSelectedProjectChanged = (projectId: string) => {
  selectedProject.value = lastProjects.value?.find((p) => p.id === projectId)
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
        <ProjectList :projects="projectsToDisplay" @project-selected="onSelectedProjectChanged" />
        <ProjectListMiniature :project="selectedProject" />
      </div>
    </section>
    <section class="secundary-section">
      <SectionTitle title="My skills" class="section-title" />
      <SkillSection :skills="lastSkills" />
      <p><RouterLink :to="{ name: 'all-skills' }">Want to see all my skills?</RouterLink></p>
    </section>
  </main>
</template>
<style lang="css" scoped>
main section:first-child {
  margin-block-start: 2rem;
}

main {
  width: 1000px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.section-title {
  margin-top: 50px;
  margin-bottom: 10px;
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

.secundary-section > div {
  width: 100%;
  justify-content: space-around;
}
</style>
