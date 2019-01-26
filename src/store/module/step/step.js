import ROOMS from '../../../data/enum/Rooms';
import HOUSE from '../../../data/enum/House';
import { match } from '../../utils';

const namespace = 'step';

export const MOVE = `${namespace}/MOVE`;
export const GET_CURRENT_STEP = `${namespace}/GET_CURRENT_STEP`;

const CURRENT_STEP = 'currentStep';
const CURRENT_FLOOR = 'currentFloor';
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
  },
  getters: {
    [GET_CURRENT_STEP]: state => HOUSE[state[CURRENT_FLOOR]][state[CURRENT_STEP]],
  },
  mutations: {
    [MOVE]: (state, { direction }) => {
      match(direction)
        .on(
          d => d === DIRECTIONS.LEFT,
          () => {
            const newStep = Math.max(state[CURRENT_STEP] - 1, 0);
            state[CURRENT_STEP] = newStep;
          },
        )
        .on(
          d => d === DIRECTIONS.RIGHT,
          () => {
            const maxStepFloor = HOUSE[state[CURRENT_FLOOR]].length - 1;
            const newStep = Math.min(state[CURRENT_STEP] + 1, maxStepFloor);
            state[CURRENT_STEP] = newStep;
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
                  state[CURRENT_FLOOR] = 1;
                  state[CURRENT_STEP] = HOUSE[1].findIndex(r => r === ROOMS.MIDDLE_STAIRS_2);
                },
              )
              .on(
                s => s === ROOMS.MIDDLE_STAIRS_1,
                () => {
                  state[CURRENT_FLOOR] = 0;
                  state[CURRENT_STEP] = HOUSE[0].findIndex(r => r === ROOMS.TOP_STAIRS);
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
                  state[CURRENT_FLOOR] = 1;
                  state[CURRENT_STEP] = HOUSE[1].findIndex(r => r === ROOMS.MIDDLE_STAIRS_1);
                },
              )
              .on(
                s => s === ROOMS.MIDDLE_STAIRS_2,
                () => {
                  state[CURRENT_FLOOR] = 2;
                  state[CURRENT_STEP] = HOUSE[2].findIndex(r => r === ROOMS.BOTTOM_STAIRS);
                },
              );
          },
        );
    },
  },
  actions: {},
};
