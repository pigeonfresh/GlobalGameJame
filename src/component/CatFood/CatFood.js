import { AbstractTransitionComponent } from 'vue-transition-component';
import CatFoodTransitionController from './CatFoodTransitionController';

// @vue/component
export default {
  name: 'CatFood',
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new CatFoodTransitionController(this);
      this.isReady();
    },
  },
};
