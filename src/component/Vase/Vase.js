import { AbstractTransitionComponent } from 'vue-transition-component';
import VaseTransitionController from './VaseTransitionController';

// @vue/component
export default {
  name: 'Vase',
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new VaseTransitionController(this);
      this.isReady();
    },
  },
};
