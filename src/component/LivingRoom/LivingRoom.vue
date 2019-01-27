<style src="./LivingRoom.scss" module lang="scss"></style>
<script src="./LivingRoom.js"></script>

<template>
  <div :class="[$style.livingRoom]">
    <ArmChair :class="[$style.armChair]" componentId="armchair" :points="living1Points"/>
    <Vase :class="[$style.vase]" componentId="vase" :points="living2Points"/>
  </div>
</template>
