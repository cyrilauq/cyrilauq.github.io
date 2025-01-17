<template>
  <NotchedBorder class="project-list-container">
    <ul>
      <li v-for="(projectItem, index) in projects" :key="index" @click.prevent="onProjectNameClicked(projectItem.id)">
        {{ projectItem.name }}
      </li>
    </ul>
    <NotchedBorder border-color="#b2dac4" class="link-btn">
      <RouterLink :to="{ name: 'all-projects' }">See all</RouterLink>
    </NotchedBorder>
  </NotchedBorder>
</template>
<script lang="ts" setup>
import NotchedBorder from '../style/NotchedBorder.vue'

export type ProjectListItem = {
  name: string
  id: string
}

const emits = defineEmits<{ (e: 'projectSelected', projectId: string): void }>()

withDefaults(defineProps<{ projects?: Array<ProjectListItem> }>(), {
  projects: () => new Array<ProjectListItem>()
})

const onProjectNameClicked = (projectId: string) => {
  console.log('selected project' + projectId)

  if (projectId) {
    emits('projectSelected', projectId)
  }
}
</script>
<style lang="css" scoped>
.project-list-container {
  width: 150px;
  height: 240px;
}

.project-list-container a {
  width: 70px;
  text-align: center;
  color: #b2dac4;
  background-color: #29696d;
  height: 25px;
  align-items: center;
  place-items: center;
}

.project-list-container :deep(.container) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

ul {
  list-style-type: none;
  color: #ffff01;
  padding: 0;
  margin: 0;
}

@media screen and (max-width: 540px) {
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
