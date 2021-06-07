'use strict';

import { INC_POINTS, SET_IS_RESTART, SET_POP_AM_ALL } from '../../actions/appActions';

export interface IAppState {
    points: number;
    isRestart: boolean;
    colors: string[];
    soundSrc: string;
    isPopEmAll: boolean;
}

const initialState: IAppState = {
    points: 0,
    isRestart: false,
    colors: ['#268BD2', '#1EA198', '#CEA627', '#FDF6E3', '#9698D6', '#CEA627', '#1EA198', '#268BD2'],
    soundSrc: "resources/popSound.mp3",
    isPopEmAll: false,
};

export const appReducer = (state: IAppState = initialState, action): IAppState => {
    switch (action.type) {
        case INC_POINTS: {
            return {
                ...state,
                points: ++state.points,
            }
        }
        case SET_IS_RESTART: {
            return {
                ...state,
                isRestart: action.payload,
            }
        }
        case SET_POP_AM_ALL: {
            return {
                ...state,
                isPopEmAll: action.payload,
            }
        }
        default:
            return state;
    }
};
