<style src="./CatFood.scss" module lang="scss"></style>
<script src="./CatFood.js"></script>

<template>
  <div :class="[$style.catFood]">
    <p :class="[$style.points]" v-if="needsAction">{{points}}</p>
    <svg v-if="!needsAction" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 200">
      <path d="M63 191.3s.6-1.9-1.4-1.8c-.2-2.1-2.4-1.6-2.8-.9-.2-1.8-1-1.8-2-1.7-.1-1.3-1.3-1.6-2.4-1.6.6-1-1.6-3.3-3.7-.6-2-1.6-2.7.8-2.7.8s-3.9-1-4.1 1.3c-1-.2-1.8-.2-2 1.6-.4-.7-2.6-1.3-2.8.8-1.8-.2-1.9 1.8-1.9 1.8s.7.6 2.9.7c4.1.2 16.5.3 21.1 0 1 0 1.8-.4 1.8-.4z" fill="#231f20"/>
      <path :class="[$style.cls1]" d="M44.6 189.3s1.2-1.9 2.5 0M52.5 190s1-1.5 1.9 0M40 190s1-1.5 1.9 0M58.7 190s1-1.5 1.9 0M48.6 187.5s1.2-1.9 2.5 0M51.1 187.5c-.1 0 1.8-2.7 3.8 0"/>
    </svg>
  </div>
</template>
