import { AbstractTransitionComponent } from 'vue-transition-component';
import { mapGetters, mapMutations } from 'vuex';
import GlobalEvents from 'vue-global-events';
import GameControlsTransitionController from './GameControlsTransitionController';
import { GET_CURRENT_STEP, MOVE } from '../../store/module/step/step';
import { SET_DEVICE_STATE } from '../../store/module/app/app';

// @vue/component
export default {
  name: 'GameControls',
  components: {
    GlobalEvents,
  },
  extends: AbstractTransitionComponent,
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
    handleActionClick(key) {
      console.log(key);
    },
    handleDirectionClick(key) {
      this.move({ direction: key });
    },
  },
};
