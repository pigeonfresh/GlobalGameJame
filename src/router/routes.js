import HomePage from '../page/HomePage';
import GamePage from '../page/GamePage';
import Tutorial from '../page/Tutorial';

export const RouteNames = {
  HOME: 'home',
  GAME: 'game',
  TUTORIAL: 'tutorial',
};

export default [
  {
    path: '/',
    component: HomePage,
    name: RouteNames.HOME,
  },
  {
    path: '/tutorial',
    component: Tutorial,
    name: RouteNames.TUTORIAL,
  },
  {
    path: '/game',
    component: GamePage,
    name: RouteNames.GAME,
  },
];
