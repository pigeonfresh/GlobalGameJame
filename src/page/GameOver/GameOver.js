import { AbstractPageTransitionComponent } from 'vue-transition-component';
import GameOverTransitionController from './GameOverTransitionController';

// @vue/component
export default {
  name: 'GameOver',
  extends: AbstractPageTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new GameOverTransitionController(this);
      this.isReady();
    },
  },
};
