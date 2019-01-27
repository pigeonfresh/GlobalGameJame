import { AbstractTransitionComponent } from 'vue-transition-component';
import VueTypes from 'vue-types';
import FireTransitionController from './FireTransitionController';
// @vue/component
export default {
  name: 'Fire',
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
      this.transitionController = new FireTransitionController(this);
      this.isReady();
    },
  },
};
