
/**
 * Copyright 2022-2022 Tyantreides <tyantreides@pocketpromotion.de>
 *
 * MIT License
 *
 **/
import React, {useContext} from "react";
import {GlobalContext} from "./Store";
import ioBroker from "../../../modules/TreeBuilder/IoBroker";
export const TreeBuilderContext = React.createContext({});
export const TreeBuilderProvider = ({socketInstance, tabAppClass, children}) => {
    const iobData = new ioBroker(socketInstance)
    // @ts-ignore
    const [state, dispatch] = useContext(GlobalContext)
    const context = {
        state,
        changeState: dispatch,
        socket: socketInstance,
        iobData,
        adapterName: tabAppClass.adapterName,
        adapterInstance: tabAppClass.instance,
    }
    return (
        <TreeBuilderContext.Provider value={context}>
            {children}
        </TreeBuilderContext.Provider>
    )
}