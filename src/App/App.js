import { FlowManager, AbstractRegistrableComponent } from 'vue-transition-component';
import { DeviceStateEvent } from 'seng-device-state-tracker';
import { mapMutations, mapState, mapGetters } from 'vuex';
import { SET_DEVICE_STATE } from '../store/module/app/app';
import { GET_CURRENT_STEP, MOVE } from '../store/module/step/step';
import GameControls from '../component/GameControls';

// @vue/component
export default {
  name: 'App',
  extends: AbstractRegistrableComponent,
  components: {
    GameControls,
  },
  computed: {
    ...mapState({
      deviceState: state => state.app.deviceState,
    }),
  },
  created() {
    this.$deviceStateTracker.addEventListener(
      DeviceStateEvent.STATE_UPDATE,
      this.handleDeviceStateUpdate,
    );
  },
  methods: {
    onLeave(element, done) {
      FlowManager.transitionOut.then(() => FlowManager.done()).then(done);
    },
  },
};
