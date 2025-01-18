<template>
    <NotchedBorder class="project-list-miniature-container">
        <div class="loading-miniature miniature">
            <h3 class="project-name"></h3>
            <div>
                <img src="/image.png" alt="Loading miniature" class="miniature-img" />
                <div>
                    <p></p>
                    <NotchedBorder border-color="#b2dac4" class="link-btn">
                        <RouterLink :to="{}">See project</RouterLink>
                    </NotchedBorder>
                </div>
            </div>
        </div>
    </NotchedBorder>
</template>
<script setup lang="ts">
import NotchedBorder from '@/components/style/NotchedBorder.vue';
</script>
<style lang="css">
.loading-miniature h3,
.loading-miniature p {
    width: 250px;
    background-color: var(--loading-bg-color);
    animation: var(--loading-animation);
}

.loading-miniature>div {
    width: 100%;
}

.loading-miniature p {
    height: 70px;
}

.loading-miniature h3 {
    height: 16px;
}
</style>