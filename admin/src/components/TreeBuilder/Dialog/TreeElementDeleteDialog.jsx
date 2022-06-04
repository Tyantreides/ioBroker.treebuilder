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
import IconClose from '@material-ui/icons/Close';
import IconCheck from '@material-ui/icons/Check';

import { styles } from './styles';
import { useState } from 'react';
import { useContext } from 'react';
import { TreeBuilderContext } from '../Core/TreeBuilderContext';
import { globalActions } from '../Core/actions';
import * as Tools from '../../../modules/TreeBuilder/Tools';

const TreeElementDeleteDialog = ({closeCallback = false, saveCallback = false, classes}) => {

    const treeBuilderContext = useContext(TreeBuilderContext);

    const getDeleteItem = (itemId) => {
        return Tools.cloneObject(
            treeBuilderContext.state.treeItems.find(i => i.native.id === itemId)
        );
    };

    const [itemState, changeItemState] = useState(treeBuilderContext.state.dialog.treeElements.delete.item ? getDeleteItem(treeBuilderContext.state.dialog.treeElements.delete.item): {});

    const onClose = () => {
        treeBuilderContext.changeState({type: globalActions.SET.DIALOG.TREEELEMENTS.DELETE.VISIBLE, payload: false});
        changeItemState({});
        closeCallback ? closeCallback() : null;
    };

    const deleteObjectWithChildren = async (id) => {
        console.log('[deleteObjectWithChildren]:');
        const item = treeBuilderContext.state.treeItems.find(i => i.native.id === id);
        if (item) {
            const items = [item, ...Tools.resolveChildren(id, treeBuilderContext.state.treeItems)];
            console.log(items);
            items.map(i => treeBuilderContext.iobData.deleteObject(i.native.id));
        }
    };

    const onDelete = async () => {
        treeBuilderContext.changeState({type: globalActions.SET.TREE.SELECTED, payload: false});
        const item = {...itemState};
        deleteObjectWithChildren(item._id);
        saveCallback ? saveCallback() : null;
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
                    {<div>Element Löschen: <b>{itemState.common.name}</b></div>}
                </DialogTitle>
                <DialogContent className={classes.container}>
                    <div className={classes.blockFields}>
                        <b>Dieses Element und alle darunter liegenden Elemente werden gelöscht!</b>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        disabled={false}
                        onClick={() => { onDelete(); }}
                        startIcon={<IconCheck />}
                        color="primary">Löschen</Button>
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

export default withStyles(styles)(TreeElementDeleteDialog);