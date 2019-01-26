import { FlowManager, AbstractRegistrableComponent } from 'vue-transition-component';
import { DeviceStateEvent } from 'seng-device-state-tracker';
import { mapMutations, mapState, mapGetters } from 'vuex';
import { SET_DEVICE_STATE } from '../store/module/app/app';
import { GET_CURRENT_STEP, MOVE } from '../store/module/step/step';

// @vue/component
export default {
  name: 'App',
  extends: AbstractRegistrableComponent,
  computed: {
    ...mapState({
      deviceState: state => state.app.deviceState,
    }),
    ...mapGetters({
      getCurrentStep: GET_CURRENT_STEP,
    }),
  },
  created() {
    this.$deviceStateTracker.addEventListener(
      DeviceStateEvent.STATE_UPDATE,
      this.handleDeviceStateUpdate,
    );
    this.setDeviceState(this.$deviceStateTracker.currentState);
  },
  methods: {
    ...mapMutations({
      setDeviceState: SET_DEVICE_STATE,
      move: MOVE,
    }),
    mockKey(key) {
      this.move({ direction: key });
    },
    handleDeviceStateUpdate(event) {
      this.setDeviceState(event.data.state);
    },
    onLeave(element, done) {
      FlowManager.transitionOut.then(() => FlowManager.done()).then(done);
    },
  },
};
