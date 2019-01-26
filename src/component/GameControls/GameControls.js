import { AbstractTransitionComponent } from 'vue-transition-component';
import GameControlsTransitionController from './GameControlsTransitionController';
import { mapGetters, mapMutations } from 'vuex';
import { GET_CURRENT_STEP, MOVE } from '../../store/module/step/step';
import { SET_DEVICE_STATE } from '../../store/module/app/app';
import GlobalEvents from 'vue-global-events';

// @vue/component
export default {
  name: 'GameControls',
  extends: AbstractTransitionComponent,
  components: {
    GlobalEvents,
  },
  computed: {
    ...mapGetters({
      getCurrentStep: GET_CURRENT_STEP,
    }),
  },
  created() {
    this.setDeviceState(this.$deviceStateTracker.currentState);
  },
  methods: {
    ...mapMutations({
      setDeviceState: SET_DEVICE_STATE,
      move: MOVE,
    }),
    handleDeviceStateUpdate(event) {
      this.setDeviceState(event.data.state);
    },
    handleAllComponentsReady() {
      this.transitionController = new GameControlsTransitionController(this);
      this.isReady();
    },
    handleKeyUp() {
      console.log('fooooooooooooo');
    },
    handleDirectionClick(key) {
      this.move({ direction: key });
    },
  },
};
