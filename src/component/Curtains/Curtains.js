import VueTypes from 'vue-types';
import { match } from '../../store/utils';

// @vue/component
export default {
  name: 'Curtains',
  props: {
    points: VueTypes.number.isRequired,
  },
  computed: {
    activeStep() {
      let step;
      match(this.points)
        .on(
          p => p <= 100 && p > 70,
          () => {
            step = 1;
          },
        )
        .on(
          p => p <= 70 && p > 40,
          () => {
            step = 2;
          },
        )
        .on(
          p => p <= 40 && p > 10,
          () => {
            step = 3;
          },
        )
        .on(
          p => p === 0,
          () => {
            step = 4;
          },
        );
      return step;
    },
  },
};
