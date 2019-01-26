import { AbstractTransitionComponent } from 'vue-transition-component';
import BedRoomTransitionController from './BedRoomTransitionController';

// @vue/component
export default {
  name: 'BedRoom',
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new BedRoomTransitionController(this);
      this.isReady();
    },
  },
};
