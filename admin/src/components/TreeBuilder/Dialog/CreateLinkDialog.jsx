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
 import { defaultItem, defaultLink } from '../Core/Constants/TreeElements';
 import { useContext } from 'react';
 import { TreeBuilderContext } from '../Core/TreeBuilderContext';
 import { globalActions } from '../Core/actions';
 import { v4 as uuidv4 } from 'uuid';
 import * as Tools from '../../../modules/TreeBuilder/Tools';
 import { treeTypes } from '../Core/Constants/TreeTypes';

 import DialogSelectID from '@iobroker/adapter-react/Dialogs/SelectID';
import { IconButton, InputBase, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { MdAdd as IconAdd } from 'react-icons/md';
 
 const CreateLinkDialog = ({closeCallback = false, saveCallback = false, classes}) => {
 
     const treeBuilderContext = useContext(TreeBuilderContext);
     const isDialogSelectIDVisible = treeBuilderContext.state.dialog.selectId.visible;
     console.log('CreateLinkDialog: isDialogSelectIDVisible:'+isDialogSelectIDVisible)
 
     const getNewLink = () => {
        const linkType = treeTypes.find(t => t.name === 'link');
        const newLink = Tools.cloneObject({...defaultItem});
        newLink.common.role = linkType.name;
        newLink.native.type = linkType.name;
        newLink.native.link = Tools.cloneObject({...defaultLink});
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
            return {...oldState, native: {...oldState.native, link: {...oldState.native.link, target: targetId}}};
        });
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
         console.log('Create Link dialog onSave:')
         console.log(item)
         treeBuilderContext.iobData.saveObject(item);
         treeBuilderContext.changeState({type: globalActions.SET.TREE.SELECTED, payload: item.native.id});
         saveCallback ? saveCallback(item) : null;
         onClose();
     };

     const showStateSelector = (e) => {
         console.log('showstateselector');
         treeBuilderContext.changeState({type: globalActions.SET.DIALOG.SELECTID.VISIBLE, payload: true});
     }
 
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
                 <DialogContent className={classes.container}>
                     <div className={classes.blockFields}>
                         <TextField
                             fullWidth
                             label={'Name'}
                             className={classes.name}
                             value={itemState.common.name}
                             onChange={e => onChangeName(e.target.value)
                             }
                             margin="normal"
                         />
                         
                        <Paper>
                            <TextField
                                label={'Verknüpfung'}
                                className={classes.name}
                                value={itemState.native.link.target ? itemState.native.link.target : 'Bitte wählen...'}
                                //  onChange={e => onChangeName(e.target.value)}
                                margin="normal"
                                onFocus={() => {showStateSelector}}
                            />
                            <InputBase
                                className={classes.name}
                                value={itemState.native.link.target ? itemState.native.link.target : ''}
                                placeholder="Bitte wählen..."
                            />
                            <IconButton className={classes.iconButton} aria-label="Wählen" onClick={showStateSelector}>
                                <SearchIcon />
                            </IconButton>
                        </Paper>
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
 
 export default withStyles(styles)(CreateLinkDialog);