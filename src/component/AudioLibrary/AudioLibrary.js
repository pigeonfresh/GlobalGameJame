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
      src: [`${this.$staticRoot}audio/theme-song.mp3`],
      sprite: {
        blast: [0, 3000],
        laser: [4000, 1000],
        winner: [6000, 5000],
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
