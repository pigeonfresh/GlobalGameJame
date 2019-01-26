import { mapMutations, mapGetters } from 'vuex';
import { AbstractTransitionComponent } from 'vue-transition-component';
import { GET_CURRENT_STEP } from '../../store/module/step/step';
import PlayerTransitionController from './PlayerTransitionController';

// @vue/component
export default {
  name: 'Player',
  extends: AbstractTransitionComponent,
  computed: {
    ...mapGetters({
      getCurrentStep: GET_CURRENT_STEP,
    }),
    playerStyle() {
      return this.$style[this.getCurrentStep];
    },
  },
  methods: {
    ...mapMutations({}),
    handleAllComponentsReady() {
      this.transitionController = new PlayerTransitionController(this);
      this.isReady();
    },
  },
};
