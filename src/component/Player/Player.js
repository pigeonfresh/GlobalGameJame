import { AbstractTransitionComponent } from 'vue-transition-component';
import PlayerTransitionController from './PlayerTransitionController';

// @vue/component
export default {
  name: 'Player',
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new PlayerTransitionController(this);
      this.isReady();
    },
  },
};
