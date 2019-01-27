<style src="./Player.scss" module lang="scss"></style>
<script src="./Player.js"></script>

<template>
  <div :class="[$style.playerWrapper, playerStyle, playerDirectionStyle]">
    <div :class="[$style.player]">
      <PlayerIdle componentId="PlayerIdle" :class="[$style.state, isIdleActive && $style.active]"/>
      <PlayerPhone
        componentId="PlayerPhone"
        :class="[$style.state, isPhoneActive && $style.active]"
      />
      <PlayerPick
        componentId="PlayerPick"
        :class="[$style.state, (isBeginStop || isNeutralized) && $style.active]"
        :step="isBeginStop"
      />
      <PlayerPlunge
        componentId="PlayerPlunge"
        :class="[$style.state, isPlunging && $style.active]"
      />
      <PlayerFood componentId="PlayerFood" :class="[$style.state, isFoodActive && $style.active]"/>
      <PlayerRun componentId="PlayerRun" :class="[$style.state, $style.running, isRunning && $style.active]"/>
      <PlayerSand componentId="PlayerSand" :class="[$style.state, isSandActive && $style.active]"/>
      <PlayerPat componentId="PlayerPat" :class="[$style.state, isPattingActive && $style.active]"/>
    </div>

    <div :class="[$style.actionCounterBar]" v-if="!showActionCounterBar">
        <span :style="{width: `${statusBarWidth}%`}"></span>
      </div>
    <!--<p>{{playerActionCounter}}/4</p>-->
  </div>
</template>
