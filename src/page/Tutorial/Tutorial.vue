<style src="./Tutorial.scss" module lang="scss"></style>
<script src="./Tutorial.js"></script>

<template>
  <div :class="[$style.tutorial]">
    <div :class="[$style.panel]">
      <router-link :to="{ name: RouteNames.GAME }">
        Game
      </router-link>
    </div>
  </div>
</template>
