/**
 * Copyright 2022-2022 Tyantreides <tyantreides@pocketpromotion.de>
 *
 * MIT License
 *
 **/
import React from 'react';
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
import { styles } from './styles';
import {withStyles} from '@material-ui/core/styles';

import TreeToolbar from './TreeToolbar';
import TreeTable from '../Table/TreeTable';
import TreeElementDialog from '../Dialog/TreeElementDialog';
import EventEmitter from '../Core/EventEmitter';
import TreeTypeDialog from '../Dialog/TreeTypeDialog';

const TreeLayout = ({classes}) => {

    const dialogCallback = (itemState) => {
        EventEmitter.emit('reloadTree');
    };

    return (
        <>
            {/* <DndProvider backend={HTML5Backend}> */}
            <div className={classes.tab}>
                <TreeToolbar />
                <TreeTable />
                <TreeElementDialog saveCallback={dialogCallback} />
                <TreeTypeDialog />
            </div>
            {/* </DndProvider> */}
        </>
    );
};

export default withStyles(styles)(TreeLayout);









