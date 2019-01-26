import { AbstractTransitionComponent } from 'vue-transition-component';
import BathRoomTransitionController from './BathRoomTransitionController';

// @vue/component
export default {
  name: 'BathRoom',
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new BathRoomTransitionController(this);
      this.isReady();
    },
  },
};
