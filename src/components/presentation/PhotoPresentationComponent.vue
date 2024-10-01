<script setup lang="ts">
import NotchedBorder from '../style/NotchedBorder.vue'
</script>

<template>
  <NotchedBorder>
    <div class="image-container">
      <img class="cyril-photo" src="/cyberpunk-portrait.jpg" />
    </div>
  </NotchedBorder>
</template>
<style lang="css" scoped>
.image-container {
  display: flex;
  padding: 0;
  width: 175px;
  height: 175px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.cyril-photo {
  width: 152px;
  height: 152px;
  clip-path: polygon(0 20%, 10% 0, 100% 0, 100% 80%, 90% 100%, 0% 100%);
}
</style>
