import { AbstractTransitionComponent } from 'vue-transition-component';
import BathRoomTransitionController from './BathRoomTransitionController';
import ToiletPaper from '../ToiletPaper';

// @vue/component
export default {
  name: 'BathRoom',
  components: {
    ToiletPaper,
  },
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new BathRoomTransitionController(this);
      this.isReady();
    },
  },
};
