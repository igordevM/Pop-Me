'use strict';

import { combineReducers } from 'redux';

import { appReducer } from './ownReducers/appReducer';

export const rootReducer = combineReducers({
    appState: appReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;
