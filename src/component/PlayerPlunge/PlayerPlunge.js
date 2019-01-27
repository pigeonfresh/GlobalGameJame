import { AbstractTransitionComponent } from 'vue-transition-component';
import PlayerPlungeTransitionController from './PlayerPlungeTransitionController';

// @vue/component
export default {
  name: 'PlayerPlunge',
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new PlayerPlungeTransitionController(this);
      this.isReady();
    },
  },
};
