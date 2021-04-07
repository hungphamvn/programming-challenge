import { DataModel, StateDataModel } from "./model";

export interface Action {
    readonly type: string,
    readonly payload: any
}

export const REQUEST_DATA = 'REQUEST_DATA';
export const GET_DATA_FAILURE = 'GET_DATA_FAILURE';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';


export interface mainAction extends Action {
    payload: StateDataModel
}

export const RequestData = (): mainAction => ({
    type: REQUEST_DATA,
    payload: {
        isLoading: true
    }
})


export const GetDataFailure = (message: string): mainAction => ({
    type: GET_DATA_FAILURE,
    payload: {
        isLoading: false,
        message: message
    }
})

export const GetDataSuccess = (data: DataModel): mainAction => ({
    type: GET_DATA_SUCCESS,
    payload: {
        isLoading: false,
        data: data
    }
})