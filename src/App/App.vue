<style src="./App.scss" module lang="scss"></style>
<script src="./App.js"></script>

<template>
  <div :class="[$style.app]">
    <transition @leave="onLeave">
      <router-view/>
    </transition>
    <div>
      <button @click="mockKey('ArrowUp')">🔼</button>
      <button @click="mockKey('ArrowRight')">▶️</button>
      <button @click="mockKey('ArrowDown')">🔽</button>
      <button @click="mockKey('ArrowLeft')">◀️</button>
    </div>
  </div>
</template>
