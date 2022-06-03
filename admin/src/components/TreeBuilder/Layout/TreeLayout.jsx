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

const TreeLayout = ({classes}) => {

    return (
        <>
            {/* <DndProvider backend={HTML5Backend}> */}
            <div className={classes.tab}>
                <TreeToolbar />
                <TreeTable />
            </div>
            {/* </DndProvider> */}
        </>
    );
};

export default withStyles(styles)(TreeLayout);









