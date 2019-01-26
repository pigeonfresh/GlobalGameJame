import { FlowManager, AbstractRegistrableComponent } from 'vue-transition-component';
import { DeviceStateEvent } from 'seng-device-state-tracker';
import { mapState } from 'vuex';
import GameControls from '../component/GameControls';
import { Howl, Howler } from 'howler';

// @vue/component
export default {
  name: 'App',
  components: {
    GameControls,
  },
  mounted() {
    const soundtrack = `${this.$staticRoot}audio/frolic.mp3`;

    console.log(soundtrack);

    const music = new Howl({
      src: [soundtrack],
    });
    console.log(music);

    music.play();
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
