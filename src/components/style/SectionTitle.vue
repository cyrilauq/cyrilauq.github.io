<template>
  <!-- group: project_section_title -->
  <div class="title-group group projectse-094ca116877f">
    <!-- text: My projects -->
    <div class="title-text">
      <p>{{ title }}</p>
    </div>
    <!-- path: Rectangle -->
    <div class="shape path rectangle-094c51b9c3d4">
      <svg
        width="441"
        xmlns="http://www.w3.org/2000/svg"
        height="40"
        id="screenshot-309530fd-6c47-8011-8005-094c51b9c3d4"
        viewBox="475 343 441 40"
        style="-webkit-print-color-adjust::exact"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        fill="none"
        version="1.1"
      >
        <g id="shape-309530fd-6c47-8011-8005-094c51b9c3d4" data-testid="Rectangle">
          <defs></defs>
          <g class="fills" id="fills-309530fd-6c47-8011-8005-094c51b9c3d4">
            <path
              d="M475.000,343.000L916.000,343.000L916.000,360.193L811.701,360.584L812.172,364.538L916.000,364.538L916.000,383.000L475.000,383.000L475.000,364.818L571.166,364.538L571.166,360.622L475.000,361.027L475.000,343.000Z"
            ></path>
          </g>
          <g id="strokes-309530fd-6c47-8011-8005-094c51b9c3d4" class="strokes">
            <g class="inner-stroke-shape">
              <defs>
                <clipPath id="inner-stroke-render-119-309530fd-6c47-8011-8005-094c51b9c3d4-0">
                  <use href="#stroke-shape-render-119-309530fd-6c47-8011-8005-094c51b9c3d4-0"></use>
                </clipPath>
                <path
                  d="M475.000,343.000L916.000,343.000L916.000,360.193L811.701,360.584L812.172,364.538L916.000,364.538L916.000,383.000L475.000,383.000L475.000,364.818L571.166,364.538L571.166,360.622L475.000,361.027L475.000,343.000Z"
                  style="
                    fill: none;
                    fill-opacity: none;
                    stroke-width: 4;
                    stroke: #ffff01;
                    stroke-opacity: 1;
                  "
                  id="stroke-shape-render-119-309530fd-6c47-8011-8005-094c51b9c3d4-0"
                ></path>
              </defs>
              <use
                href="#stroke-shape-render-119-309530fd-6c47-8011-8005-094c51b9c3d4-0"
                clip-path="url(&#x27;#inner-stroke-render-119-309530fd-6c47-8011-8005-094c51b9c3d4-0&#x27;)"
              ></use>
            </g>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{ title: string }>()
</script>
<style lang="css" scoped>
@font-face {
  font-family: 'Cyberpunk';
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url(https://design.penpot.app/assets/by-id/1c687604-2057-4e44-b5f1-7c56f45e1de7)
    format('woff');
}

.title-text {
  font-size: 30pt;
  color: #ffff01;
  position: absolute;
}

.title-group {
  display: flex;
  justify-content: center;
  align-items: center;
}

* {
  box-sizing: border-box;
}

.text-node {
  background-clip: text !important;
  -webkit-background-clip: text !important;
}

/* project_section_title */
.projectse-094ca116877f {
  left: 475px;
  top: 343px;
  width: 441px;
  height: 40px;
}

/* Rectangle */
.rectangle-094c51b9c3d4 > svg {
  top: 0px;
  left: 0px;
  transform: translate(0px, 0px);
}
.rectangle-094c51b9c3d4 {
  left: 0px;
  top: 0px;
  width: 441px;
  height: 40px;
}

/* My projects */
.my-project-0949df7992cc {
  left: 110.5px;
  top: 1px;
  width: 220px;
  height: 36px;
}
.my-project-0949df7992cc .root-0 {
  display: flex;
  white-space: break-spaces;
  align-items: flex-start;
}
.my-project-0949df7992cc .root-0-paragraph-set-0 {
  display: inline-flex;
  flex-direction: column;
  justify-content: inherit;

  margin-right: 1px;
  vertical-align: top;
}
.my-project-0949df7992cc .root-0-paragraph-set-0-paragraph-0 {
  font-size: 0;
  line-height: 1.2;
  margin: 0;
  text-align: center;
}
.my-project-0949df7992cc .root-0-paragraph-set-0-paragraph-0-text-0 {
  color: rgba(255, 255, 1, 1);
  text-transform: none;

  line-break: auto;
  overflow-wrap: initial;
  white-space: pre;
  text-rendering: geometricPrecision;
  caret-color: rgba(255, 255, 1, 1);
  text-decoration: none;
  letter-spacing: 0px;
  font-size: 30px;
  font-family: 'Cyberpunk';
  font-style: normal;
  font-weight: 400;
}

@media screen and (max-width: 540px) {
  svg {
    width: 100%;
  }
}
</style>
