import { AbstractTransitionComponent } from 'vue-transition-component';
import VueTypes from 'vue-types';
import VaseTransitionController from './VaseTransitionController';
import { match } from '../../store/utils';

// @vue/component
export default {
  name: 'Vase',
  extends: AbstractTransitionComponent,
  props: {
    points: VueTypes.number.isRequired,
  },
  computed: {
    activeStep() {
      let step;
      match(this.points)
        .on(
          p => p <= 100 && p > 75,
          () => {
            step = 1;
          },
        )
        .on(
          p => p <= 75 && p > 50,
          () => {
            step = 2;
          },
        )
        .on(
          p => p <= 50 && p > 0,
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
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new VaseTransitionController(this);
      this.isReady();
    },
  },
};
