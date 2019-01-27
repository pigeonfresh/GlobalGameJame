import { AbstractTransitionComponent } from 'vue-transition-component';
import VueTypes from 'vue-types';
import BoxesTransitionController from './BoxesTransitionController';

// @vue/component
export default {
  name: 'Boxes',
  extends: AbstractTransitionComponent,
  props: {
    points: VueTypes.number.isRequired,
    needsAction: VueTypes.bool.isRequired,
  },
  computed: {
    showWithoutBox() {
      return this.needsAction && false;
    },
    showNormal() {
      return !this.needsAction;
    },
    showMess() {
      return this.needsAction;
    },
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new BoxesTransitionController(this);
      this.isReady();
    },
  },
};
