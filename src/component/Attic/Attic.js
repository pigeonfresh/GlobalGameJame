import { AbstractTransitionComponent } from 'vue-transition-component';
import AtticTransitionController from './AtticTransitionController';

// @vue/component
export default {
  name: 'Attic',
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new AtticTransitionController(this);
      this.isReady();
    },
  },
};
