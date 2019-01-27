import { AbstractTransitionComponent } from 'vue-transition-component';
import VueTypes from 'vue-types';
// import { match } from '../../store/utils';
import SandboxTransitionController from './SandboxTransitionController';

// @vue/component
export default {
  name: 'Sandbox',
  extends: AbstractTransitionComponent,
  props: {
    points: VueTypes.number.isRequired,
    needsAction: VueTypes.bool.isRequired,
  },
  watch: {
    points() {
      console.log('DO ANIMATION');
    },
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new SandboxTransitionController(this);
      this.isReady();
    },
  },
};
