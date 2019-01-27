import { GET_CAT_ROOM } from '../cat/cat';
import ROOM from '../../../data/enum/Rooms';

const namespace = 'rooms';

const ROOMS = 'rooms';
export const CAT_DETROYING = `${namespace}/CAT_DETROYING`;
export const DESTROY_ROOM = `${namespace}/DESTROY_ROOM`;
export const GET_ROOM_POINTS = `${namespace}/GET_ROOM_POINTS`;
export const GET_UNDESTROYED_ROOMS = `${namespace}/GET_UNDESTROYED_ROOMS`;

const DESTRUCTION_STEP = 10;

export default {
  state: {
    [ROOMS]: {
      [ROOM.BASEMENT_1]: 100,
      [ROOM.BASEMENT_2]: 100,
      [ROOM.BASEMENT_3]: 100,
      [ROOM.BASEMENT_4]: 100,
      [ROOM.BATHROOM_1]: 100,
      [ROOM.BATHROOM_2]: 100,
      [ROOM.BEDROOM_1]: 100,
      [ROOM.BEDROOM_2]: 100,
      [ROOM.KITCHEN_1]: 100,
      [ROOM.KITCHEN_2]: 100,
      [ROOM.LIVINGROOM_1]: 100,
      [ROOM.LIVINGROOM_2]: 100,
      [ROOM.TOILETTE]: 100,
    },
  },
  getters: {
    [GET_ROOM_POINTS]: state => room => state[ROOMS][room],
    [GET_UNDESTROYED_ROOMS]: state =>
      Object.keys(state[ROOMS]).reduce((rooms, roomKey) => {
        if (state[ROOMS][roomKey] > 0) rooms.push(roomKey);
        return rooms;
      }, []),
  },
  mutations: {
    [DESTROY_ROOM]: (state, { room }) => {
      state[ROOMS][room] = Math.max(0, state[ROOMS][room] - DESTRUCTION_STEP);
    },
  },
  actions: {
    [CAT_DETROYING]: ({ getters, commit }) => {
      const currentRoom = getters[GET_CAT_ROOM];
      commit(DESTROY_ROOM, { room: currentRoom });
    },
  },
};
