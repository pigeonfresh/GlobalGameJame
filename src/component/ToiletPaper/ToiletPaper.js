import { AbstractTransitionComponent } from 'vue-transition-component';
import VueTypes from 'vue-types';
import ToiletPaperTransitionController from './ToiletPaperTransitionController';
import { match } from '../../store/utils';

// @vue/component
export default {
  name: 'ToiletPaper',
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
      this.transitionController = new ToiletPaperTransitionController(this);
      this.isReady();
    },
  },
};
