<style src="./Vase.scss" module lang="scss"></style>
<script src="./Vase.js"></script>

<template>
  <div :class="[$style.vase, activeStep === 1 && $style.activeStep1, activeStep === 2 && $style.activeStep2, activeStep === 3 && $style.activeStep3, activeStep === 4 && $style.activeStep4]">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.9 40.2">
      <path :class="[$style.cls1]" d="M10 37.7h6.1c.8 0 1.4-.7 1.5-1.7.2-2.4.5-6.8-.2-10-.7-3.4-4.2-12.9-4.5-14.8s-1-5.4.5-6.8c.3-.2.5-.5.7-.7.6-.6.3-1.7-.4-1.7H10h.9-3.7c-.7 0-1 1.1-.5 1.7l.7.7c1.5 1.4.7 4.8.5 6.8-.2 1.9-3.7 11.3-4.5 14.8-.7 3.2-.4 7.7-.2 10 .1.9.7 1.7 1.5 1.7h6.1" id="jarrón"/>
    </svg>
  </div>
</template>
