<style src="./GamePage.scss" module lang="scss"></style>
<script src="./GamePage.js"></script>

<template>
  <div :class="[$style.gamePage]">



    <div :class="[$style.gameScreen]">
      <div>
        <LivingRoom :class="[$style.room, $style.livingRoom]" />
        <Kitchen :class="[$style.room, $style.kitchen]" />
        <Attic :class="[$style.room, $style.attic]" />
        <BedRoom :class="[$style.room, $style.bedroom]" />
        <BathRoom :class="[$style.room, $style.bathroom]" />
      </div>

      <Timer
        componentId="Timer"
        :class="[$style.timer]"
      />


    </div>


  </div>
</template>
