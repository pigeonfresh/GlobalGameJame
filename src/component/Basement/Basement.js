// @vue/component
import { mapGetters } from 'vuex';
import Sandbox from '../Sandbox';
import Rooms from '../../data/enum/Rooms';
import { GET_ROOM } from '../../store/module/rooms/rooms';

export default {
  name: 'Basement',
  components: {
    Sandbox,
  },
  computed: {
    ...mapGetters({
      getRoom: GET_ROOM,
    }),
    sandBoxPoints() {
      return this.getRoom(Rooms.BASEMENT_2).points;
    },
  },
};
