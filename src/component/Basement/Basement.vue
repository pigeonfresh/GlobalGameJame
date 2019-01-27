<style src="./Basement.scss" module lang="scss"></style>
<script src="./Basement.js"></script>

<template>
  <div :class="[$style.basement]">
    <Boxes
      :class="[$style.boxes]"
      componentId="boxes"
    />

    <Sandbox
      :class="[$style.sandBox]"
      componentId="sandBox"
      :points="sandBox.points"
      :needs-action="sandBox.needsAction"
    />
  </div>
</template>
