import { AbstractTransitionComponent } from 'vue-transition-component';
import SandboxTransitionController from './SandboxTransitionController';

// @vue/component
export default {
  name: 'Sandbox',
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new SandboxTransitionController(this);
      this.isReady();
    },
  },
};
