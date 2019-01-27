import { AbstractTransitionComponent } from 'vue-transition-component';
import BedRoomTransitionController from './BedRoomTransitionController';

import Curtains from '../Curtains';

// @vue/component
export default {
  name: 'BedRoom',
  components: {
    Curtains,
  },
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new BedRoomTransitionController(this);
      this.isReady();
    },
  },
};
