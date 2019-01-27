// @vue/component
import { mapGetters } from 'vuex';
import Sandbox from '../Sandbox';
import Boxes from '../Boxes';
import Rooms from '../../data/enum/Rooms';
import { GET_ROOM } from '../../store/module/rooms/rooms';

export default {
  name: 'Basement',
  components: {
    Sandbox,
    Boxes,
  },
  computed: {
    ...mapGetters({
      getRoom: GET_ROOM,
    }),
    sandBox() {
      return this.getRoom(Rooms.BASEMENT_2);
    },
  },
};
