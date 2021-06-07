'use strict';

export const INC_POINTS = 'INC_POINTS';
export const SET_IS_RESTART = 'SET_RESTART';
export const SET_POP_AM_ALL = 'SET_POP_AM_ALL';

interface IIncPoints {
    type: typeof INC_POINTS;
}

interface ISetRestart {
    type: typeof SET_IS_RESTART;
    payload: boolean;
}

interface ISetPopAmAll {
    type: typeof SET_POP_AM_ALL;
    payload: boolean;
}

export const incPointsAction = (): IIncPoints => ({
    type: INC_POINTS,
});

export const setIsRestartAction = (payload: boolean): ISetRestart => ({
    type: SET_IS_RESTART,
    payload: payload,
})

export const setPopEmAllAction = (payload: boolean): ISetPopAmAll => ({
    type: SET_POP_AM_ALL,
    payload: payload,
})
