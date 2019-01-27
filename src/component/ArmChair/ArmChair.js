import { AbstractTransitionComponent } from 'vue-transition-component';
import VueTypes from 'vue-types';
import ArmChairTransitionController from './ArmChairTransitionController';
import { match } from '../../store/utils';

// [100 - 66, 66-33, 0]
// @vue/component
export default {
  name: 'ArmChair',
  extends: AbstractTransitionComponent,
  props: {
    points: VueTypes.number.isRequired,
  },
  computed: {
    activeStep() {
      let step;
      match(this.points)
        .on(
          p => p <= 100 && p > 60,
          () => {
            step = 1;
          },
        )
        .on(
          p => p <= 60 && p > 0,
          () => {
            step = 2;
          },
        )
        .on(
          p => p === 0,
          () => {
            step = 3;
          },
        );
      return step;
    },
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new ArmChairTransitionController(this);
      this.isReady();
    },
  },
};
