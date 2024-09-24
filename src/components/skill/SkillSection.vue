<template>
  <section>
    <h2>{{ skillsType }}</h2>
    <p v-if="skills === undefined || skills.length === 0">No skills provided</p>
    <div v-else class="skills-wrapper">
      <SkillExpertiseMiniature
        v-for="(skill, index) in skills"
        :key="index"
        :skill="skill"
        class="skill-item"
      />
    </div>
  </section>
</template>
<script setup lang="ts">
import Skill from '@/modules/models/skill'
import SkillExpertiseMiniature from './SkillExpertiseMiniature.vue'

defineProps<{ skills?: Skill[]; skillsType: string }>()
</script>
<style lang="css" scoped>
.skill-item {
  margin-inline: 0.4em;
}

.skills-wrapper {
  display: flex;
  justify-content: center;
}
</style>
