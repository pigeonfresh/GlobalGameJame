import { TweenMax, Power0, TimelineMax } from 'gsap';
import { AbstractTransitionComponent } from 'vue-transition-component';
import TimerTransitionController from './TimerTransitionController';
import EventBus from '../../util/eventBus';

// @vue/component
export default {
  name: 'Timer',
  extends: AbstractTransitionComponent,
  mounted() {
    this.rotatePointer();
  },
  created() {
    EventBus.$on('music-position', this.handleUpdate);
  },
  destroyed() {
    EventBus.$off('music-position', this.handleUpdate);
  },
  methods: {
    handleUpdate(e) {
      !Number.isNaN(e) && this.tl.progress(e);
    },
    handleAllComponentsReady() {
      this.transitionController = new TimerTransitionController(this);
      this.isReady();
    },
    rotatePointer() {
      // const time = 180;
      const { pointer } = this.$refs;
      // TweenMax.to(pointer, time, {
      //   rotation: 360,
      //   ease: Power0.easeNone,
      //   onComplete: this.handleTimerOnComplete,
      // });
      this.tl = new TimelineMax({ paused: true });
      this.tl.to(pointer, 1, {
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
