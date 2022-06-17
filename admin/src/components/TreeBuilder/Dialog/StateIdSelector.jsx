/**
 * Copyright 2022-2022 Tyantreides <tyantreides@pocketpromotion.de>
 *
 * MIT License
 *
 **/
 import React from 'react';
 import { useContext } from 'react';
 import { TreeBuilderContext } from '../Core/TreeBuilderContext';
 import { globalActions } from '../Core/actions';

 import DialogSelectID from '@iobroker/adapter-react/Dialogs/SelectID';
 
 const StateIdSelector = ({target,onSelect}) => {
    const treeBuilderContext = useContext(TreeBuilderContext);

    const onSelectCallback = (stateId) => {
        console.log('[StateSelector]: selected ID: '+stateId);
        onSelect(stateId);
    }
 
     return (
        <DialogSelectID 
            key={target}
            imagePrefix="../.."
            socket={treeBuilderContext.socket}
            dialogName={"Select: "+target}
            title={"State hinzufügen"}
            statesOnly={true}
            onOk={(id) => {onSelectCallback(id)}}
            onClose={() => {treeBuilderContext.changeState({type: globalActions.SET.DIALOG.SELECTID.VISIBLE, payload: false});}}
        />
     );
 };
 
 export default StateIdSelector;