import { AbstractTransitionComponent } from 'vue-transition-component';
import PopupOverlayTransitionController from './PopupOverlayTransitionController';

// @vue/component
export default {
  name: 'PopupOverlay',
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new PopupOverlayTransitionController(this);
      this.isReady();
    },
  },
};
