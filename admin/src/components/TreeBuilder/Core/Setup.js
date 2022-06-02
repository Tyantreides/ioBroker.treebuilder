/**
 * Copyright 2022-2022 Tyantreides <tyantreides@pocketpromotion.de>
 *
 * MIT License
 *
 **/
import { useEffect, useContext } from 'react';
import EventEmitter from './EventEmitter';
import { TreeBuilderContext } from './TreeBuilderContext';
import { globalActions } from './actions';
import { Process } from '../../../modules/TreeBuilder/Process';
import { prompt } from './Constants';

const fetchData = async (treeBuilderContext) => {

    await treeBuilderContext.changeState({type: globalActions.SET.ISFETCHING, payload: true});
    try{
        const [instances, objects] = await Promise.all([
            treeBuilderContext.iobData.fetchInstances(),
            treeBuilderContext.iobData.fetchObjects(),
        ]);
        await treeBuilderContext.changeState({type: globalActions.SET.INSTANCES, payload: instances});
        await treeBuilderContext.changeState({type: globalActions.SET.OBJECTS, payload: objects});
        await treeBuilderContext.changeState({type: globalActions.SET.ISFETCHING, payload: false});
    }
    catch(err){
        console.error('[TreeBuilder Setup]: Error while fetching data from ioBroker.');
    }
};

const buildTree = async (treeBuilderContext) => {
    console.log('[TreeBuilder Setup]: Building Tree...');
    const process = new Process(treeBuilderContext);
    try{
        const [treeItems] = await Promise.all([
            process.buildTreeItems(),
            treeBuilderContext.changeState({type: globalActions.SET.ISRELOADING, payload: false})
        ]);
        treeBuilderContext.changeState({type: globalActions.SET.TREEITEMS, payload: treeItems});

    }
    catch(err){
        console.error('[TreeBuilder Setup]: Error while building Tree.');
    }

};

const setupTreeBuilder = async (treeBuilderContext) => {
    await treeBuilderContext.changeState({type: globalActions.SET.ADAPTERNAME, payload: treeBuilderContext.adapterName});
    await treeBuilderContext.changeState({type: globalActions.SET.ADAPTERINSTANCE, payload: treeBuilderContext.adapterInstance});
    try{
        await Promise.all([
            fetchData(treeBuilderContext),
        ]);
    }
    catch(err){
        console.error('[TreeBuilder Setup]: Error while setting up TreeBuilder.');
    }
    await treeBuilderContext.changeState({type: globalActions.SET.ISLOADING, payload: false});
};

const Setup = () => {
    const treeBuilderContext = useContext(TreeBuilderContext);
    const isFetching = treeBuilderContext.state.isFetching;
    const isLoading = treeBuilderContext.state.isLoading;

    useEffect(() => {
        console.log(prompt);
        setupTreeBuilder(treeBuilderContext);
        const setupListener = EventEmitter.addListener('setup', setupTreeBuilder(treeBuilderContext));
        const reloadTreeListener = EventEmitter.addListener('reloadTree', () => {setupTreeBuilder(treeBuilderContext);});
        return ()=>{
            setupListener.remove();
            reloadTreeListener.remove();
        };
    }, []);
    useEffect(() => {
        !isFetching && !isLoading ? buildTree(treeBuilderContext) : null;
    }, [isFetching,isLoading]);
    return null;
};

export default Setup;