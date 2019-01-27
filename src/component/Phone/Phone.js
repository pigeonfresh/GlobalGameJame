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
  computed: {
    activeStep() {
      return 0;
    },
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new PhoneTransitionController(this);
      this.isReady();
    },
  },
};
