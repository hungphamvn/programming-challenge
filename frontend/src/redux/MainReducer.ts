import React from 'react';
import { mainAction, REQUEST_DATA, GET_DATA_SUCCESS, GET_DATA_FAILURE } from './mainAction';
import { StateDataModel } from './model';

export function MainReducer(state: StateDataModel, action: mainAction): StateDataModel {
    switch (action.type) {
        case REQUEST_DATA:
            return {
                ...state,
                isLoading: action.payload.isLoading,
            }
        case GET_DATA_FAILURE:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                message: action.payload.message
            }
        case GET_DATA_SUCCESS:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                data: action.payload.data
            }
        default: return state
    }
}


export const initialState: StateDataModel = {
    data: {
        download_link: "",
        report_statistics: {
            ALPHABETICAL_STRINGS: 0,
            REAL_NUMBERS: 0,
            INTEGERS: 0,
            ALPHANUMERICS: 0
        }
    },
    isLoading: false
}


export interface MainContextModel {
    state: StateDataModel,
    dispatch: any,
}

export const MainContext: React.Context<MainContextModel> = React.createContext({
    state: initialState,
    dispatch: null
});
