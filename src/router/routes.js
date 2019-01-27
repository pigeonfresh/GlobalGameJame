import HomePage from '../page/HomePage';
import GamePage from '../page/GamePage';
import Tutorial from '../page/Tutorial';
import GameOver from '../page/GameOver';

export const RouteNames = {
  HOME: 'home',
  GAME: 'game',
  TUTORIAL: 'tutorial',
  GAME_OVER: 'game-over',
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
  {
    path: '/game-over',
    component: GameOver,
    name: RouteNames.GAME_OVER,
  },
];
