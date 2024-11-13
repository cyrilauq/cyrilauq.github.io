<template>
  <main>
    <SectionTitle title="About"></SectionTitle>
    <NotchedBorder class="about-section-container">
      <section class="about-section">
        <h2>About me</h2>
        <p>
          I love discovering new thing and form myself on new technologies i don't know well or at
          all like:
        </p>
        <ul>
          <li>Docker</li>
          <li>Angular</li>
        </ul>
        <p>
          One thing I do to upgrade my skill or learn new ones, is that I buy a course on Udemy.
        </p>
      </section>
    </NotchedBorder>
    <NotchedBorder class="about-section-container">
      <section class="about-section">
        <h2>My certifications</h2>
        <p>Here some of the certifications I earned:</p>
        <ul>
          <li>
            <a href="https://www.udemy.com/certificate/UC-84c12eed-53bf-4bec-b9bc-8573982d4d7f/"
              >Complete Vue Developer Bootcamp (Pinia, Vitest)
            </a>
          </li>
        </ul>
      </section>
    </NotchedBorder>
    <NotchedBorder class="about-section-container">
      <section class="about-section">
        <h2>Some of my links</h2>
        <p>
          Please note that i have to github accounts, as you can see, one for testing and the other
          for building "real" apps.
        </p>
        <ul>
          <li v-for="(link, index) in links" :key="index">
            <a :href="link.link" target="_blank">{{ link.name }}</a>
          </li>
        </ul>
      </section>
    </NotchedBorder>
  </main>
</template>
<script setup lang="ts">
import NotchedBorder from '@/components/style/NotchedBorder.vue'
import SectionTitle from '@/components/style/SectionTitle.vue'
import ProjectLink from '@/modules/models/projectLink'
import { ref } from 'vue'

const links = ref<Array<ProjectLink>>([
  ProjectLink.fromObject({
    link: 'https://github.com/cyrilauq',
    name: 'GitHub (for tests)'
  }),
  ProjectLink.fromObject({
    link: 'https://github.com/cycy243',
    name: 'GitHub (for bigger projects)'
  }),
  ProjectLink.fromObject({
    link: 'https://www.linkedin.com/in/cyril-auquier-984962142',
    name: 'LinkedIn'
  }),
  ProjectLink.fromObject({
    link: 'https://hub.docker.com/u/cyrilauq',
    name: 'DockerHub'
  })
])
</script>
<style lang="css" scoped>
.about-section {
  width: 720px;
  margin-inline: 25px;
  padding-block: 25px;
}

.about-section-container {
  margin-block: 0.4rem;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
