/**
 * Copyright 2022-2022 Tyantreides <tyantreides@pocketpromotion.de>
 *
 * MIT License
 *
 **/
import React, {useContext} from 'react';
import { TreeBuilderContext } from './Core/TreeBuilderContext';
import TreeLayout from './Layout/TreeLayout';
import LoaderFullScreen from './Loaders/LoaderFullScreen';

const TreeBuilder = () => {
    const treeBuilder = useContext(TreeBuilderContext);
    const isLoading = treeBuilder.state.isLoading;

    if (isLoading) {
        return (
            <>
                <LoaderFullScreen isLoading={isLoading} />
            </>
        );
    }
    return (
        <>
            <TreeLayout />
        </>
    );
};

export default TreeBuilder;
