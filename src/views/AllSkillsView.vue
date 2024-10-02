<script setup lang="ts">
import SkillSection from '@/components/skill/SkillSection.vue'
import NotchedBorder from '@/components/style/NotchedBorder.vue'
import { useFetchSkills } from '@/modules/composables/useFetchSkills'

const { programmingLangageSkills, frameworkSkills, otherSkills, scriptingSkills, softwareSkills } =
  useFetchSkills()
</script>

<template>
  <main>
    <NotchedBorder>
      <h1>All my skills</h1>
      <p>
        As you can see, there is no skills note at 100%. Why ? You should ask and the answer is
        simple: I thinks its not possible to master something up to 100% because there is always
        something to learn.
      </p>
      <SkillSection
        class="skills-section"
        :skills="programmingLangageSkills"
        skills-type="Programming langage"
      />
      <SkillSection class="skills-section" :skills="frameworkSkills" skills-type="Framework" />
      <SkillSection class="skills-section" :skills="otherSkills" skills-type="Other/Tools" />
      <SkillSection
        class="skills-section"
        :skills="scriptingSkills"
        skills-type="Scripting skills"
      />
      <SkillSection class="skills-section" :skills="softwareSkills" skills-type="Software skills" />
    </NotchedBorder>
  </main>
</template>
<style lang="css" scoped>
main :deep(.container) {
  display: flex;
  align-items: center;
  flex-direction: column;
}

main h1 {
  margin-inline-start: 15%;
  align-self: flex-start;
}

main h1 + p,
.skills-section {
  width: 70%;
}

.skills-section {
  margin-block: 0.5rem;
}
</style>
