import { AbstractTransitionComponent } from 'vue-transition-component';
import PlayerRunTransitionController from './PlayerRunTransitionController';

// @vue/component
export default {
  name: 'PlayerRun',
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new PlayerRunTransitionController(this);
      this.isReady();
    },
  },
};
