import { AbstractTransitionComponent } from 'vue-transition-component';

import { mapGetters } from 'vuex';
import { GET_ROOM_POINTS } from '../../store/module/rooms/rooms';
import Rooms from '../../data/enum/Rooms';
import Curtains from '../Curtains';
import Phone from '../Phone';
import BedRoomTransitionController from './BedRoomTransitionController';

// @vue/component
export default {
  name: 'BedRoom',
  components: {
    Curtains,
    Phone,
  },
  extends: AbstractTransitionComponent,
  computed: {
    ...mapGetters({
      getRoomPoints: GET_ROOM_POINTS,
    }),
    bedroom1Points() {
      return this.getRoomPoints(Rooms.BEDROOM_1);
    },
    bedroom2Points() {
      return this.getRoomPoints(Rooms.BEDROOM_2);
    },
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new BedRoomTransitionController(this);
      this.isReady();
    },
  },
};
