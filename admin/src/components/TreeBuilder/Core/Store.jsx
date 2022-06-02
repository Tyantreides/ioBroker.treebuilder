/**
 * Copyright 2022-2022 Tyantreides <tyantreides@pocketpromotion.de>
 *
 * MIT License
 *
 **/
import React, {useReducer} from 'react';
import { initialState } from "./Constants";
import {Reducer} from "./Reducer";
export const GlobalContext = React.createContext(initialState);
const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <GlobalContext.Provider value={[state, dispatch]}>
            {children}
        </GlobalContext.Provider>
    );
};
export default Store;