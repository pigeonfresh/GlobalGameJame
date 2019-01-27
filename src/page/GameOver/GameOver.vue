<style src="./GameOver.scss" module lang="scss"></style>
<script src="./GameOver.js"></script>

<template>
  <div :class="[$style.gameOver]">
    <router-link :to="{ name: RouteNames.GAME }">
      <div :class="[$style.panel]">
        <div :class="[$style.blink]">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600">
            <path
              d="M300.54 271.74h44v8.81h-35.19v8.81h-8.81v26.43h8.81v8.81H327V307h-8.81v-8.81h26.43v35.24h-44v-8.83h-8.81v-8.81H283v-26.43h8.81v-8.81h8.81zM371 271.74h26.43v8.81h8.81v8.81h8.81v44.05h-17.6v-17.62H371v17.62h-17.6v-44.05h8.81v-8.81H371zm8.81 8.81v8.81H371V307h26.43v-17.64h-8.81v-8.81zM423.88 271.74h17.61v8.81h8.81v8.81h8.81v-8.81h8.81v-8.81h17.62v61.67h-17.62V307h-8.81v8.81h-8.81V307h-8.81v26.43h-17.61zM494.35 271.74H556v8.81h-44v17.62h35.24V307H512v17.6h44v8.81h-61.65zM644.11 271.74h44v8.81H697v44.05h-8.81v8.81h-44v-8.81h-8.89v-44.05h8.81zm8.81 8.81v44.05h26.43v-44.05zM705.78 271.74h17.62v26.43h8.81V307H741v-8.81h8.81v-26.45h17.62V307h-8.81v8.81h-8.81v8.81H741v8.81h-8.81v-8.83h-8.79v-8.81h-8.81V307h-8.81zM776.26 271.74h61.66v8.81h-44v17.62h35.23V307h-35.27v17.6h44v8.81h-61.62zM846.73 271.74h52.86v8.81h8.81V307h-17.62v8.81h8.81v8.81h8.81v8.81H882v-8.83h-8.81v-8.81h-8.81v17.62h-17.65zm17.62 8.81V307H882v-8.81h8.81v-17.64z"/>
          </svg>
        </div>
        <div :class="[$style.score]">
          <span>10000</span> pts
        </div>
      </div>
    </router-link>
  </div>
</template>
