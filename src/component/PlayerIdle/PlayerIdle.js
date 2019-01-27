import { AbstractTransitionComponent } from 'vue-transition-component';
import PlayerIdleTransitionController from './PlayerIdleTransitionController';

// @vue/component
export default {
  name: 'PlayerIdle',
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new PlayerIdleTransitionController(this);
      this.isReady();
    },
  },
};
