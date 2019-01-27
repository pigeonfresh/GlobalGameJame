import { AbstractTransitionComponent } from 'vue-transition-component';
import VueTypes from 'vue-types';
import PhoneTransitionController from './PhoneTransitionController';

// @vue/component
export default {
  name: 'Phone',
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
      this.transitionController = new PhoneTransitionController(this);
      this.isReady();
    },
  },
};
