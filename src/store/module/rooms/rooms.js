import { match } from '../../utils';
import { GET_CAT_ROOM } from '../cat/cat';
import ROOM from '../../../data/enum/Rooms';
import eventBus from '../../../util/eventBus';
import SOUND_FX from '../../../data/enum/SoundFX';

const namespace = 'rooms';

const ROOMS = 'rooms';
const INTERVAL = 'interval';
export const CAT_DETROYING = `${namespace}/CAT_DETROYING`;
export const DESTROY_ROOM = `${namespace}/DESTROY_ROOM`;
export const GET_ROOM = `${namespace}/GET_ROOM`;
export const GET_UNDESTROYED_ROOMS = `${namespace}/GET_UNDESTROYED_ROOMS`;
export const DESTROY_SOUNDS = `${namespace}/DESTROY_SOUNDS`;
export const SET = `${namespace}/SET`;
export const TIMER_SUBTRACT_POINTS = `${namespace}/TIMER_SUBTRACT_POINTS`;
export const SUBSTRACT_POINTS = `${namespace}/SUBSTRACT_POINTS`;
export const HANDLE_ROOM_FIX = `${namespace}/HANDLE_ROOM_FIX`;
export const RESET_ROOM = `${namespace}/RESET_ROOM`;
export const GET_SCORE = `${namespace}/GET_SCORE`;
export const ROOM_STOP_DESTRUCTION = `${namespace}/ROOM_STOP_DESTRUCTION`;

const DESTRUCTION_STEP = 10;
const SUBSTRACT_TIME = 1000;

export default {
  state: {
    [INTERVAL]: null,
    [ROOMS]: {
      [ROOM.TOILETTE]: { points: 100, canFix: true, pointable: true },
      [ROOM.LIVINGROOM_1]: { points: 100, canFix: false, pointable: true },
      [ROOM.BATHROOM_2]: { points: 100, canFix: true, pointable: true },
      [ROOM.BEDROOM_1]: { points: 100, canFix: false, pointable: true },
      [ROOM.LIVINGROOM_2]: { points: 100, canFix: true, pointable: true },
      [ROOM.KITCHEN_1]: { needsAction: false, points: 0, pointable: false },
      [ROOM.KITCHEN_2]: { needsAction: false, points: 0, pointable: false },
      [ROOM.BASEMENT_1]: { needsAction: false, points: 0, pointable: false },
      [ROOM.BASEMENT_2]: { needsAction: false, points: 0, pointable: false },
      [ROOM.BEDROOM_2]: { points: 0, needsAction: false, nocato: true }, // phone hanged
      // [ROOM.BASEMENT_3]: { points: 100 },
      // [ROOM.BASEMENT_4]: { points: 100 },
      // [ROOM.BATHROOM_1]: { points: 100 },
    },
  },
  getters: {
    [GET_SCORE]: state =>
      Object.keys(state[ROOMS]).reduce((total, roomKey) => {
        const res = total + state[ROOMS][roomKey].points;
        return res;
      }, 0),
    [GET_ROOM]: state => room => state[ROOMS][room],
    [GET_UNDESTROYED_ROOMS]: state =>
      Object.keys(state[ROOMS]).reduce((rooms, roomKey) => {
        if (
          ((state[ROOMS][roomKey].pointable && state[ROOMS][roomKey].points > 0) ||
            (!state[ROOMS][roomKey].pointable && !state[ROOMS][roomKey].needsAction)) &&
          !state[ROOMS][roomKey].nocato
        )
          rooms.push(roomKey);
        return rooms;
      }, []),
  },
  mutations: {
    [RESET_ROOM]: (state, { room }) => {
      if (state[ROOMS][room]) {
        if (state[ROOMS][room].pointable) {
          state[ROOMS][room].points = 100;
        } else {
          state[ROOMS][room].needsAction = false;
        }
      }
    },
    [DESTROY_ROOM]: (state, { room }) => {
      if (state[ROOMS][room]) {
        if (state[ROOMS][room].pointable) {
          state[ROOMS][room].points = Math.max(0, state[ROOMS][room].points - DESTRUCTION_STEP);
        } else {
          state[ROOMS][room].needsAction = true;
        }
      }
    },
    [SET]: (state, { key, value }) => {
      state[key] = value;
    },
    [SUBSTRACT_POINTS]: (state, room) => {
      state[ROOMS][room].points -= DESTRUCTION_STEP;

      match(room).on(
        r => r === ROOM.BEDROOM_2,
        () => eventBus.$emit('play-sound-fx', SOUND_FX.PHONERINGING),
      );
    },
  },
  actions: {
    [ROOM_STOP_DESTRUCTION]: ({ state }) => {
      clearInterval(state[INTERVAL]);
    },
    [CAT_DETROYING]: ({ getters, commit, dispatch }) => {
      const currentRoom = getters[GET_CAT_ROOM];
      commit(DESTROY_ROOM, { room: currentRoom });
      dispatch(DESTROY_SOUNDS, currentRoom);
    },
    [DESTROY_SOUNDS]: ({ state }, room) => {
      match(room)
        .on(
          r =>
            [
              ROOM.LIVINGROOM_1,
              ROOM.BEDROOM_1,
              ROOM.TOILETTE,
              ROOM.BASEMENT_1,
              ROOM.BATHROOM_2,
            ].includes(r),
          () => eventBus.$emit('play-sound-fx', SOUND_FX.SCRATCHING),
        )
        .on(
          r => r === ROOM.LIVINGROOM_2 && state[ROOMS][ROOM.LIVINGROOM_2].points === 10,
          () => eventBus.$emit('play-sound-fx', SOUND_FX.VASEBREAKING),
        )
        .on(r => r === ROOM.KITCHEN_2, () => eventBus.$emit('play-sound-fx', SOUND_FX.NOM))
        .on(r => r === ROOM.KITCHEN_1, () => eventBus.$emit('play-sound-fx', SOUND_FX.FIRE));
    },
    [HANDLE_ROOM_FIX]: ({ commit }, roomKey) => {
      commit(RESET_ROOM, { room: roomKey });
    },
    [TIMER_SUBTRACT_POINTS]: ({ commit, state }) => {
      const interval = setInterval(() => {
        // TELEPHONE RANDOM RING
        const ran = Math.floor(Math.random() * 30);
        if (ran === 10) {
          commit(DESTROY_ROOM, { room: ROOM.BEDROOM_2 });
        }

        Object.keys(state[ROOMS]).forEach(roomKey => {
          if (state[ROOMS][roomKey].needsAction) {
            commit(SUBSTRACT_POINTS, roomKey);
          }
        });
      }, SUBSTRACT_TIME);
      commit(SET, { key: INTERVAL, value: interval });
    },
  },
};
