<style src="./HomePage.scss" module lang="scss"></style>
<script src="./HomePage.js"></script>

<template>
  <div :class="[$style.homePage]">

    <div :class="[$style.panel]">

    </div>
    <GlobalEvents
      @keyup.space="handleSpaceBarClick"
    />
  </div>
</template>
