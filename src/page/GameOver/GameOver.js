import { AbstractPageTransitionComponent } from 'vue-transition-component';
import { mapGetters } from 'vuex';
import GameOverTransitionController from './GameOverTransitionController';
import { GET_SCORE } from '../../store/module/rooms/rooms';

// @vue/component
export default {
  name: 'GameOver',
  extends: AbstractPageTransitionComponent,
  computed: {
    ...mapGetters({
      gameScore: GET_SCORE,
    }),
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new GameOverTransitionController(this);
      this.isReady();
    },
  },
};
