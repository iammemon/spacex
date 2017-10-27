import * as actionTypes from '../constants/actionTypes';
import {app} from '../constants/defaultState';

const defaultState=app()

export default function reducer(state=defaultState,action){
    switch (action.type) {
        case actionTypes.SCORE_UPDATE:{
            return {
                ...state,
                score:state.score+10
            }
        }
        case actionTypes.GAME_OVER:{
            return {
                ...state,
                gameover:true
            }
        }
        case actionTypes.START_APP:{
            return {
                ...state,
                Isstart:true
            }
        }
        default:{
            return state;
        }
    }
}