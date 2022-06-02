import React, {useEffect, useContext} from 'react'
import {GlobalContext} from "./Store";
import EventEmitter from "./EventEmitter";

const EventDispatcher = () => {
    const [, dispatch] = useContext(GlobalContext);
    useEffect(() => {
        const onDispatch = async (actionType,payload) => {
            dispatch({
                type: actionType,
                payload: payload,
            })
        }
        const dispatcher = EventEmitter.addListener('dispatch', onDispatch);
        return ()=>{
            dispatcher.remove();
        }
    },[])
    return null
}
export default EventDispatcher;