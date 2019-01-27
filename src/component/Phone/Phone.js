import { AbstractTransitionComponent } from 'vue-transition-component';
import PhoneTransitionController from './PhoneTransitionController';

// @vue/component
export default {
  name: 'Phone',
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new PhoneTransitionController(this);
      this.isReady();
    },
  },
};
