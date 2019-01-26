import { AbstractTransitionComponent } from 'vue-transition-component';
import KitchenTransitionController from './KitchenTransitionController';

// @vue/component
export default {
  name: 'Kitchen',
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new KitchenTransitionController(this);
      this.isReady();
    },
  },
};
