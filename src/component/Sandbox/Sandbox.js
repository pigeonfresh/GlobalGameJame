import { AbstractTransitionComponent } from 'vue-transition-component';
import VueTypes from 'vue-types';
import SandboxTransitionController from './SandboxTransitionController';

// @vue/component
export default {
  name: 'Sandbox',
  extends: AbstractTransitionComponent,
  props: {
    points: VueTypes.number.isRequired,
  },
  computed: {
    activeStep() {
      return 1;
    },
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new SandboxTransitionController(this);
      this.isReady();
    },
  },
};
