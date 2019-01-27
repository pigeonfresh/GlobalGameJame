import { AbstractTransitionComponent } from 'vue-transition-component';
import VueTypes from 'vue-types';
import CatFoodTransitionController from './CatFoodTransitionController';

// @vue/component
export default {
  name: 'CatFood',
  extends: AbstractTransitionComponent,
  props: {
    points: VueTypes.number.isRequired,
    needsAction: VueTypes.bool.isRequired,
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new CatFoodTransitionController(this);
      this.isReady();
    },
  },
};
