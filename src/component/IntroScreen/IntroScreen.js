import { AbstractTransitionComponent } from 'vue-transition-component';
import IntroScreenTransitionController from './IntroScreenTransitionController';

// @vue/component
export default {
  name: 'IntroScreen',
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new IntroScreenTransitionController(this);
      this.isReady();
    },
  },
};
