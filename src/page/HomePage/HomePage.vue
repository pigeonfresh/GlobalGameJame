<style src="./HomePage.scss" module lang="scss"></style>
<script src="./HomePage.js"></script>

<template>
  <div :class="[$style.homePage]">
    <div :class="[$style.panel]">
      <router-link :to="{ name: RouteNames.TUTORIAL }">

        <IntroScreen :class="[$style.IntroScreen]" componentId="IntroScreen" />

      </router-link>
    </div>
  </div>
</template>
