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
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import IconClose from '@material-ui/icons/Close';
import IconCheck from '@material-ui/icons/Check';

import { styles } from './styles';
import { useState } from 'react';
import { defaultItem } from '../Core/Constants/TreeElements';
import { useContext } from 'react';
import { TreeBuilderContext } from '../Core/TreeBuilderContext';
import { globalActions } from '../Core/actions';
import { v4 as uuidv4 } from 'uuid';
import * as Tools from '../../../modules/TreeBuilder/Tools';
import { treeTypes } from '../Core/Constants/TreeTypes';
import { ListItemText } from '@material-ui/core';

const TreeElementNewDialog = ({closeCallback = false, saveCallback = false, classes}) => {

    const treeBuilderContext = useContext(TreeBuilderContext);

    const getNewItem = () => {
        return Tools.cloneObject({...defaultItem});
    };

    const [itemState, changeItemState] = useState(getNewItem());

    const generateIoBrokerId = () => {
        return `${treeBuilderContext.state.adapterName}.${treeBuilderContext.state.adapterInstance}.${uuidv4()}`;
    };

    const onChangeName = (name) => {
        changeItemState((oldState) => {
            return {...oldState, common: {...oldState.common, name: name}, native: {...oldState.native, name: name}};
        });
    };

    const onChangeType = (type) => {
        changeItemState((oldState) => {
            return {...oldState, common: {...oldState.common, role: type}, native: {...oldState.native, type: type}};
        });
    };

    const onClose = () => {
        treeBuilderContext.changeState({type: globalActions.SET.DIALOG.TREEELEMENTS.NEW.VISIBLE, payload: false});
        changeItemState(getNewItem());
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
        treeBuilderContext.iobData.saveObject(item);
        treeBuilderContext.changeState({type: globalActions.SET.TREE.SELECTED, payload: item.native.id});
        saveCallback ? saveCallback(item) : null;
        onClose();
    };

    const renderTreeTypeSelect = () => {
        return (
            <FormControl className={classes.type}>
                <InputLabel>Typ</InputLabel>
                <Select
                    className={classes.oidField}
                    fullWidth
                    value={itemState.native.type}
                    onChange={e => {
                        onChangeType(e.target.value);
                    }}
                >
                    {treeTypes.map(treeType => {
                        return (
                            <MenuItem key={treeType.name} icon={treeType.icon} value={treeType.name}>
                                <ListItemText inset={true} primary={treeType.label} secondary={treeType.description} />
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
        );
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
                    {<div>Neues Element erstellen: <b>{itemState.common.name}</b></div>}
                </DialogTitle>
                <DialogContent className={classes.container}>
                    <div className={classes.blockFields}>
                        <TextField
                            fullWidth
                            label={'Node Name'}
                            className={classes.name}
                            value={itemState.common.name}
                            onChange={e => onChangeName(e.target.value)
                            }
                            margin="normal"
                        />
                        {renderTreeTypeSelect()}
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

export default withStyles(styles)(TreeElementNewDialog);