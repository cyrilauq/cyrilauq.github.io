<template>
  <RouterLink :to="{ name: 'project', params: { id: project.id } }">
    <div>
      <h2>{{ project.name }}</h2>
      <img src="/image.png" :alt="project.name" class="project-miniature-picture" />
    </div>
  </RouterLink>
</template>
<script setup lang="ts">
import Project from '@/modules/models/project'

defineProps<{ project: Project }>()
</script>
<style lang="css">
.project-miniature-picture {
  width: 300px;
  height: 150px;
}
</style>
