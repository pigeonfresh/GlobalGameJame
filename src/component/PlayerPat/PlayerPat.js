import { AbstractTransitionComponent } from 'vue-transition-component';
import PlayerPatTransitionController from './PlayerPatTransitionController';

// @vue/component
export default {
  name: 'PlayerPat',
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new PlayerPatTransitionController(this);
      this.isReady();
    },
  },
};
