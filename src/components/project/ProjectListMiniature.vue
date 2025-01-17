<template>
  <NotchedBorder class="project-list-miniature-container">
    <div v-if="project" class="miniature">
      <h3 class="project-name">{{ project.name }}</h3>
      <div>
        <img :src="!project.miniatureLink || project.miniatureLink.length === 0
          ? '/image.png'
          : project.miniatureLink
          " :alt="project.name" class="miniature-img" />
        <div>
          <p>{{ project.description }}</p>
          <NotchedBorder border-color="#b2dac4">
            <RouterLink :to="{ name: 'project', params: { id: project.id } }">See project</RouterLink>
          </NotchedBorder>
        </div>
      </div>
    </div>
    <div v-else>
      <p>No project provided</p>
    </div>
  </NotchedBorder>
</template>
<script lang="ts" setup>
import Project from '@/modules/models/project'
import NotchedBorder from '../style/NotchedBorder.vue'

defineProps<{ project?: Project }>()
</script>
<style lang="css" scoped>
.project-list-miniature-container {
  width: 660px;
  height: 206px;
}

.miniature {
  padding: 10px;
  width: 100%;
  height: 100%;
}

.miniature .project-name {
  margin-left: 60px;
  color: #ffff01;
}

.miniature div {
  display: flex;
  flex-direction: row;
}

.miniature-img {
  width: 300px;
  height: 154px;
  margin-inline: 10px;
}

.miniature div div {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  align-items: flex-start;
}

.miniature a {
  width: 70px;
  text-align: center;
  color: #b2dac4;
  background-color: #29696d;
  height: 25px;
  align-items: center;
  place-items: center;
}


@media screen and (max-width: 540px) {
  .miniature>div {
    flex-direction: column;
  }

  .project-list-miniature-container {
    height: auto;
  }
}
</style>
