import { AbstractPageTransitionComponent } from 'vue-transition-component';
import GamePageTransitionController from './GamePageTransitionController';
import LivingRoom from '../../component/LivingRoom';
import Kitchen from '../../component/Kitchen';
import Attic from '../../component/Attic';
import BedRoom from '../../component/BedRoom';
import Player from '../../component/Player';

// @vue/component
export default {
  name: 'GamePage',
  components: {
    LivingRoom,
    Kitchen,
    Attic,
    BedRoom,
    Player,
  },
  extends: AbstractPageTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new GamePageTransitionController(this);
      this.isReady();
    },
  },
};
