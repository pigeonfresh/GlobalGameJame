import { AbstractTransitionComponent } from 'vue-transition-component';
import PlayerPickTransitionController from './PlayerPickTransitionController';

// @vue/component
export default {
  name: 'PlayerPick',
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new PlayerPickTransitionController(this);
      this.isReady();
    },
  },
};
