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

const TreeTable = ({classes}) => {
    const treeBuilderContext = useContext(TreeBuilderContext);

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
        </>
    );
};
export default withStyles(styles)(TreeTable);
