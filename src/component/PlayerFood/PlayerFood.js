import { AbstractTransitionComponent } from 'vue-transition-component';
import PlayerFoodTransitionController from './PlayerFoodTransitionController';

// @vue/component
export default {
  name: 'PlayerFood',
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new PlayerFoodTransitionController(this);
      this.isReady();
    },
  },
};
