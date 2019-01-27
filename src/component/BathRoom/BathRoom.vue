<style src="./BathRoom.scss" module lang="scss"></style>
<script src="./BathRoom.js"></script>

<template>
  <div :class="[$style.bathRoom]">
    <ToiletPaper :class="[$style.toiletPaper]" componentId="toiletPaper" :points="Bathroom2Points"/>
  </div>
</template>
