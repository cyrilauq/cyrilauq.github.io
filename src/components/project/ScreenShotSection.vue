<template>
  <section class="project_screenshots">
    <h2>Project screenshots</h2>
    <p v-if="screenshotLinks === undefined || screenshotLinks.length === 0">
      No screenshots provided
    </p>
    <div class="screenshots" v-else>
      <img v-for="(link, index) in screenshotLinks" :key="index" :src="link" />
    </div>
  </section>
</template>
<script setup lang="ts">
defineProps<{ screenshotLinks?: Array<string> }>()
</script>
<style lang="css" scoped>
div > img {
  width: 20rem;
}

.screenshots {
  display: flex;
  justify-content: space-around;
  align-self: center;
  width: 80%;
}

.project_screenshots {
  display: flex;
  flex-direction: column;
}
</style>
