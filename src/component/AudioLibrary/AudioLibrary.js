import { AbstractTransitionComponent } from 'vue-transition-component';
import AudioLibraryTransitionController from './AudioLibraryTransitionController';
import { Howl, Howler } from 'howler';

// @vue/component
export default {
  name: 'AudioLibrary',
  extends: AbstractTransitionComponent,
  data() {
    return {
      soundFX: null,
    };
  },
  mounted() {
    this.soundFX = new Howl({
      src: [`${this.$staticRoot}audio/sfx.mp3`],
      sprite: {
        meow: [0, 2000],
        purr: [2000, 6000],
        nom: [6000, 7000],
        petting: [7000, 9000],
        doorbell: [9000, 11000],
        phoneRinging: [11000, 12000],
        phoneHangup: [12000, 1300],
        footstep: [1300, 1400],
        litter: [14000, 16000],
        scratching: [16000, 18000],
        fire: [18000, 23000],
        vasePut: [23000, 24000],
        vaseBreaking: [24000, 26000],
        Faucet: [26000, 27000],
        sinkWaterRunning: [27000, 29000],
        bathTub: [29000, 34000],
        boxesFalling: [34000, 37000],
        boxesWithGlasses: [37000, 40000],
        rooster: [40000, 42000],
        owl: [42000, 44000],
        clock: [44000, 47000],
        clockFast: [47000, 58000],
      },
    });

    // this.startSoundTrack();
  },
  methods: {
    startSoundTrack() {
      this.gameMusic = new Howl({
        src: [`${this.$staticRoot}audio/theme-song-short.mp3`],
        autoplay: true,
        onend: function() {
          console.log('Finished!');
        },
      });
      this.gameMusic.play();
    },
    handleAllComponentsReady() {
      this.transitionController = new AudioLibraryTransitionController(this);
      this.isReady();
    },
  },
};
