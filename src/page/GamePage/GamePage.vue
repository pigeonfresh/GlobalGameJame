<style src="./GamePage.scss" module lang="scss"></style>
<script src="./GamePage.js"></script>

<template>
  <div :class="[$style.gamePage]">
    <div :class="[$style.gameScreen]">
      <div>
        <div :class="[$style.gameScreen]">
          <div :class="[$style.backgroundWrapper]">
            <svg id="Layer_14" data-name="Layer 14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 600">
              <line y1="400.05" x2="1500" y2="400.05" stroke-width="10" fill="none" stroke="#231f20" stroke-miterlimit="10"/>
              <line :class="[$style.cls]" x1="301.42" y1="200.02" x2="301.42" y2="400.05"/>
              <line :class="[$style.cls]" x1="752.77" x2="752.77" y2="400.05"/>
              <line :class="[$style.cls]" x1="453.67" y1="109.12" x2="453.67" y2="202.02"/>
              <line :class="[$style.cls]" x1="902.42" x2="902.42" y2="400.05"/>
              <line :class="[$style.cls]" x1="601.92" y1="198.48" x2="601.92" y2="600"/>
              <line :class="[$style.cls]" x1="1349.75" y1="200.02" x2="301.42" y2="200.02"/>
              <polyline :class="[$style.cls]" points="636.81 3 301.42 200.02 301.42 203"/>
              <polyline :class="[$style.cls]" points="1013.68 3 1349.75 199.77 1349.75 599.75"/>
              <line :class="[$style.cls]" x1="1201.92" y1="113.48" x2="1201.92" y2="600"/>
              <line :class="[$style.cls]" y1="599.75" x2="1500" y2="599.75"/>
              <polyline :class="[$style.cls]" points="1020.47 6.98 1013.68 3 636.81 3 626.87 8.84"/>
            </svg>
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
