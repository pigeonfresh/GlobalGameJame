import { AbstractTransitionComponent } from 'vue-transition-component';
import Fire from '../Fire';
import KitchenTransitionController from './KitchenTransitionController';

// @vue/component
export default {
  name: 'Kitchen',
  components: {
    Fire,
  },
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new KitchenTransitionController(this);
      this.isReady();
    },
  },
};
