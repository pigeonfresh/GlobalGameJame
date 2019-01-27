import { AbstractTransitionComponent } from 'vue-transition-component';
import { mapGetters } from 'vuex';
import { GET_ROOM } from '../../store/module/rooms/rooms';
import Rooms from '../../data/enum/Rooms';
import ToiletPaper from '../ToiletPaper';
import BathRoomTransitionController from './BathRoomTransitionController';

// @vue/component
export default {
  name: 'BathRoom',
  components: {
    ToiletPaper,
  },
  extends: AbstractTransitionComponent,
  computed: {
    ...mapGetters({
      getRoom: GET_ROOM,
    }),
    Bathroom2Points() {
      return this.getRoom(Rooms.BATHROOM_2).points;
    },
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new BathRoomTransitionController(this);
      this.isReady();
    },
  },
};
