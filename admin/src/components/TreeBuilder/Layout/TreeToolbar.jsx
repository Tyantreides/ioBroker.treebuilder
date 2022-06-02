/**
 * Copyright 2022-2022 Tyantreides <tyantreides@pocketpromotion.de>
 *
 * MIT License
 *
 **/
import React, {useContext} from 'react';
import IconButton from '@material-ui/core/IconButton';
import { MdAdd as IconAdd } from 'react-icons/md';
import { MdRefresh as IconRefresh } from 'react-icons/md';
//import { MdAutoAwesomeMotion as IconTypes } from 'react-icons/md'
import { FaFolderOpen as IconFolderOpened } from 'react-icons/fa';
import { FaFolder as IconFolder } from 'react-icons/fa';
import { Toolbar, Tooltip } from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

import { styles } from './styles';
import { TreeBuilderContext } from '../Core/TreeBuilderContext';
import { globalActions } from '../Core/actions';

const TreeToolbar = ({classes}) => {
    const treeBuilderContext = useContext(TreeBuilderContext);

    return (
        <>
            <Toolbar variant="dense">
                <div className={classes.wrapperHeadButtons}>
                    <Tooltip title="Neues Element hinzufügen">
                        <div>
                            <IconButton
                                disabled={false}
                                onClick={() => { treeBuilderContext.changeState({type: globalActions.SET.DIALOG.TREEELEMENTS.VISIBLE, payload: true}); }}>
                                <IconAdd />
                            </IconButton>
                        </div>
                    </Tooltip>
                    {/* <Tooltip title="Element Typen bearbeiten">
                        <div>
                            <IconButton
                                disabled={false}
                                onClick={() => { treeBuilderContext.changeState({type: globalActions.SET.DIALOG.TREETYPES.VISIBLE, payload: true}) }}>
                                <IconTypes />
                            </IconButton>
                        </div>
                    </Tooltip> */}
                    <Tooltip title="Neu laden">
                        <IconButton onClick={() => {/* refresh list handle */}} disabled={false}>
                            {false ? <CircularProgress size={20} /> : <IconRefresh />}
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Alles aufklappen">
                        <IconButton
                            color="primary"
                            onClick={() => { /* expand all handle */}}>
                            <IconFolderOpened />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Alles zuklappen">
                        <IconButton
                            color="primary"
                            onClick={() => { /* collapseAll handle */ }}>
                            <IconFolder />
                        </IconButton>
                    </Tooltip>
                </div>
                <div className={classes.emptyBlockFlex} />
                <div className={classes.wrapperName}>
                    {<img src="static/assets/treebuilder.png" width={'50px'} height={'50px'}></img>}
                </div>
            </Toolbar>
        </>
    );
};

export default withStyles(styles)(TreeToolbar);









