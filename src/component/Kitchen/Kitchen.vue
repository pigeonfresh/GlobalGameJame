<style src="./Kitchen.scss" module lang="scss"></style>
<script src="./Kitchen.js"></script>

<template>
  <div :class="[$style.kitchen]">
    <Fire :class="[$style.fire]" componentId="fire" />
  </div>
</template>
