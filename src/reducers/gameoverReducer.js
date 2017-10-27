import * as actionTypes from '../constants/actionTypes';

export default function reducer(state=false,action){

    switch(action.type){
        case actionTypes.GAME_OVER:{
            return true;
        }
        default:{
            return state;
        }
    }
}