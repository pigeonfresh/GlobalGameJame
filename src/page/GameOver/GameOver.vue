<style src="./GameOver.scss" module lang="scss"></style>
<script src="./GameOver.js"></script>

<template>
  <div :class="[$style.gameOver]">
    <router-link :to="{ name: RouteNames.GAME }">
      <div :class="[$style.panel]">





<div :class="[$style.score]">
  <span>10000</span> pts
</div>
</div>
</router-link>
</div>
</template>
