import { AbstractTransitionComponent } from 'vue-transition-component';
import VueTypes from 'vue-types';
import PlayerPickTransitionController from './PlayerPickTransitionController';

// @vue/component
export default {
  name: 'PlayerPick',
  extends: AbstractTransitionComponent,
  props: {
    step: VueTypes.bool.isRequired,
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new PlayerPickTransitionController(this);
      this.isReady();
    },
  },
};
