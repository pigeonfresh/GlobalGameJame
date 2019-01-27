import { AbstractTransitionComponent } from 'vue-transition-component';
import VueTypes from 'vue-types';
import ToiletPaperTransitionController from './ToiletPaperTransitionController';

// @vue/component
export default {
  name: 'ToiletPaper',
  extends: AbstractTransitionComponent,
  props: {
    points: VueTypes.number.isRequired,
  },
  computed: {
    activeStep() {
      return 1;
    },
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new ToiletPaperTransitionController(this);
      this.isReady();
    },
  },
};
