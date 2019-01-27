<style src="./Player.scss" module lang="scss"></style>
<script src="./Player.js"></script>

<template>
  <div :class="[$style.playerWrapper, playerStyle, playerDirectionStyle]">
    <div :class="[$style.player]">
      <PlayerIdle componentId="PlayerIdle" :class="[$style.state]"/>
      <PlayerPhone componentId="PlayerPhone" :class="[$style.state]"/>
      <PlayerPick componentId="PlayerPick" :class="[$style.state]"/>
      <PlayerPlunge componentId="PlayerPlunge" :class="[$style.state]"/>
      <PlayerRun componentId="PlayerRun" :class="[$style.state]"/>
    </div>
  </div>
</template>
