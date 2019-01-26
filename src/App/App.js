import { FlowManager, AbstractRegistrableComponent } from 'vue-transition-component';
import { DeviceStateEvent } from 'seng-device-state-tracker';
import { mapState } from 'vuex';
import { SET_DEVICE_STATE } from '../store/module/app/app';
import GameControls from '../component/GameControls';

// @vue/component
export default {
  name: 'App',
  components: {
    GameControls,
  },
  extends: AbstractRegistrableComponent,
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
