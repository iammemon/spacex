import {Observable} from 'rxjs';

import * as actionTypes from '../constants/actionTypes';
import * as config from '../constants/appConfig';

export function enemyEpic(action$){
    return action$.ofType(actionTypes.START_APP)
                  .switchMap(()=>Observable.interval(config.ENEMY_FREQ))
                  .map(()=>({type:actionTypes.CREATE_ENEMY}))
                  .takeUntil(action$.ofType(actionTypes.GAME_OVER))
}

export function enemiesMoveEpic(action$){
    return action$.ofType(actionTypes.CREATE_ENEMY)
                  .switchMap(()=>Observable.interval(config.SPEED))
                  .map(()=>({type:actionTypes.MOVE_ENEMIES}))
                  .takeUntil(action$.ofType(actionTypes.GAME_OVER))
}

export function enemiesFireEpic(action$){
    return action$.ofType(actionTypes.CREATE_ENEMY)
                  .switchMap(()=>{
                     return Observable.interval(config.SPEED)
                                .merge(Observable.interval(config.ENEMY_SHOOTING_FREQ).map(()=>'FIRE'))
                   })
                  .map(payload=>({type:actionTypes.ENEMIES_FIRING,payload}))
                  .takeUntil(action$.ofType(actionTypes.GAME_OVER))
}