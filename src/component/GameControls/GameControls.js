import { AbstractTransitionComponent } from 'vue-transition-component';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import GlobalEvents from 'vue-global-events';
import GameControlsTransitionController from './GameControlsTransitionController';
import { GET_CURRENT_STEP, MOVE } from '../../store/module/step/step';
import { SET_DEVICE_STATE } from '../../store/module/app/app';
import { GET_CAT_ROOM, DO_ACTION_TO_CAT } from '../../store/module/cat/cat';

// @vue/component
export default {
  name: 'GameControls',
  components: {
    GlobalEvents,
  },
  extends: AbstractTransitionComponent,
  computed: {
    ...mapGetters({
      playerRoom: GET_CURRENT_STEP,
      catRoom: GET_CAT_ROOM,
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
    ...mapActions({
      doActionToCat: DO_ACTION_TO_CAT,
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
    handleActionZClick() {
      this.catRoom === this.playerRoom && this.doActionToCat();
    },
    handleActionXClick(key) {
      console.log(key);
    },
    handleDirectionClick(key) {
      this.move({ direction: key });
    },
  },
};
