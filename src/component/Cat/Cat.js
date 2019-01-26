import { AbstractTransitionComponent } from 'vue-transition-component';
import CatTransitionController from './CatTransitionController';

// @vue/component
export default {
  name: 'Cat',
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new CatTransitionController(this);
      this.isReady();
    },
  },
};
