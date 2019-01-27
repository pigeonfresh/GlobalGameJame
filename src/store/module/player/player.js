import ROOMS from '../../../data/enum/Rooms';
import HOUSE from '../../../data/enum/House';
import { match } from '../../utils';
import eventBus from '../../../util/eventBus';
import SOUND_FX from '../../../data/enum/SoundFX';
import { GET_ROOM } from '../rooms/rooms';

const namespace = 'player';

export const MOVE = `${namespace}/MOVE`;
export const GET_CURRENT_STEP = `${namespace}/GET_CURRENT_STEP`;
export const GET_DIRECTION = `${namespace}/GET_DIRECTION`;
export const GET_ACTION_COUNTER = `${namespace}/GET_ACTION_COUNTER`;
export const DO_PLAYER_ACTION = `${namespace}/DO_PLAYER_ACTION`;
export const SET = `${namespace}/SET`;

const CURRENT_STEP = 'currentStep';
const CURRENT_FLOOR = 'currentFloor';
const DIRECTION = 'direction';
const ACTION_COUNTER = 'actionCounter';

const MAX_ACTIONS_COUNTER = 4;

const DIRECTIONS = {
  UP: 'ArrowUp',
  DOWN: 'ArrowDown',
  LEFT: 'ArrowLeft',
  RIGHT: 'ArrowRight',
};

export default {
  state: {
    [CURRENT_FLOOR]: 1,
    [CURRENT_STEP]: 0,
    [DIRECTION]: null,
    [ACTION_COUNTER]: 0,
  },
  getters: {
    [GET_CURRENT_STEP]: state => HOUSE[state[CURRENT_FLOOR]][state[CURRENT_STEP]],
    [GET_DIRECTION]: state => state[DIRECTION],
    [GET_ACTION_COUNTER]: state => state[ACTION_COUNTER],
  },
  mutations: {
    [SET]: (state, { key, value }) => {
      state[key] = value;
    },
    [MOVE]: (state, { direction }) => {
      match(direction)
        .on(
          d => d === DIRECTIONS.LEFT,
          () => {
            const newStep = Math.max(state[CURRENT_STEP] - 1, 0);
            state[DIRECTION] = DIRECTIONS.LEFT;
            state[CURRENT_STEP] = newStep;
            eventBus.$emit('play-sound-fx', SOUND_FX.FOOTSTEP);
            state[ACTION_COUNTER] = 0;
          },
        )
        .on(
          d => d === DIRECTIONS.RIGHT,
          () => {
            const maxStepFloor = HOUSE[state[CURRENT_FLOOR]].length - 1;
            const newStep = Math.min(state[CURRENT_STEP] + 1, maxStepFloor);
            state[DIRECTION] = DIRECTIONS.RIGHT;
            state[CURRENT_STEP] = newStep;
            eventBus.$emit('play-sound-fx', SOUND_FX.FOOTSTEP);
            state[ACTION_COUNTER] = 0;
          },
        )
        .on(
          d => d === DIRECTIONS.UP,
          () => {
            const currentStep = HOUSE[state[CURRENT_FLOOR]][state[CURRENT_STEP]];
            match(currentStep)
              .on(
                s => s === ROOMS.BOTTOM_STAIRS,
                () => {
                  state[DIRECTION] = DIRECTIONS.UP;
                  state[CURRENT_FLOOR] = 1;
                  state[CURRENT_STEP] = HOUSE[1].findIndex(r => r === ROOMS.MIDDLE_STAIRS_2);
                  eventBus.$emit('play-sound-fx', SOUND_FX.FOOTSTEP);
                },
              )
              .on(
                s => s === ROOMS.MIDDLE_STAIRS_1,
                () => {
                  state[DIRECTION] = DIRECTIONS.UP;
                  state[CURRENT_FLOOR] = 0;
                  state[CURRENT_STEP] = HOUSE[0].findIndex(r => r === ROOMS.TOP_STAIRS);
                  eventBus.$emit('play-sound-fx', SOUND_FX.FOOTSTEP);
                },
              );
          },
        )
        .on(
          d => d === DIRECTIONS.DOWN,
          () => {
            const currentStep = HOUSE[state[CURRENT_FLOOR]][state[CURRENT_STEP]];
            match(currentStep)
              .on(
                s => s === ROOMS.TOP_STAIRS,
                () => {
                  state[DIRECTION] = DIRECTIONS.DOWN;
                  state[CURRENT_FLOOR] = 1;
                  state[CURRENT_STEP] = HOUSE[1].findIndex(r => r === ROOMS.MIDDLE_STAIRS_1);
                  eventBus.$emit('play-sound-fx', SOUND_FX.FOOTSTEP);
                },
              )
              .on(
                s => s === ROOMS.MIDDLE_STAIRS_2,
                () => {
                  state[DIRECTION] = DIRECTIONS.DOWN;
                  state[CURRENT_FLOOR] = 2;
                  state[CURRENT_STEP] = HOUSE[2].findIndex(r => r === ROOMS.BOTTOM_STAIRS);
                  eventBus.$emit('play-sound-fx', SOUND_FX.FOOTSTEP);
                },
              );
          },
        );
    },
  },
  actions: {
    [DO_PLAYER_ACTION]: ({ getters, commit, state }) => {
      const roomKey = getters[GET_CURRENT_STEP];
      const room = getters[GET_ROOM](roomKey);
      console.log(room, roomKey);
      // if (state[ACTION_COUNTER] === MAX_ACTIONS_COUNTER) {
      //   console.log('FIXED!');
      // }
    },
  },
};
