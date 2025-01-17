<script setup lang="ts">
import SkillSection from '@/components/skill/SkillSection.vue'
import NotchedBorder from '@/components/style/NotchedBorder.vue'
import SectionTitle from '@/components/style/SectionTitle.vue'
import { useFetchSkills } from '@/modules/composables/useFetchSkills'

const { skills } = useFetchSkills()
</script>

<template>
  <main>
    <SectionTitle title="My skills" />
    <section>
      <NotchedBorder>
        <p>
          As you can see, there is no skills note at 100%. Why ? You should ask and the answer is
          simple: I thinks its not possible to master something up to 100% because there is always
          something to learn.
        </p>
      </NotchedBorder>
      <SkillSection v-for="skill in skills" :key="skill.skillsCatUid" class="skills-section" :skills="skill.skills"
        :skills-type="skill.skillsFriendlyCat" />
    </section>
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

main>section {
  width: 70%;
}

main h1+p {
  width: 70%;
}

.skills-section {
  margin-block: 0.5rem;
}
</style>
