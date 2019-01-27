<style src="./Toilette.scss" module lang="scss"></style>
<script src="./Toilette.js"></script>

<template>
  <div :class="[$style.toilette]">
    <ToiletPaper componentId="toiletPaper" :points="100"/>
  </div>
</template>
