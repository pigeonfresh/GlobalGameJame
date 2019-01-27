import { mapGetters } from 'vuex';
import ArmChair from '../ArmChair';
import Vase from '../Vase';
import { GET_ROOM } from '../../store/module/rooms/rooms';
import ROOMS from '../../data/enum/Rooms';

// @vue/component
export default {
  name: 'LivingRoom',
  components: {
    ArmChair,
    Vase,
  },
  computed: {
    ...mapGetters({
      getRoom: GET_ROOM,
    }),
    living1Points() {
      return this.getRoom(ROOMS.LIVINGROOM_1).points;
    },
    living2Points() {
      return this.getRoom(ROOMS.LIVINGROOM_2).points;
    },
  },
};
