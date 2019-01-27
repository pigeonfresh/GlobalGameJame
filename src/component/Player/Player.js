import { mapMutations, mapGetters } from 'vuex';
import { AbstractTransitionComponent } from 'vue-transition-component';
import {
  GET_CURRENT_STEP,
  GET_DIRECTION,
  GET_ACTION_COUNTER,
} from '../../store/module/player/player';
import PlayerTransitionController from './PlayerTransitionController';
import {
  GET_CAT_ROOM,
  GET_CAT_STATUS,
  GET_ACTION_COUNTER as GET_CAT_COUNTER,
} from '../../store/module/cat/cat';
import PlayerIdle from '../PlayerIdle';
import PlayerPhone from '../PlayerPhone';
import PlayerPick from '../PlayerPick';
import PlayerPlunge from '../PlayerPlunge';
import PlayerRun from '../PlayerRun';
import PlayerFood from '../PlayerFood';
import PlayerSand from '../PlayerSand';
import PlayerPat from '../PlayerPat';
import Rooms from '../../data/enum/Rooms';
import CatStatus from '../../data/enum/CatStatus';

// @vue/component
export default {
  name: 'Player',
  components: {
    PlayerIdle,
    PlayerPhone,
    PlayerPick,
    PlayerPlunge,
    PlayerRun,
    PlayerFood,
    PlayerSand,
    PlayerPat,
  },
  extends: AbstractTransitionComponent,
  computed: {
    ...mapGetters({
      playerRoom: GET_CURRENT_STEP,
      catRoom: GET_CAT_ROOM,
      catCounter: GET_CAT_COUNTER,
      catStatus: GET_CAT_STATUS,
      playerDirection: GET_DIRECTION,
      playerActionCounter: GET_ACTION_COUNTER,
    }),
    playerStyle() {
      return this.$style[this.playerRoom];
    },
    playerDirectionStyle() {
      return this.$style[this.playerDirection];
    },
    isRunning() {
      return (
        // !this.isIdleActive &&
        !this.isPhoneActive &&
        !this.isPlunging &&
        !this.isBeginStop &&
        !this.isFoodActive &&
        !this.isSandActive &&
        !this.isPattingActive
      );
    },
    isIdleActive() {
      return false;
    },
    isPhoneActive() {
      return this.playerActionCounter > 3 && this.playerRoom === Rooms.BEDROOM_2;
    },
    isFoodActive() {
      return (
        this.playerActionCounter > 0 &&
        this.playerActionCounter < 4 &&
        this.playerRoom === Rooms.KITCHEN_2
      );
    },
    isSandActive() {
      return (
        this.playerActionCounter > 0 &&
        this.playerActionCounter < 4 &&
        this.playerRoom === Rooms.BASEMENT_2
      );
    },
    isPattingActive() {
      return this.catStatus === CatStatus.BEING_PET;
    },
    isBeginStop() {
      return this.catStatus === CatStatus.BEING_STOPPED;
    },
    isNeutralized() {
      return this.catStatus === CatStatus.NEUTRALIZED;
    },
    isPlunging() {
      return (
        this.playerActionCounter > 0 &&
        this.playerActionCounter < 4 &&
        [Rooms.TOILETTE, Rooms.BATHROOM_2, Rooms.KITCHEN_1].includes(this.playerRoom)
      );
    },
    showActionCounterBar() {
      return this.playerActionCounter > 0 && this.playerActionCounter < 4;
    },
    statusBarWidth() {
      return (this.playerActionCounter * 100) / 4;
    },
  },
  methods: {
    ...mapMutations({}),
    handleAllComponentsReady() {
      this.transitionController = new PlayerTransitionController(this);
      this.isReady();
    },
  },
};
