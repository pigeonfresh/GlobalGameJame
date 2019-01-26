import { AbstractTransitionComponent } from 'vue-transition-component';
import { Howl } from 'howler';
import AudioLibraryTransitionController from './AudioLibraryTransitionController';
import eventBus from '../../util/eventBus';
import SOUND_FX from '../../data/enum/SoundFX';

// @vue/component
export default {
  name: 'AudioLibrary',
  extends: AbstractTransitionComponent,
  data() {
    return {
      soundFX: null,
    };
  },
  created() {
    eventBus.$on('play-sound-fx', this.playSoundFX);
    this.soundFX = new Howl({
      src: [`${this.$staticRoot}audio/sfx.mp3`],
      sprite: {
        [SOUND_FX.MEOW]: [0, 2000],
        [SOUND_FX.PURR]: [2000, 3000],
        [SOUND_FX.NOM]: [6000, 7000],
        [SOUND_FX.PETTING]: [7000, 8000],
        [SOUND_FX.DOORBELL]: [9000, 11000],
        [SOUND_FX.PHONERINGING]: [11000, 12000],
        [SOUND_FX.PHONEHANGUP]: [12000, 1300],
        [SOUND_FX.FOOTSTEP]: [1300, 1400],
        [SOUND_FX.LITTER]: [14000, 16000],
        [SOUND_FX.SCRATCHING]: [16000, 18000],
        [SOUND_FX.FIRE]: [18000, 23000],
        [SOUND_FX.VASEPUT]: [23000, 24000],
        [SOUND_FX.VASEBREAKING]: [24000, 26000],
        [SOUND_FX.FAUCET]: [26000, 27000],
        [SOUND_FX.SINKWATERRUNNING]: [27000, 29000],
        [SOUND_FX.BATHTUB]: [29000, 34000],
        [SOUND_FX.BOXESFALLING]: [34000, 37000],
        [SOUND_FX.BOXESWITHGLASSES]: [37000, 40000],
        [SOUND_FX.ROOSTER]: [40000, 42000],
        [SOUND_FX.OWL]: [42000, 44000],
        [SOUND_FX.CLOCK]: [44000, 47000],
        [SOUND_FX.CLOCKFAST]: [47000, 58000],
      },
    });

    // this.startSoundTrack();
  },
  destroy() {
    eventBus.$off('play-sound-fx', this.playSoundFX);
  },
  methods: {
    playSoundFX(id) {
      console.log(id);
      this.soundFX.play(id);
    },
    startSoundTrack() {
      this.gameMusic = new Howl({
        src: [`${this.$staticRoot}audio/theme-song-short.mp3`],
        autoplay: true,
        onend() {
          SOUND_FX.console.log('Finished!'); // eslint-disable-line no-console
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
