<style src="./GamePage.scss" module lang="scss"></style>
<script src="./GamePage.js"></script>

<template>
  <div :class="[$style.gamePage]">
    <div :class="[$style.gameScreen]">
      <div>
        <div :class="[$style.gameScreen]">
          <BedRoom :class="[$style.room, $style.bedroom]"/>
          <Stairs :class="[$style.room, $style.topStairs]"/>
          <BathRoom :class="[$style.room, $style.bathroom]"/>
          <Toilette :class="[$style.room, $style.toilette]"/>

          <Entrance :class="[$style.room, $style.entrace]"/>
          <LivingRoom :class="[$style.room, $style.livingRoom]"/>
          <Stairs :class="[$style.room, $style.midleStairs]"/>
          <Kitchen :class="[$style.room, $style.kitchen]"/>
          <Attic :class="[$style.room, $style.attic]"/>
          <Stairs :class="[$style.room, $style.midleStairs2]"/>

          <Stairs :class="[$style.room, $style.midleStairs2]"/>
          <Basement :class="[$style.room, $style.basement]"/>
        </div>
      </div>

      <Timer componentId="Timer" :class="[$style.timer]"/>
    </div>
  </div>
</template>
