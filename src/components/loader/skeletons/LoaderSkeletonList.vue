<template>
    <NotchedBorder class="project-list-container">
        <ul>
            <li v-for="(item, index) in listItems" :key="index" class="list-loader-item"></li>
        </ul>
        <NotchedBorder border-color="#b2dac4" class="link-btn">
            <RouterLink :to="{ name: 'all-projects' }">See all</RouterLink>
        </NotchedBorder>
    </NotchedBorder>
</template>
<script setup lang="ts">
import NotchedBorder from '@/components/style/NotchedBorder.vue';

const listItems = [1, 2, 3];
</script>
<style lang="css" scoped>
.list-loader-btn,
.list-loader-item,
ul {
    width: 100%;
}

.list-loader-btn,
.list-loader-item {
    height: 16px;
    display: inline-block;
    background-color: var(--loading-bg-color);
    animation: var(--loading-animation);
}

.project-list-container {
    width: 150px;
    height: 240px;
}

.project-list-container a {
    width: 70px;
    text-align: center;
    color: #b2dac4;
    background-color: #29696d;
    height: 25px;
    align-items: center;
    place-items: center;
}

.project-list-container :deep(.container) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}

ul {
    list-style-type: none;
    color: #ffff01;
    padding: 0;
    margin: 0;
}

@media screen and (max-width: 540px) {
    ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
}
</style>