<template>
  <RouterLink :to="{ name: 'project', params: { id: project.id } }">
    <div>
      <h2>{{ project.name }}</h2>
      <img
        :src="
          !project.miniatureLink || project.miniatureLink.length === 0
            ? '/image.png'
            : project.miniatureLink
        "
        :alt="project.name"
        class="project-miniature-picture"
      />
    </div>
  </RouterLink>
</template>
<script setup lang="ts">
import Project from '@/modules/models/project'

const props = defineProps<{ project: Project }>()
</script>
<style lang="css">
.project-miniature-picture {
  width: 300px;
  height: 150px;
}
</style>
