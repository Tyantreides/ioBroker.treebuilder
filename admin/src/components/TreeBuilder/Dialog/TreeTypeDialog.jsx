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
import IconClose from '@material-ui/icons/Close';
import IconCheck from '@material-ui/icons/Check';
import { MdAdd as IconAdd } from 'react-icons/md';
import { styles } from './styles';
import { useState } from 'react';
import { basicType, defaultType } from '../Core/Constants/TreeElements';
import { useContext } from 'react';
import { TreeBuilderContext } from '../Core/TreeBuilderContext';
import { globalActions } from '../Core/actions';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import * as Tools from '../../../modules/TreeBuilder/Tools';
import { Chip, IconButton, Toolbar, Tooltip } from '@material-ui/core';

const TreeTypeDialog = ({closeCallback = false, saveCallback = false, classes}) => {

    const treeBuilderContext = useContext(TreeBuilderContext);

    const getNewType = () => {
        return Tools.cloneObject({...defaultType});
    };

    const [type, changeType] = useState(getNewType());
    const [treeTypes, changeTreeTypes] = useState(treeBuilderContext.state.treeTypes);

    const onChangeName = (name) => {
        changeType((oldState) => {
            return {...oldState, name: name};
        });
    };

    const onChangeLabel = (label) => {
        changeType((oldState) => {
            return {...oldState, label: label};
        });
    };

    const onClose = () => {
        treeBuilderContext.changeState({type: globalActions.SET.DIALOG.TREETYPES.VISIBLE, payload: false});
        changeType(getNewType());
        closeCallback ? closeCallback(typeState) : null;
    };


    const onAdd = () => {
        const newType = {...type};
        newType.id = uuidv4();
        changeTreeTypes(oldTypes => [...oldTypes, newType]);
        changeType(getNewType());
    };

    const addDefaultType = () => {
        const newType = {...basicType};
        newType.id = uuidv4();
        changeTreeTypes(oldTypes => [...oldTypes, newType]);
        changeType(getNewType());
    };

    const onEdit = (type) => {

    };

    const onDelete = (type) => {

    };

    const onSave = async () => {

    };

    const getTypeListItem = (type) => {
        return (
            <Chip
                key={type.id}
                label={type.label}
                onClick={() => {onEdit(type);}}
                onDelete={treeTypes.length > 1 ? () => {onDelete(type);} : undefined}
                style={{margin: '5px'}}
            />
        );
    };

    useEffect(() => {
        treeTypes.length < 1 ? addDefaultType() : null;
    },[treeTypes]);

    return (
        <>
            {treeBuilderContext.state.dialog.treeTypes.visible ? <Dialog
                open={true}
                maxWidth="md"
                fullWidth={true}
                onClose={() => { onClose(); }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle className={classes.titleBackground} classes={{ root: classes.titleColor }} id="edit-device-dialog-title">
                    {<div>Element Typ Editor</div>}
                </DialogTitle>
                <DialogContent className={classes.container}>
                    <Toolbar variant="dense">
                        <Tooltip title="Neuen Typ hinzufügen">
                            <IconButton>
                                <IconAdd />
                            </IconButton>
                        </Tooltip>
                    </Toolbar>
                    <FormControl fullWidth>
                        <TextField
                            label={'Label'}
                            value={type.label}
                            onChange={e => onChangeLabel(e.target.value)
                            }
                            margin="normal"
                            size='small'
                        />
                        <TextField
                            label={'Name'}
                            error={!!treeTypes.find(t => t.name === type.name)}
                            value={type.name}
                            onChange={e => onChangeName(e.target.value)
                            }
                            margin="normal"
                            size='small'
                        />
                        <Button disabled={false} onClick={() => { onAdd(); }} startIcon={<IconCheck />} size='small'>
                                Hinzufügen
                        </Button>
                    </FormControl>
                    {treeTypes.map((treeType) => {
                        return getTypeListItem(treeType);
                    })}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => { onClose(); }} startIcon={<IconClose />}>
                     Schliessen
                    </Button>
                </DialogActions>
            </Dialog>: null}
        </>
    );
};

export default withStyles(styles)(TreeTypeDialog);