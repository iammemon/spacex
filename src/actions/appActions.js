import { Observable } from 'rxjs';

import * as actionTypes from '../constants/actionTypes';
import * as config from '../constants/appConfig';
import { collision } from '../constants/helpers';
import { canvas } from '../canvas'; 
import {gameOverSound,backgroundMusic,hitSound,startVoiceSound,titleTheme} from '../sounds';



export function startAppEpic(action$,store){
    return Observable.fromEvent(document,'keypress')
                     .map(e=> e.which|| e.keyCode)
                     .filter(e=>e==13)
                     .do(()=>{titleTheme.stop();startVoiceSound.play()})
                     .delay(1000)
                     .map(()=>({type:actionTypes.START_APP}))
                     .take(1);
}

export function countScoreEpic(action$,store){
    return action$.ofType(actionTypes.START_APP)
                  .do(()=>backgroundMusic.play())
                  .switchMap(()=>Observable.interval(config.SPEED))
                  .map(()=>store.getState())
                  .map((store)=>{
                     let result=null;
                     store.hero.shots.forEach((shot,heroShotIndex)=>{
                          store.enemies.forEach((enemy,enemyIndex)=>{
                              if(!enemy.Isdead && collision(shot,enemy)){                                 
                                  result= {
                                      enemyIndex,
                                      heroShotIndex


                                  }
                                  return;
                              }
                          })
                      })
                      return result;
                  })
                  .filter(payload=>payload!=null)
                  .do(()=>hitSound.play())
                  .map(payload=>({type:actionTypes.SCORE_UPDATE,payload}))
}

export function gameOverEpic(action$, store) {
    
    return action$.ofType(actionTypes.START_APP)
                  .switchMap(()=>Observable.interval(config.SPEED))
                  .map(()=>store.getState())
                  .filter((state)=>{
                      return state.enemies.some(enemy=>{
                          if(collision(enemy,state.hero)){
                              return true
                          }
                          return enemy.shots.some(shot=>{
                              return collision(state.hero,shot);
                          })
                      })
                  })
                  .take(1)
                  .do(()=>{
                      backgroundMusic.stop();
                      gameOverSound.play();
                  })
                  .map(()=>({type:actionTypes.GAME_OVER}))
}

