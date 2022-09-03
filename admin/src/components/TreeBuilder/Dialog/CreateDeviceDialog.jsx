/**
 * Copyright 2022-2022 Tyantreides <tyantreides@pocketpromotion.de>
 *
 * MIT License
 *
 **/
 import React from 'react';
 import { withStyles } from '@material-ui/core/styles';
 //import { withStyles } from '@mui/styles';
 
 //import Button from '@material-ui/core/Button';
 import { Button } from '@mui/material';
 import Dialog from '@material-ui/core/Dialog';
 //import Dialog from '@mui/material/Dialog';
 //import DialogActions from '@material-ui/core/DialogActions';
 import DialogActions from '@mui/material/DialogActions';
 //import DialogContent from '@material-ui/core/DialogContent';
 import DialogContent from '@mui/material/DialogContent';
 //import DialogTitle from '@material-ui/core/DialogTitle';
 import DialogTitle from '@mui/material/DialogTitle';
 import TextField from '@material-ui/core/TextField';
 //import TextField from '@mui/material/TextField';
 import IconClose from '@material-ui/icons/Close';
 import IconCheck from '@material-ui/icons/Check';
 
 import { styles } from './styles';
 import { useState } from 'react';
 import { defaultDevice } from '../Core/Constants/TreeElements';
 import { useContext } from 'react';
 import { TreeBuilderContext } from '../Core/TreeBuilderContext';
 import { globalActions } from '../Core/actions';
 import { v4 as uuidv4 } from 'uuid';
 import * as Tools from '../../../modules/TreeBuilder/Tools';
 import { treeTypes } from '../Core/Constants/TreeTypes';

 import DialogSelectID from '@iobroker/adapter-react/Dialogs/SelectID';
import { FormGroup, Grid, IconButton, InputBase, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { MdAdd as IconAdd } from 'react-icons/md';
import StateSelector from './components/StateSelector';
import DeviceEditor from './components/DeviceEditor/DeviceEditor'
 
 const CreateDeviceDialog = ({closeCallback = false, saveCallback = false, classes}) => {
 
     const treeBuilderContext = useContext(TreeBuilderContext);
     const isDialogSelectIDVisible = treeBuilderContext.state.dialog.selectId.visible;
 
     const getNewDevice = () => {
        const linkType = treeTypes.find(t => t.name === 'device');
        const newLink = Tools.cloneObject({...defaultDevice});
        newLink.common.role = linkType.name;
        newLink.native.type = linkType.name;
        return newLink;
     };
 
     const [itemState, changeItemState] = useState(getNewDevice());
    //  console.log('[CreateDeviceDialog]: itemState:');
    //  console.log(itemState);
 
     const generateIoBrokerId = () => {
         return `${treeBuilderContext.state.adapterName}.${treeBuilderContext.state.adapterInstance}.${uuidv4()}`;
     };
 
     const onChangeName = (name) => {
         changeItemState((oldState) => {
             return {...oldState, common: {...oldState.common, name: name}, native: {...oldState.native, name: name, link: {...oldState.native.link, name: name}}};
         });
     };

     const onChangeTarget = (targetId) => {
        changeItemState((oldState) => {
            return {...oldState, native: {...oldState.native, target: targetId}};
        });
     }
 
     const onClose = () => {
         treeBuilderContext.changeState({type: globalActions.SET.DIALOG.TREEELEMENTS.CREATEDEVICE.VISIBLE, payload: false});
         changeItemState(getNewDevice());
         closeCallback ? closeCallback(itemState) : null;
     };
 
     const onSave = async () => {
         const item = {...itemState};
         item.id = generateIoBrokerId();
         if (treeBuilderContext.state.tree.selectedItem) {
             item.native.parentId = treeBuilderContext.state.tree.selectedItem;
         }
         item.native.id = item.id;
         item.native.depth = Tools.getNewItemDepth(treeBuilderContext);
        //  console.log('Create Link dialog onSave:')
        //  console.log(item)
         treeBuilderContext.iobData.saveObject(item);
         treeBuilderContext.changeState({type: globalActions.SET.TREE.SELECTED, payload: item.native.id});
         saveCallback ? saveCallback(item) : null;
         onClose();
     };
 
    return (
        <>
            <Dialog
                open={true}
                maxWidth="xl"
                fullWidth={true}
                onClose={() => { onClose(); }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                disableEnforceFocus
            >
                <DialogTitle className={classes.titleBackground} classes={{ root: classes.titleColor }} id="edit-device-dialog-title">
                    {<div>Neues Gerät erstellen: <b>{itemState.common.name}</b></div>}
                </DialogTitle>
                <DialogContent className={classes.container}>
                   <DeviceEditor classes={classes} />
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        disabled={false}
                        onClick={() => { onSave(); }}
                        startIcon={<IconCheck />}
                        color="primary">Erstellen</Button>
                    <Button
                        variant="contained"
                        onClick={() => { onClose(); }}
                        startIcon={<IconClose />}
                    >Abbrechen</Button>
                </DialogActions>
            </Dialog>
            {isDialogSelectIDVisible ? <DialogSelectID 
                                key="selectDialog"
                                imagePrefix="../.."
                                socket={treeBuilderContext.socket}
                                dialogName="devicesEdit"
                                title={"State hinzufügen"}
                                //selected={selected || this.findRealDevice(this.state.selectIdPrefix)}
                                statesOnly={true}
                                onOk={(id) => {onChangeTarget(id)}}
                                onClose={() => {treeBuilderContext.changeState({type: globalActions.SET.DIALOG.SELECTID.VISIBLE, payload: false});}}
                                /> : null}
        </>
    );
 };
 
 export default withStyles(styles)(CreateDeviceDialog);