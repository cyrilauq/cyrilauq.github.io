<template>
  <NotchedBorder>
    <article>
      <h2 v-if="skillsType" class="skill-section-title">{{ skillsType }}</h2>
      <p v-if="skills === undefined || skills.length === 0">No skills provided</p>
      <div v-else class="skills-wrapper">
        <SkillExpertiseMiniature v-for="(skill, index) in skills" :key="index" :skill="skill" class="skill-item" />
      </div>
    </article>
  </NotchedBorder>
</template>
<script setup lang="ts">
import Skill from '@/modules/models/skill'
import SkillExpertiseMiniature from './SkillExpertiseMiniature.vue'
import NotchedBorder from '../style/NotchedBorder.vue'

defineProps<{ skills?: Skill[]; skillsType?: string }>()
</script>
<style lang="css" scoped>
:deep(.skill-item) {
  margin-inline: 1.8em;
}

.skill-section-title {
  text-align: center;
  margin-block-end: 0.5rem;
}

.skills-wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
