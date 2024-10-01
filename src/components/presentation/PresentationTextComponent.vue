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
@font-face {
  font-family: 'Blender Pro';
  font-style: normal;
  font-weight: 700;
  font-display: block;
  src: url(https://design.penpot.app/assets/by-id/f186a5f4-a0a8-471a-b2f4-4bf00f7e07c7)
    format('woff');
}
@font-face {
  font-family: 'Cyberpunk';
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url(https://design.penpot.app/assets/by-id/1c687604-2057-4e44-b5f1-7c56f45e1de7)
    format('woff');
}

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
}
</style>
