import { AbstractTransitionComponent } from 'vue-transition-component';
import { Howl, Howler } from 'howler';
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
        [SOUND_FX.MEOW]: [0, 1000, false],
        [SOUND_FX.PURR]: [2000, 4000],
        [SOUND_FX.NOM]: [6000, 1000],
        [SOUND_FX.PETTING]: [8000, 1000, false],
        [SOUND_FX.DOORBELL]: [9000, 1000],
        [SOUND_FX.PHONERINGING]: [11000, 1000],
        [SOUND_FX.PHONEHANGUP]: [12000, 1000],
        [SOUND_FX.FOOTSTEP]: [13000, 1000],
        [SOUND_FX.LITTER]: [14000, 2000],
        [SOUND_FX.SCRATCHING]: [16000, 2000],
        [SOUND_FX.FIRE]: [18000, 5000],
        [SOUND_FX.VASEPUT]: [23000, 1000],
        [SOUND_FX.VASEBREAKING]: [24000, 2000],
        [SOUND_FX.FAUCET]: [26000, 1000],
        [SOUND_FX.SINKWATERRUNNING]: [27000, 2000],
        [SOUND_FX.BATHTUB]: [29000, 5000],
        [SOUND_FX.BOXESFALLING]: [34000, 3000],
        [SOUND_FX.BOXESWITHGLASSES]: [37000, 3000],
        [SOUND_FX.ROOSTER]: [40000, 2000],
        [SOUND_FX.OWL]: [42000, 2000],
        [SOUND_FX.CLOCK]: [44000, 3000],
        [SOUND_FX.CLOCKFAST]: [47000, 9000],
      },
    });

    // this.startSoundTrack();
  },
  destroy() {
    eventBus.$off('play-sound-fx', this.playSoundFX);
  },
  methods: {
    playSoundFX(id) {
      this.soundFX.play(id);
    },
    startSoundTrack() {
      this.gameMusic = new Howl({
        src: [`${this.$staticRoot}audio/theme-song.mp3`],
        autoplay: true,
        onend: () => console.log('Finished!'), // eslint-disable-line no-console
      });
      this.gameMusic.play();
    },
    handleAllComponentsReady() {
      this.transitionController = new AudioLibraryTransitionController(this);
      this.isReady();
    },
  },
};
