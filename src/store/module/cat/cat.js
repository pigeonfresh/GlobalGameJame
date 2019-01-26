import ROOMS from '../../../data/enum/Rooms';
import { GET_CURRENT_STEP } from '../step/step';

const namespace = 'cat';
const ROOM = 'room';
const STATUS = 'status';
const TIMER = 'TIMER';
const SET_ROOM = `${namespace}/SET_ROOM`;
const MOVE_CAT = `${namespace}/MOVE_CAT`;
const SET_STATUS = `${namespace}/SET_STATUS`;
export const INIT_CAT = `${namespace}/INIT_CAT`;
export const GET_CAT_ROOM = `${namespace}/GET_CAT_ROOM`;
export const GET_CAT_STATUS = `${namespace}/GET_CAT_STATUS`;
export const START_TIMER = `${namespace}/START_TIMER`;
export const START_MEOW = `${namespace}/START_MEOW`;
export const STAR_HAVOC = `${namespace}/STAR_HAVOC`;
export const SET_TIMER = `${namespace}/SET_TIMER`;

const IDLE_TIME = 2000;
const MEOW_TIME = 2000;
const HAVOC_TIME = 4000;

const CAT_STATUS = {
  IDLE: 'IDLE',
  MEOWING: 'MEOW',
  CREATING_CAOS: 'CREATING_CAOS',
  BEING_PET: 'BEING_PET',
  NEUTRALIZED: 'NEUTRALIZED',
};

export default {
  state: {
    [ROOM]: null,
    [STATUS]: CAT_STATUS.IDLE,
    [TIMER]: null,
  },
  getters: {
    [GET_CAT_ROOM]: state => state[ROOM],
    [GET_CAT_STATUS]: state => state[STATUS],
  },
  mutations: {
    [SET_ROOM]: (state, room) => {
      state[ROOM] = room;
    },
    [SET_STATUS]: (state, status) => {
      state[STATUS] = status;
    },
    [SET_TIMER]: (state, timer) => {
      state[TIMER] = timer;
    },
  },
  actions: {
    [START_TIMER]: ({ commit, dispatch }) => {
      commit(SET_STATUS, CAT_STATUS.IDLE);
      const timer = setTimeout(() => {
        dispatch(START_MEOW);
      }, IDLE_TIME);
      commit(SET_TIMER, timer);
    },
    [START_MEOW]: ({ commit, dispatch }) => {
      commit(SET_STATUS, CAT_STATUS.MEOWING);
      const timer = setTimeout(() => {
        dispatch(STAR_HAVOC);
      }, MEOW_TIME);
      commit(SET_TIMER, timer);
    },
    [STAR_HAVOC]: ({ commit, dispatch }) => {
      commit(SET_STATUS, CAT_STATUS.CREATING_CAOS);
      const timer = setTimeout(() => {
        dispatch(MOVE_CAT);
      }, HAVOC_TIME);
      commit(SET_TIMER, timer);
    },
    [MOVE_CAT]: ({ commit, dispatch, state, getters }) => {
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
      ].filter(r => r !== state[ROOM] || r === getters[GET_CURRENT_STEP]); // dont go if player is there
      const randomRoom = Math.floor(Math.random() * catRooms.length - 1);
      dispatch(START_TIMER);
      commit(SET_ROOM, catRooms[randomRoom]);
    },
    [INIT_CAT]: ({ dispatch }) => {
      dispatch(MOVE_CAT);
    },
  },
};
