/**
 * Copyright 2022-2022 Tyantreides <tyantreides@pocketpromotion.de>
 *
 * MIT License
 *
 **/
 import React from 'react';
 import { withStyles } from '@material-ui/core/styles';
 
 import Button from '@material-ui/core/Button';
 import Dialog from '@material-ui/core/Dialog';
 import DialogActions from '@material-ui/core/DialogActions';
 import DialogContent from '@material-ui/core/DialogContent';
 import DialogTitle from '@material-ui/core/DialogTitle';
 import TextField from '@material-ui/core/TextField';
 import IconClose from '@material-ui/icons/Close';
 import IconCheck from '@material-ui/icons/Check';
 
 import { styles } from './styles';
 import { useState } from 'react';
 import { defaultLink } from '../Core/Constants/TreeElements';
 import { useContext } from 'react';
 import { TreeBuilderContext } from '../Core/TreeBuilderContext';
 import { globalActions } from '../Core/actions';
 import { v4 as uuidv4 } from 'uuid';
 import * as Tools from '../../../modules/TreeBuilder/Tools';
 import { treeTypes } from '../Core/Constants/TreeTypes';

 import DialogSelectID from '@iobroker/adapter-react/Dialogs/SelectID';
import { FormGroup, IconButton, InputBase, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { MdAdd as IconAdd } from 'react-icons/md';
import StateSelector from './components/StateSelector';
import StateIdSelector from './StateIdSelector';
 
 const CreateLinkDialog = ({closeCallback = false, saveCallback = false, classes}) => {
 
     const treeBuilderContext = useContext(TreeBuilderContext);
     const [isStateSelectorVisible, setIsStateSelectorVisible] = useState(false);
 
     const getNewLink = () => {
        const linkType = treeTypes.find(t => t.name === 'link');
        const newLink = Tools.cloneObject({...defaultLink});
        newLink.common.role = linkType.name;
        newLink.native.type = linkType.name;
        return newLink;
     };
 
     const [itemState, changeItemState] = useState(getNewLink());
 
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
        setIsStateSelectorVisible(false);
     }
 
     const onClose = () => {
         treeBuilderContext.changeState({type: globalActions.SET.DIALOG.TREEELEMENTS.CREATELINK.VISIBLE, payload: false});
         changeItemState(getNewLink());
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
                 maxWidth="md"
                 fullWidth={true}
                 onClose={() => { onClose(); }}
                 aria-labelledby="alert-dialog-title"
                 aria-describedby="alert-dialog-description"
                 disableEnforceFocus
             >
                 <DialogTitle className={classes.titleBackground} classes={{ root: classes.titleColor }} id="edit-device-dialog-title">
                     {<div>Neue Verknüpfung erstellen: <b>{itemState.common.name}</b></div>}
                 </DialogTitle>
                 <DialogContent >
                     <div style={{display: "flex", flexDirection: "row", justifyContent:"space-around"}}>
                        <TextField
                             label={'Name'}
                             className={classes.input}
                             value={itemState.common.name}
                             onChange={e => onChangeName(e.target.value)
                             }
                             margin="normal"
                        />
                        <TextField
                            label={'Verknüpfung'}
                            className={classes.input}
                            value={itemState.native.target ? itemState.native.target : 'Bitte wählen...'}
                            //  onChange={e => onChangeName(e.target.value)}
                            margin="normal"
                            disabled
                        />
                        <IconButton className={classes.iconButton} aria-label="Wählen" onClick={() => {setIsStateSelectorVisible(true)}}>
                            <SearchIcon />
                        </IconButton>
                        {isStateSelectorVisible ? <StateIdSelector target={"createLinkDialog"} onSelect={onChangeTarget} /> : null}
                        </div>
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
         </>
     );
 };
 
 export default withStyles(styles)(CreateLinkDialog);