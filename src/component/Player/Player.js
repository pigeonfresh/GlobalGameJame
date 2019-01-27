import { mapMutations, mapGetters } from 'vuex';
import { AbstractTransitionComponent } from 'vue-transition-component';
import {
  GET_CURRENT_STEP,
  GET_DIRECTION,
  GET_ACTION_COUNTER,
} from '../../store/module/player/player';
import PlayerTransitionController from './PlayerTransitionController';
import { GET_CAT_ROOM } from '../../store/module/cat/cat';
import PlayerIdle from '../PlayerIdle';
import PlayerPhone from '../PlayerPhone';
import PlayerPick from '../PlayerPick';
import PlayerPlunge from '../PlayerPlunge';
import PlayerRun from '../PlayerRun';
import PlayerFood from '../PlayerFood';
import PlayerSand from '../PlayerSand';
import PlayerPat from '../PlayerPat';

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
      playerDirection: GET_DIRECTION,
      playerActionCounter: GET_ACTION_COUNTER,
    }),
    playerStyle() {
      return this.$style[this.playerRoom];
    },
    playerDirectionStyle() {
      return this.$style[this.playerDirection];
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
