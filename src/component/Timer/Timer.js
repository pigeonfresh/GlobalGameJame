import { TweenMax, Power0 } from 'gsap';
import { AbstractTransitionComponent } from 'vue-transition-component';
import TimerTransitionController from './TimerTransitionController';

// @vue/component
export default {
  name: 'Timer',
  extends: AbstractTransitionComponent,
  mounted() {
    this.rotatePointer();
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new TimerTransitionController(this);
      this.isReady();
    },
    rotatePointer() {
      const time = 180;
      const { pointer } = this.$refs;
      TweenMax.to(pointer, time, {
        rotation: 360,
        ease: Power0.easeNone,
        onComplete: this.handleTimerOnComplete,
      });
    },
    handleTimerOnComplete() {
      // update store timer done
    },
  },
};
