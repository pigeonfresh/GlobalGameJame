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
            /* do stuff */
          },
        )
        .on(
          d => d === DIRECTIONS.DOWN,
          () => {
            /* do stuff */
          },
        );
    },
  },
  actions: {},
};
