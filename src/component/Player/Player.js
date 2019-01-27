import { mapMutations, mapGetters } from 'vuex';
import { AbstractTransitionComponent } from 'vue-transition-component';
import { GET_CURRENT_STEP, GET_DIRECTION } from '../../store/module/player/player';
import PlayerTransitionController from './PlayerTransitionController';
import { GET_CAT_ROOM } from '../../store/module/cat/cat';
import PlayerIdle from '../../component/PlayerIdle';
import PlayerPhone from '../../component/PlayerPhone';
import PlayerPick from '../../component/PlayerPick';
import PlayerPlunge from '../../component/PlayerPlunge';
import PlayerRun from '../../component/PlayerRun';
import PlayerFood from '../../component/PlayerFood';
import PlayerSand from '../../component/PlayerSand';
import PlayerPat from '../../component/PlayerPat';

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
