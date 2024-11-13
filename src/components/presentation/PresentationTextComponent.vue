<script setup lang="ts">
import NotchedBorder from '../style/NotchedBorder.vue'
</script>

<template>
  <NotchedBorder class="presentation-container">
    <span>Hi you, I am</span>
    <span class="name-text">Cyril</span>
    <span
      >An enthousiastic about discovering new thingsin this world, test and learn them! This is my
      only way to live</span
    >
  </NotchedBorder>
</template>
<style lang="css" scoped>
.presentation-container {
  max-width: 670px;
  height: 175px;
}

.presentation-container :deep(.container) {
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.name-text {
  color: #ffff01;
  font-size: 30pt;
  font-family: 'Cyberpunk';
}

@media screen and (max-width: 540px) {
  .presentation-container :deep(.container) {
    width: 100%;
    height: auto;
    padding: 25px;
  }

  .presentation-container {
    width: 100%;
    height: auto;
  }
}
</style>
