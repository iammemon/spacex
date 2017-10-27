import 'rxjs';

import {paintStars,paintScore,paintGameOver,paintWelcome} from './canvas';
import  store from './store';
import {bootstrap} from './actions/appActions'
import {titleTheme} from './sounds';
import {paintSpaceShip,paintHeroShots,paintEnemies} from './constants/helpers';

// store.dispatch({type:'START_APP'})
titleTheme.play();

store.subscribe(()=>{
   
   paintStars(store.getState().stars);
   paintSpaceShip(store.getState().hero);
   paintHeroShots(store.getState().hero.shots);
   paintEnemies(store.getState().enemies);
   paintScore(store.getState().app.score);
   paintGameOver(store.getState().app.gameover);
   paintWelcome(store.getState().app.Isstart);
   
})
