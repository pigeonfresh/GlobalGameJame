import { mapGetters } from 'vuex';
import ArmChair from '../ArmChair';
import { GET_ROOM_POINTS } from '../../store/module/rooms/rooms';
import ROOMS from '../../data/enum/Rooms';

// @vue/component
export default {
  name: 'LivingRoom',
  components: {
    ArmChair,
  },
  computed: {
    ...mapGetters({
      getRoomPoints: GET_ROOM_POINTS,
    }),
    living1Points() {
      return this.getRoomPoints(ROOMS.LIVINGROOM_1);
    },
    living2Points() {
      return this.getRoomPoints(ROOMS.LIVINGROOM_2);
    },
  },
};
