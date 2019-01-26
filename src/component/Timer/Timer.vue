<style src="./Timer.scss" module lang="scss"></style>
<script src="./Timer.js"></script>

<template>
  <div :class="[$style.timer]">
    <div
      ref="pointer"
      :class="[$style.pointer]"
    />
  </div>
</template>
