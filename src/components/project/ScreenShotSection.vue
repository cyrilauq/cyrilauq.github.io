<template>
  <section>
    <h2>Project screenshots</h2>
    <p v-if="screenshotLinks === undefined || screenshotLinks.length === 0">
      No screenshots provided
    </p>
    <div v-else>
      <img v-for="(link, index) in screenshotLinks" :key="index" :src="link" />
    </div>
  </section>
</template>
<script setup lang="ts">
defineProps<{ screenshotLinks?: Array<string> }>()
</script>
<style lang=""></style>
