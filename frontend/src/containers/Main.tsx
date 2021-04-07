import React, { useReducer } from 'react';
import { GeneratorBox } from '../components/GeneratorBox';
import { initialState, MainReducer, MainContext } from '../redux/MainReducer';

export const Main: React.FC = () => {
    const [state, dispatch] = useReducer(MainReducer, initialState);
    return (
        <MainContext.Provider value={{ state, dispatch }} >
            <GeneratorBox />
        </MainContext.Provider>
    )
}