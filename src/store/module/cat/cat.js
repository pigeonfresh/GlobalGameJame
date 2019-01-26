import ROOMS from '../../../data/enum/Rooms';

const namespace = 'cat';
const ROOM = 'room';
const SET_ROOM = `${namespace}/SET_ROOM`;
const MOVE_CAT = `${namespace}/MOVE_CAT`;
export const INIT_CAT = `${namespace}/INIT_CAT`;
export const GET_CAT_ROOM = `${namespace}/GET_CAT_ROOM`;

export default {
  state: {
    [ROOM]: null,
  },
  getters: {
    [GET_CAT_ROOM]: state => state[ROOM],
  },
  mutations: {
    [SET_ROOM]: (state, room) => {
      state[ROOM] = room;
    },
  },
  actions: {
    [MOVE_CAT]: ({ commit, state }) => {
      const catRooms = [
        ROOMS.BEDROOM_1,
        ROOMS.BEDROOM_2,
        ROOMS.BATHROOM_1,
        ROOMS.BATHROOM_2,
        ROOMS.LIVINGROOM_1,
        ROOMS.LIVINGROOM_2,
        ROOMS.TOILETTE,
        ROOMS.KITCHEN_1,
        ROOMS.KITCHEN_2,
        ROOMS.BASEMENT_1,
        ROOMS.BASEMENT_2,
        ROOMS.BASEMENT_3,
        ROOMS.BASEMENT_4,
      ].filter(r => r !== state[ROOM]);
      const randomRoom = Math.floor(Math.random() * catRooms.length - 1);
      commit(SET_ROOM, catRooms[randomRoom]);
    },
    [INIT_CAT]: ({ dispatch }) => {
      // const interval =
      setInterval(() => {
        dispatch(MOVE_CAT);
      }, 5000);
    },
  },
};
