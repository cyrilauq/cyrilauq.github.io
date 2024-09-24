<template>
  <div class="skill">
    <span>{{ skill.name }}:</span>
    <div class="percentage-wrapper">
      <div class="percentage" :style="{ width: percentageWidth }"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Skill from '@/modules/models/skill'
import { computed } from 'vue'

const props = defineProps<{ skill: Skill }>()

const percentageWidth = computed(() => `calc(5rem / 10 * ${props.skill.expertise})`)
</script>
<style lang="css" scoped>
.skill {
  display: flex;
  justify-content: space-between;
  border: 1px solid green;
  padding: 0.7em;
  border-radius: 25px;
  align-items: center;
}

.percentage-wrapper {
  margin: 0;
  margin-left: 15px;
  height: 1.2rem;
  display: flex;
  align-content: center;
  width: 5rem;
  background-color: green;
  padding: 0;
  border-radius: 10px;
}

.percentage {
  border-radius: 10px;
  background-color: aliceblue;
}
</style>
