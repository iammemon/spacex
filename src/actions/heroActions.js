import {Observable} from 'rxjs';

import * as actionTypes from '../constants/actionTypes';
import * as config from '../constants/appConfig';
import {canvas} from '../canvas';
import {laserSound} from '../sounds';

export function spaceShipEpic(action$){

    return action$.ofType(actionTypes.START_APP)
                  .merge(Observable.fromEvent(canvas,'mousemove'))
                  .filter(e=> e instanceof MouseEvent)
                  .map(payload=>({type:actionTypes.SPACESHIP_MOVE,payload}))
                  .takeUntil(action$.ofType(actionTypes.GAME_OVER))
}

export function spaceShipFiringEpic(action$,store){
    
    return action$.ofType(actionTypes.START_APP)
                  .merge(Observable.fromEvent(canvas,'click'))
                  .filter(e=> e instanceof MouseEvent)
                  .do(()=>laserSound.play())
                  .merge(Observable.interval(config.SPEED))
                  .map(payload=>({type:actionTypes.SPACESHIP_FIRE,payload}))
                  .takeUntil(action$.ofType(actionTypes.GAME_OVER))
}




    


