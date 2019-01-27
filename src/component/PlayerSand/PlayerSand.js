import { AbstractTransitionComponent } from 'vue-transition-component';
import PlayerSandTransitionController from './PlayerSandTransitionController';

// @vue/component
export default {
  name: 'PlayerSand',
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new PlayerSandTransitionController(this);
      this.isReady();
    },
  },
};
