/**
 * Copyright 2022-2022 Tyantreides <tyantreides@pocketpromotion.de>
 *
 * MIT License
 *
 **/
import {globalActions} from './actions';

export const Reducer = (state, action) => {
    const currentState = {...state};

    switch (action.type) {
        case globalActions.SET.ADAPTERNAME:
            // console.log('[globalActions.SET.ADAPTERNAME]:')
            currentState.adapterName = action.payload;
            // console.log(currentState)
            return currentState;
        case globalActions.SET.ADAPTERINSTANCE:
            // console.log('[globalActions.SET.ADAPTERINSTANCE]:')
            currentState.adapterInstance = action.payload;
            // console.log(currentState)
            return currentState;
        case globalActions.SET.SOCKET:
            // console.log('[globalActions.SET.SOCKET]:')
            currentState.socketInstance = action.payload;
            // console.log(currentState)
            return currentState;
        case globalActions.SET.TEST:
            // console.log('[globalActions.SET.TEST]:')
            currentState.test = action.payload;
            return currentState;
        case globalActions.SET.INSTANCES:
            // console.log('[globalActions.SET.INSTANCES]:')
            currentState.instances = action.payload;
            return currentState;
        case globalActions.SET.OBJECTS:
            // console.log('[globalActions.SET.OBJECTS]:')
            currentState.objects = action.payload;
            return currentState;
        case globalActions.SET.TREEITEMS:
            // console.log('[globalActions.SET.TREEITEMS]:')
            currentState.treeItems = action.payload;
            return currentState;
            //Dialog actions
        case globalActions.SET.DIALOG.VISIBLE:
            currentState.dialog.visible = action.payload;
            return currentState;
        case globalActions.SET.DIALOG.TREEELEMENTS.NEW.VISIBLE:
            currentState.dialog.treeElements.new.visible = action.payload;
            return currentState;
        case globalActions.SET.DIALOG.TREEELEMENTS.EDIT.VISIBLE:
            currentState.dialog.treeElements.edit.visible = action.payload;
            return currentState;
        case globalActions.SET.DIALOG.TREEELEMENTS.EDIT.ITEM:
            currentState.dialog.treeElements.edit.item = action.payload;
            return currentState;
        case globalActions.SET.DIALOG.TREETYPES.VISIBLE:
            currentState.dialog.treeTypes.visible = action.payload;
            return currentState;
            //status actions
        case globalActions.SET.ISFETCHING:
            // console.log('[globalActions.SET.ISFETCHING]:')
            currentState.isFetching = action.payload;
            return currentState;
        case globalActions.SET.ISLOADING:
            // console.log('[globalActions.SET.ISLOADING]:')
            currentState.isLoading = action.payload;
            return currentState;
        case globalActions.SET.ISRELOADING:
            //console.log('[globalActions.SET.ISRELOADING]:'+action.payload)
            currentState.isReloading = action.payload;
            return currentState;
        case globalActions.SET.TREE.SELECTED:
            // console.log('[globalActions.SET.TREE.SELECTED]:')
            currentState.tree.selectedItem = action.payload;
            return currentState;
        default:
            return state;
    }
};