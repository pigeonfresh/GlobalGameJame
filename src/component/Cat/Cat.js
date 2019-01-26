import { AbstractTransitionComponent } from 'vue-transition-component';
import { mapGetters, mapActions } from 'vuex';
import CatTransitionController from './CatTransitionController';
import { GET_CAT_ROOM, INIT_CAT } from '../../store/module/cat/cat';

// @vue/component
export default {
  name: 'Cat',
  extends: AbstractTransitionComponent,
  computed: {
    ...mapGetters({
      getCatRoom: GET_CAT_ROOM,
    }),
    catPositionStyle() {
      return this.$style[this.getCatRoom];
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
