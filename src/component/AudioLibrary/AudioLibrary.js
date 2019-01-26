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
        phone: [11000, 12000],
        footstep: [12000, 13000],
        litter: [13000, 14000],
        scratching: [14000, 16000],
        fire: [160000, 17000],
        vasePut: [0, 1000],
        vaseBreaking: [0, 1000],
        Faucet: [0, 1000],
        waterRunning: [0, 1000],
        bathTub: [0, 1000],
        boxesFalling: [0, 1000],
        boxesWithGlasses: [0, 1000],
        rooster: [0, 1000],
        owl: [0, 1000],
        clock: [0, 1000],
        clockFast: [0, 1000],
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
