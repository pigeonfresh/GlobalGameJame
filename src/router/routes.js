import HomePage from '../page/HomePage';
import GamePage from '../page/GamePage';

export const RouteNames = {
  HOME: 'home',
  GAME: 'game',
};

export default [
  {
    path: '/',
    component: HomePage,
    name: RouteNames.HOME,
  },
  {
    path: '/game',
    component: GamePage,
    name: RouteNames.GAME,
  },
];
