<style src="./HomePage.scss" module lang="scss"></style>
<script src="./HomePage.js"></script>

<template>
  <div :class="[$style.homePage]">
    <div :class="[$style.gameScreen]">


      <div>

        <LivingRoom :class="[$style.room, $style.livingRoom]" />
        <BathRoom :class="[$style.room, $style.bathroom]" />
        <Kitchen :class="[$style.room, $style.kitchen]" />
        <Attic :class="[$style.room, $style.attic]" />
        <BedRoom :class="[$style.room, $style.bedroom]" />

      </div>
      <Player :class="[$style.player]"/>


    </div>


  </div>
</template>
