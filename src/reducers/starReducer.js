import {stars} from '../constants/defaultState';
import {canvas} from '../canvas';
import * as actionTypes from '../constants/actionTypes';


const defaultState=stars();

export default function reducer(state=defaultState,action){
    switch(action.type){
        case actionTypes.MOVE_STARS:{

            return state.map((star)=>{
                if(star.y>=canvas.height){
                     star.y=0;
                }
                star.y+=3;
                return star
            })
            
        }
        default:{
            return state
        }
    }
}
