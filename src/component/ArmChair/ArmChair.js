import { AbstractTransitionComponent } from 'vue-transition-component';
import ArmChairTransitionController from './ArmChairTransitionController';

// @vue/component
export default {
  name: 'ArmChair',
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new ArmChairTransitionController(this);
      this.isReady();
    },
  },
};
