import { AbstractTransitionComponent } from 'vue-transition-component';
import Fire from '../../component/Fire';
import KitchenTransitionController from './KitchenTransitionController';

// @vue/component
export default {
  name: 'Kitchen',
  extends: AbstractTransitionComponent,
  components: {
    Fire,
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new KitchenTransitionController(this);
      this.isReady();
    },
  },
};
