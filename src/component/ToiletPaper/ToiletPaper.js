import { AbstractTransitionComponent } from 'vue-transition-component';
import ToiletPaperTransitionController from './ToiletPaperTransitionController';

// @vue/component
export default {
  name: 'ToiletPaper',
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new ToiletPaperTransitionController(this);
      this.isReady();
    },
  },
};
