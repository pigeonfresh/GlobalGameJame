import ROOMS from '../../../data/enum/Rooms';
import { GET_CURRENT_STEP } from '../step/step';
import eventBus from '../../../util/eventBus';
import SOUND_FX from '../../../data/enum/SoundFX';

const namespace = 'cat';
const ROOM = 'room';
const STATUS = 'status';
const TIMER = 'timer';
const ACTION_COUNTER = 'actionCounter';
const INTERVAL = 'interval';
const MOVE_CAT = `${namespace}/MOVE_CAT`;
export const INIT_CAT = `${namespace}/INIT_CAT`;
export const GET_CAT_ROOM = `${namespace}/GET_CAT_ROOM`;
export const GET_CAT_STATUS = `${namespace}/GET_CAT_STATUS`;
export const GET_ACTION_COUNTER = `${namespace}/GET_ACTION_COUNTER`;
export const START_TIMER = `${namespace}/START_TIMER`;
export const START_MEOW = `${namespace}/START_MEOW`;
export const STAR_HAVOC = `${namespace}/STAR_HAVOC`;
export const DO_ACTION_TO_CAT = `${namespace}/DO_ACTION_TO_CAT`;
export const START_HANDLED = `${namespace}/START_HANDLED`;
export const DO_DESTRUCTION = `${namespace}/DO_DESTRUCTION`;
export const SET = `${namespace}/SET`;

const IDLE_TIME = 2000;
const MEOW_TIME = 2000;
const HAVOC_TIME = 4000;
const DESTRUCTION_INTERVAL = 1000;

const ACTION_TO_MAX = 4;

const CAT_STATUS = {
  IDLE: 'IDLE',
  MEOWING: 'MEOW',
  CREATING_CAOS: 'CREATING_CAOS',
  BEING_PET: 'BEING_PET',
  BEING_STOPPED: 'BEING_STOPPED',
  NEUTRALIZED: 'NEUTRALIZED',
};

export default {
  state: {
    [ROOM]: null,
    [STATUS]: CAT_STATUS.IDLE,
    [TIMER]: null,
    [INTERVAL]: null,
    [ACTION_COUNTER]: 0,
  },
  getters: {
    [GET_CAT_ROOM]: state => state[ROOM],
    [GET_CAT_STATUS]: state => {
      if (!state[ACTION_COUNTER] || state[STATUS] === CAT_STATUS.NEUTRALIZED) {
        return state[STATUS];
      }
      return state[STATUS] === CAT_STATUS.CREATING_CAOS
        ? CAT_STATUS.BEING_STOPPED
        : CAT_STATUS.BEING_PET;
    },
    [GET_ACTION_COUNTER]: state => state[ACTION_COUNTER],
  },
  mutations: {
    [SET]: (state, { key, value }) => {
      state[key] = value;
    },
  },
  actions: {
    [START_TIMER]: ({ commit, dispatch }) => {
      commit(SET, { key: ACTION_COUNTER, value: 0 });
      commit(SET, { key: STATUS, value: CAT_STATUS.IDLE });
      const timer = setTimeout(() => {
        dispatch(START_MEOW);
      }, IDLE_TIME);
      commit(SET, { key: TIMER, value: timer });
    },
    [START_MEOW]: ({ commit, dispatch, state }) => {
      commit(SET, { key: STATUS, value: CAT_STATUS.MEOWING });
      state[ACTION_COUNTER] === 0 && eventBus.$emit('play-sound-fx', SOUND_FX.MEOW);
      const timer = setTimeout(() => {
        dispatch(STAR_HAVOC);
      }, MEOW_TIME);
      commit(SET, { key: TIMER, value: timer });
    },
    [STAR_HAVOC]: ({ commit, dispatch, state }) => {
      commit(SET, { key: ACTION_COUNTER, value: 0 });
      commit(SET, { key: STATUS, value: CAT_STATUS.CREATING_CAOS });
      const timer = setTimeout(() => {
        dispatch(MOVE_CAT);
        clearInterval(state[INTERVAL]);
      }, HAVOC_TIME);

      dispatch(DO_DESTRUCTION);
      const interval = setInterval(() => {
        dispatch(DO_DESTRUCTION);
      }, DESTRUCTION_INTERVAL);
      commit(SET, { key: INTERVAL, value: interval });
      commit(SET, { key: TIMER, value: timer });
    },
    [START_HANDLED]: ({ commit, state, dispatch }) => {
      eventBus.$emit('play-sound-fx', SOUND_FX.PURR);
      clearTimeout(state[TIMER]);
      state[INTERVAL] && clearInterval(state[INTERVAL]);
      commit(SET, { key: STATUS, value: CAT_STATUS.NEUTRALIZED });
      const timer = setTimeout(() => dispatch(MOVE_CAT), IDLE_TIME);
      commit(SET, { key: TIMER, value: timer });
    },
    [DO_ACTION_TO_CAT]: ({ commit, state, dispatch }) => {
      const counter = state[ACTION_COUNTER];
      if ([CAT_STATUS.IDLE, CAT_STATUS.MEOWING, CAT_STATUS.CREATING_CAOS].includes(state[STATUS])) {
        commit(SET, { key: ACTION_COUNTER, value: counter + 1 });
        eventBus.$emit('play-sound-fx', SOUND_FX.PETTING);
        if (counter === ACTION_TO_MAX - 1) {
          dispatch(START_HANDLED);
        }
      }
    },
    [DO_DESTRUCTION]: () => {
      console.log('DESTROIIIIIII!!!');
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
      ].filter(r => r !== state[ROOM] && r !== getters[GET_CURRENT_STEP]); // dont go if player is there
      const randomRoom = Math.floor(Math.random() * (catRooms.length - 1));
      dispatch(START_TIMER);
      commit(SET, { key: ROOM, value: catRooms[randomRoom] });
    },
    [INIT_CAT]: ({ dispatch }) => {
      dispatch(MOVE_CAT);
    },
  },
};
