<style src="./Player.scss" module lang="scss"></style>
<script src="./Player.js"></script>

<template>
  <div :class="[$style.playerWrapper, playerStyle, playerDirectionStyle]">
    <div :class="[$style.player]"></div>
  </div>
</template>
