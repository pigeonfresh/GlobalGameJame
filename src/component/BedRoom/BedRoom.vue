<style src="./BedRoom.scss" module lang="scss"></style>
<script src="./BedRoom.js"></script>

<template>
  <div :class="[$style.bedRoom]">
    <Curtains :class="[$style.curtains]" componentId="curtains" :points="bedroom1Points"/>
    <Phone :class="[$style.phone]" componentId="phone" />
  </div>
</template>
