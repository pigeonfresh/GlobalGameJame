import { AbstractPageTransitionComponent } from 'vue-transition-component';
import TutorialTransitionController from './TutorialTransitionController';

// @vue/component
export default {
  name: 'Tutorial',
  extends: AbstractPageTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new TutorialTransitionController(this);
      this.isReady();
    },
  },
};
