import { mapGetters } from 'vuex';
import ToiletPaper from '../ToiletPaper';
import { GET_ROOM } from '../../store/module/rooms/rooms';
import Rooms from '../../data/enum/Rooms';

// @vue/component
export default {
  name: 'Toilette',
  components: {
    ToiletPaper,
  },
  computed: {
    ...mapGetters({
      getRoom: GET_ROOM,
    }),
    toiletPoints() {
      return this.getRoom(Rooms.TOILETTE).points;
    },
  },
};
