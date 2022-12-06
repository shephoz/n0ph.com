<template>
  <div class="logo" :style="{ backgroundColor: color }">
    <img class="letter" src="SVG/letter-outline.svg" />

    <svg class="hexagon" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(172 64) scale(1.6 1.6)">
        <path
          id="anim-hexa"
          :fill="color"
          d="M86.6 0L173.2 50L173.2 150L86.6 200L0 150L0 50Z"
        ></path>
        <animateTransform
          xlink:href="#anim-hexa"
          attributeName="transform"
          type="rotate"
          from="0 86.6 100"
          to="360 86.6 100"
          dur="60s"
          repeatCount="indefinite"
        />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  props: { color: String },
};
</script>

<style>
.logo {
  height: 400px;
  width: 600px;
  margin: auto;
}

.hexagon {
  position: relative;
  z-index: 2;
  width: 600px;
  height: 400px;
  mix-blend-mode: difference;
}

.letter {
  width: 600px;
  position: absolute;
  top: 180px;
  z-index: 0;
}
</style>
