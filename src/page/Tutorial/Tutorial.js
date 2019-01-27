import { AbstractPageTransitionComponent } from 'vue-transition-component';
import TutorialTransitionController from './TutorialTransitionController';
import GlobalEvents from 'vue-global-events';
import { RouteNames } from '../../router/routes';

// @vue/component
export default {
  name: 'Tutorial',
  extends: AbstractPageTransitionComponent,
  components: {
    GlobalEvents,
  },
  methods: {
    nextScreen() {
      this.$router.push(RouteNames.GAME);
    },
    handleAllComponentsReady() {
      this.transitionController = new TutorialTransitionController(this);
      this.isReady();
    },
  },
};
