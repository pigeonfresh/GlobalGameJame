import { AbstractTransitionComponent } from 'vue-transition-component';
import FireTransitionController from './FireTransitionController';

// @vue/component
export default {
  name: 'Fire',
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new FireTransitionController(this);
      this.isReady();
    },
  },
};
