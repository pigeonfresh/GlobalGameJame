<style src="./GamePage.scss" module lang="scss"></style>
<script src="./GamePage.js"></script>

<template>
  <div :class="[$style.gamePage]">
    <div :class="[$style.gameScreen]">
      <div>
        <div :class="[$style.gameScreen]">
          <div :class="[$style.backgroundWrapper]">
            <Bg />
          </div>

          <div :class="[$style.roomsWrapper]">

            <BedRoom :class="[$style.room, $style.bedroom]"/>
            <Stairs :class="[$style.room, $style.stairs, $style.topStairs]"/>
            <BathRoom :class="[$style.room, $style.bathroom]"/>
            <Toilette :class="[$style.room, $style.toilette]"/>

            <Entrance :class="[$style.room, $style.entrance]"/>
            <LivingRoom :class="[$style.room, $style.livingRoom]"/>
            <Stairs :class="[$style.room, $style.stairs, $style.middleStairs1]"/>
            <Kitchen :class="[$style.room, $style.kitchen]"/>
            <Stairs :class="[$style.room, $style.stairs, $style.middleStairs2]"/>

            <Stairs :class="[$style.room, $style.stairs, $style.bottomStairs]"/>
            <Basement :class="[$style.room, $style.basement]"/>

          </div>

          <Player :class="[$style.player]" />
          <Cat :class="[$style.cat]" />

        </div>
      </div>

      <Timer componentId="Timer" :class="[$style.timer]"/>
    </div>
  </div>
</template>
