<template>
  <div class="skill">
    <span>{{ skill.name }}:</span>
    <div class="percentage-wrapper">
      <div class="percentage" :style="{ width: percentageWidth }"></div>
      <div class="percentage-all"></div>
      <div class="skill-percentage-squares">
        <SkillPercentageSquare v-for="(item, index) in [1, 2, 3, 4]" :key="index" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Skill from '@/modules/models/skill'
import { computed } from 'vue'
import SkillPercentageSquare from './SkillPercentageSquare.vue'

const props = defineProps<{ skill: Skill }>()

const percentageWidth = computed(() => `calc(5rem / 10 * ${props.skill.expertise})`)
</script>
<style lang="css" scoped>
.skill {
  display: flex;
  justify-content: space-between;
  color: #ffff01;
  padding: 0.7em;
  align-items: center;
}

.percentage-wrapper {
  margin: 0;
  margin-left: 15px;
  display: flex;
  align-items: center;
  padding: 0;
  border-radius: 10px;
}

.percentage-all {
  height: 2px;
  border-radius: 10px;
  background-color: #29696d;
  width: 5rem;
}

.percentage {
  align-self: flex-start;
  z-index: 1;
  position: absolute;
  height: 2px;
  border: 1px solid #ffff01;
  background-color: #fcd539;
}

.skill-percentage-squares {
  display: flex;
  position: absolute;
  flex-direction: row;
  width: 5.5rem;
  margin-left: -0.25rem;
  justify-content: space-between;
}
</style>
