<style src="./Player.scss" module lang="scss"></style>
<script src="./Player.js"></script>

<template>
  <div :class="[$style.playerWrapper, playerStyle, playerDirectionStyle]">
    <div :class="[$style.player]">
      <PlayerIdle componentId="PlayerIdle" :class="[$style.state]"/>
      <PlayerPhone componentId="PlayerPhone" :class="[$style.state]"/>
      <PlayerPick componentId="PlayerPick" :class="[$style.state]"/>
      <PlayerPlunge componentId="PlayerPlunge" :class="[$style.state]"/>
      <PlayerFood componentId="PlayerFood" :class="[$style.state]"/>
      <PlayerRun componentId="PlayerRun" :class="[$style.state, $style.running]"/>
      <PlayerSand componentId="PlayerSand" :class="[$style.state]"/>
      <PlayerPat componentId="PlayerPat" :class="[$style.state]"/>
    </div>
    <p>{{playerActionCounter}}/4</p>
  </div>
</template>
