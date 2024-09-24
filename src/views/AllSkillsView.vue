<script setup lang="ts">
import SkillSection from '@/components/skill/SkillSection.vue'
import { useFetchSkills } from '@/modules/composables/useFetchSkills'

const { programmingLangageSkills, frameworkSkills, otherSkills, scriptingSkills, softwareSkills } =
  useFetchSkills()
</script>

<template>
  <main>
    <h1>All my skills</h1>
    <p>
      As you can see, there is no skills note at 100%. Why ? You should ask and the answer is
      simple: I thinks its not possible to master something up to 100% because there is always
      something to learn.
    </p>
    <SkillSection :skills="programmingLangageSkills" skills-type="Programming langage" />
    <SkillSection :skills="frameworkSkills" skills-type="Framework" />
    <SkillSection :skills="otherSkills" skills-type="Other/Tools" />
    <SkillSection :skills="scriptingSkills" skills-type="Scripting skills" />
    <SkillSection :skills="softwareSkills" skills-type="Software skills" />
  </main>
</template>
