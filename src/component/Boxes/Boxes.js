import { AbstractTransitionComponent } from 'vue-transition-component';
import BoxesTransitionController from './BoxesTransitionController';
import { match } from '../../store/utils';

// @vue/component
export default {
  name: 'Boxes',
  extends: AbstractTransitionComponent,
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
      this.transitionController = new BoxesTransitionController(this);
      this.isReady();
    },
  },
};
