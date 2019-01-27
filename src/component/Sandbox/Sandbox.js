import { AbstractTransitionComponent } from 'vue-transition-component';
import VueTypes from 'vue-types';
import { match } from '../../store/utils';
import SandboxTransitionController from './SandboxTransitionController';

// @vue/component
export default {
  name: 'Sandbox',
  extends: AbstractTransitionComponent,
  props: {
    points: VueTypes.number.isRequired,
  },
  computed: {
    activeStep() {
      const step = 1;
      // match(this.points)
      //   .on(
      //     p => p <= 100 && p > 60,
      //     () => {
      //       step = 3;
      //     },
      //   )
      //   .on(
      //     p => p <= 60 && p > 0,
      //     () => {
      //       step = 2;
      //     },
      //   )
      //   .on(
      //     p => p === 0,
      //     () => {
      //       step = 1;
      //     },
      //   );
      return step;
    },
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new SandboxTransitionController(this);
      this.isReady();
    },
  },
};
