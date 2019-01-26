import { AbstractPageTransitionComponent } from 'vue-transition-component';
import HomePageTransitionController from './HomePageTransitionController';
import GlobalEvents from 'vue-global-events';
import { RouteNames } from '../../router/routes';

// @vue/component
export default {
  name: 'HomePage',
  extends: AbstractPageTransitionComponent,
  components: {
    GlobalEvents,
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new HomePageTransitionController(this);
      this.isReady();
    },
    handleSpaceBarClick() {
      this.$router.push({ name: RouteNames.TUTORIAL });
    },
  },
};
