<style src="./GameControls.scss" module lang="scss"></style>
<script src="./GameControls.js"></script>

<template>
  <div :class="[$style.gameControls]">
    <GlobalEvents
      @keyup.left="handleDirectionClick('ArrowLeft')"
      @keyup.right="handleDirectionClick('ArrowRight')"
      @keyup.up="handleDirectionClick('ArrowUp')"
      @keyup.down="handleDirectionClick('ArrowDown')"
      @keyup.z="handleActionZClick"
      @keyup.x="handleActionXClick"
    />
  </div>
</template>
