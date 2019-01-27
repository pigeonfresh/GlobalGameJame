import { AbstractTransitionComponent } from 'vue-transition-component';
import { mapGetters } from 'vuex';
import { GET_ROOM } from '../../store/module/rooms/rooms';
import Fire from '../Fire';
import CatFood from '../CatFood';
import KitchenTransitionController from './KitchenTransitionController';
import Rooms from '../../data/enum/Rooms';

// @vue/component
export default {
  name: 'Kitchen',
  components: {
    Fire,
    CatFood,
  },
  extends: AbstractTransitionComponent,
  computed: {
    ...mapGetters({
      getRoom: GET_ROOM,
    }),
    getKitchen1() {
      return this.getRoom(Rooms.KITCHEN_1);
    },
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new KitchenTransitionController(this);
      this.isReady();
    },
  },
};
