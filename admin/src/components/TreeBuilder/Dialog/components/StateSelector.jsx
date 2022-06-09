/**
 * Copyright 2022-2022 Tyantreides <tyantreides@pocketpromotion.de>
 *
 * MIT License
 *
 **/
 import React from 'react';
 import { withStyles } from '@material-ui/core/styles';
 
 import { styles } from '../styles';
 import { useState } from 'react';
 import { useContext } from 'react';
 import { TreeBuilderContext } from '../../Core/TreeBuilderContext';
 import { globalActions } from '../../Core/actions';

 import DialogSelectID from '@iobroker/adapter-react/Dialogs/SelectID';
import { IconButton, InputBase, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
 
 const StateSelector = ({onSelect,classes}) => {
    const treeBuilderContext = useContext(TreeBuilderContext);
    const isIoBrokerStateSelectorVisible = treeBuilderContext.state.dialog.selectId.visible;

    const openIoBrokerStateSelector = () => {
        treeBuilderContext.changeState({type: globalActions.SET.DIALOG.SELECTID.VISIBLE, payload: true});
    }

    const onSelectCallback = (stateId) => {
        onSelect(stateId);
    }
 
     return (
         <> 
            <IconButton className={classes.iconButton} aria-label="Wählen" onClick={openIoBrokerStateSelector}>
                <SearchIcon />
            </IconButton>
            {isIoBrokerStateSelectorVisible ? <DialogSelectID 
                                    key="selectDialog"
                                    imagePrefix="../.."
                                    socket={treeBuilderContext.socket}
                                    dialogName="devicesEdit"
                                    title={"State hinzufügen"}
                                    //selected={selected || this.findRealDevice(this.state.selectIdPrefix)}
                                    statesOnly={true}
                                    onOk={(id) => {onSelectCallback(id)}}
                                    onClose={() => {treeBuilderContext.changeState({type: globalActions.SET.DIALOG.SELECTID.VISIBLE, payload: false});}}
                                    /> : null}
         </>
     );
 };
 
 export default withStyles(styles)(StateSelector);