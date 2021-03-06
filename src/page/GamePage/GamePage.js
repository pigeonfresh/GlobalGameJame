import { AbstractPageTransitionComponent } from 'vue-transition-component';
import GamePageTransitionController from './GamePageTransitionController';
import LivingRoom from '../../component/LivingRoom';
import Kitchen from '../../component/Kitchen';
import BedRoom from '../../component/BedRoom';
import Player from '../../component/Player';
import BathRoom from '../../component/BathRoom';
import Timer from '../../component/Timer';
import Toilette from '../../component/Toilette';
import Basement from '../../component/Basement';
import Entrance from '../../component/Entrance';
import Stairs from '../../component/Stairs';
import Cat from '../../component/Cat';
import Bg from '../../component/Bg';
import EventBus from '../../util/eventBus';

// @vue/component
export default {
  name: 'GamePage',
  components: {
    LivingRoom,
    BathRoom,
    Kitchen,
    BedRoom,
    Toilette,
    Basement,
    Entrance,
    Stairs,
    Player,
    Timer,
    Cat,
    Bg,
  },
  extends: AbstractPageTransitionComponent,
  mounted() {
    EventBus.$emit('start-game');
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new GamePageTransitionController(this);
      this.isReady();
    },
  },
};
