import { hero } from '../constants/defaultState';
import {IsVisible} from '../constants/helpers';
import * as actionTypes from '../constants/actionTypes';
import * as config from '../constants/appConfig';

const defaultState = hero();

export default function reducer(state = defaultState, action) {

    switch (action.type) {
        case actionTypes.SPACESHIP_MOVE: {
            return {
                ...state,
                x: action.payload.clientX
            }
        }
        case actionTypes.SPACESHIP_FIRE: {

            let newShots = [];
            if (action.payload instanceof MouseEvent) {
                newShots = state.shots.concat([{
                    x: state.x,
                    y: state.y
                }])
            }
            else {
                newShots = state.shots.map(shot => {
                    shot.y -= config.SHOOTING_SPEED
                    return shot;
                })
                newShots=newShots.filter(IsVisible)
            }
            return {
                ...state,
                shots: newShots
            };

        }
        default: {
            return state;
        }
    }

}