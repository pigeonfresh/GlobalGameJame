import { AbstractTransitionComponent } from 'vue-transition-component';
import PlayerPhoneTransitionController from './PlayerPhoneTransitionController';

// @vue/component
export default {
  name: 'PlayerPhone',
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new PlayerPhoneTransitionController(this);
      this.isReady();
    },
  },
};
