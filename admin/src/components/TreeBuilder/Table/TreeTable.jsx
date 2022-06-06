/**
 * Copyright 2022-2022 Tyantreides <tyantreides@pocketpromotion.de>
 *
 * MIT License
 *
 **/
import React, {useContext} from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';

import { styles } from './styles';
import { TreeBuilderContext } from '../Core/TreeBuilderContext';
import TreeItem from './TreeItem';
import TreeElementNewDialog from '../Dialog/TreeElementNewDialog';
import TreeElementEditDialog from '../Dialog/TreeElementEditDialog';
import EventEmitter from '../Core/EventEmitter';
import TreeElementDeleteDialog from '../Dialog/TreeElementDeleteDialog';
//import DialogImporter from '../Dialog/DialogImporter';
import DialogSelectID from '@iobroker/adapter-react/Dialogs/SelectID';
import CreateLinkDialog from '../Dialog/CreateLinkDialog';


const TreeTable = ({classes}) => {
    const treeBuilderContext = useContext(TreeBuilderContext);
    const isNewDialogVisible = treeBuilderContext.state.dialog.treeElements.new.visible;
    const isEditDialogVisible = treeBuilderContext.state.dialog.treeElements.edit.visible;
    const isDeleteDialogVisible = treeBuilderContext.state.dialog.treeElements.delete.visible;
    const isCreateLinkDialogVisible = treeBuilderContext.state.dialog.treeElements.createLink.visible;


    const releadTree = () => {
        EventEmitter.emit('reloadTree');
    };

    const newCallback = () => {releadTree();};
    const editCallback = () => {releadTree();};
    const deleteCallback = () => {releadTree();};

    const renderAllItems = (items) => {
        return items
            .filter(item => item.native.parentId === treeBuilderContext.state.tree.rootItem)
            .map(item => {
                return (
                    <TreeItem key={item._id} items={items} item={item} classes={classes} />
                );
            });
    };

    return (
        <>
            <Paper className={classes.paperTable}>
                <Table stickyHeader className={classes.table} size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableExpandIconCell} />
                            <TableCell className={classes.tableIconCell}></TableCell>
                            <TableCell className={classes.headerCell + ' ' + classes.tableNameCell}>Name</TableCell>
                            <TableCell style={{ width: 50 }} className={classes.headerCell}>Type</TableCell>
                            <TableCell className={classes.headerCell + ' ' + classes.buttonsCellHeader}>Buttons</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{renderAllItems(treeBuilderContext.state.treeItems)}</TableBody>
                </Table>
            </Paper>
            {isNewDialogVisible ? <TreeElementNewDialog saveCallback={newCallback} /> : null}
            {isEditDialogVisible ? <TreeElementEditDialog saveCallback={editCallback} /> : null}
            {isDeleteDialogVisible ? <TreeElementDeleteDialog saveCallback={deleteCallback} /> : null}
            {isCreateLinkDialogVisible ? <CreateLinkDialog saveCallback={() => {}} /> : null}
        </>
    );
};
export default withStyles(styles)(TreeTable);
