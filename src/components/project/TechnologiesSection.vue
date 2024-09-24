<template>
  <div>
    <h2>Technologies</h2>
    <div class="technologies-wrapper">
      <p v-for="(techno, index) in technologies" :key="index" class="technology">{{ techno }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{ technologies?: Array<string> }>()
</script>
<style lang="css" scoped>
.technologies-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.technologies-wrapper p {
  margin-inline: 0.5rem;
}

.technology {
  padding-inline: 0.5rem;
  padding-block: 0.2rem;
  border-radius: 25px;
  background-color: rgba(0, 189, 126, 0.568);
  color: rgb(5, 255, 172);
}
</style>
