import { mapMutations, mapGetters } from 'vuex';
import { AbstractTransitionComponent } from 'vue-transition-component';
import { GET_CURRENT_STEP } from '../../store/module/step/step';
import PlayerTransitionController from './PlayerTransitionController';
import { GET_CAT_ROOM } from '../../store/module/cat/cat';

// @vue/component
export default {
  name: 'Player',
  extends: AbstractTransitionComponent,
  computed: {
    ...mapGetters({
      playerRoom: GET_CURRENT_STEP,
      catRoom: GET_CAT_ROOM,
    }),
    playerStyle() {
      return this.$style[this.playerRoom];
    },
  },
  watch: {
    playerRoom(room) {
      room === this.catRoom && console.log('player says: HOLA CATO!');
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
