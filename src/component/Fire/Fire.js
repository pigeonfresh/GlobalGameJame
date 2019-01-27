import { AbstractTransitionComponent } from 'vue-transition-component';
import VueTypes from 'vue-types';
import FireTransitionController from './FireTransitionController';
// @vue/component
export default {
  name: 'Fire',
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
      this.transitionController = new FireTransitionController(this);
      this.isReady();
    },
  },
};
