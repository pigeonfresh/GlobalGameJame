<style src="./Kitchen.scss" module lang="scss"></style>
<script src="./Kitchen.js"></script>

<template>
  <div :class="[$style.kitchen]">
    <Fire
      :class="[$style.fire]"
      componentId="fire"
      :points="getKitchen1.points"
      :needs-action="getKitchen1.needsAction"
    />

    <CatFood
      :class="[$style.catFood]"
      componentId="catFood"
      :points="getKitchen2.points"
      :needs-action="getKitchen2.needsAction"
    />
  </div>
</template>
