<style src="./HomePage.scss" module lang="scss"></style>
<script src="./HomePage.js"></script>

<template>
  <div :class="[$style.homePage]">
    <router-link :to="{ name: 'game'}">Game</router-link>
  </div>
</template>
