<template>
  <footer>
    <p>This portfolio isn't fully complete, it is currently being build</p>
    <p>Build using Vue.JS 3</p>
    <p>Website build trying to make it inspired by the Cyberpunk 2077 game</p>
  </footer>
</template>
<script setup lang="ts"></script>
<style lang="css" scoped>
footer {
  margin-top: 15px;
  width: 100%;
  display: flex;
  justify-content: center;
  background: rgba(126, 40, 45, 0.885);
  box-shadow: 0 0 10px 10px rgba(126, 40, 45, 0.885);
}

footer p {
  margin: 5px;
}

footer p::after,
footer p::before {
  content: '  |  ';
}
</style>
