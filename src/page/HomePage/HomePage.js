import { AbstractPageTransitionComponent } from 'vue-transition-component';
import HomePageTransitionController from './HomePageTransitionController';
import GlobalEvents from 'vue-global-events';

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
  },
};
