import { FlowManager, AbstractRegistrableComponent } from 'vue-transition-component';
import { DeviceStateEvent } from 'seng-device-state-tracker';
import { mapState } from 'vuex';
import GameControls from '../component/GameControls';
import AudioLibrary from '../component/AudioLibrary';

// @vue/component
export default {
  name: 'App',
  components: {
    GameControls,
    AudioLibrary,
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
