import { AbstractTransitionComponent } from 'vue-transition-component';
import { mapGetters, mapActions } from 'vuex';
import CatTransitionController from './CatTransitionController';
import {
  GET_CAT_ROOM,
  INIT_CAT,
  GET_CAT_STATUS,
  GET_ACTION_COUNTER,
} from '../../store/module/cat/cat';
import { GET_CURRENT_STEP } from '../../store/module/step/step';

// @vue/component
export default {
  name: 'Cat',
  extends: AbstractTransitionComponent,
  computed: {
    ...mapGetters({
      catRoom: GET_CAT_ROOM,
      playerRoom: GET_CURRENT_STEP,
      catStatus: GET_CAT_STATUS,
      actionCounter: GET_ACTION_COUNTER,
    }),
    catPositionStyle() {
      return this.$style[this.catRoom];
    },
    catStatusStyle() {
      return this.$style[this.catStatus];
    },
    statusBarWidth() {
      return (this.actionCounter * 100) / 4;
    },
  },
  watch: {
    playerRoom(room) {
      room === this.catRoom && console.log('cat says: MEOW!!!'); // eslint-disable-line no-console
    },
  },
  created() {
    this.initCat();
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new CatTransitionController(this);
      this.isReady();
    },
    ...mapActions({
      initCat: INIT_CAT,
    }),
  },
};
