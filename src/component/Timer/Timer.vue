<style src="./Timer.scss" module lang="scss"></style>
<script src="./Timer.js"></script>

<template>
  <div :class="[$style.timer]">
    <Icon
      name="stop-watch"
      :class="[$style.stopWatch]"
    />

    <div
      ref="pointer"
      :class="[$style.pointer]"
    >
      <Icon
        name="needle"
      />
    </div>


  </div>
</template>
