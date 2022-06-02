/**
 * Copyright 2022-2022 Tyantreides <tyantreides@pocketpromotion.de>
 *
 * MIT License
 *
 **/
export const initialState = {
    adapterName: 'default',
    adapterInstance: '999',
    isLoading: true,
    isFetching: false,
    isReloading: false,
    instances: [],
    objects: [],
    enums: [],
    enumIDs: [],
    enumObj: {},
    treeItems:[],
    treeTypes:[],
    test: false,
    tree: {
        rootItem: "root",
        selectedItem: false,
        expandedItems: [],
        windowWidth: 1980,
    },
    dialog: {
        treeElements: {
            visible: false,
            action: 'new',
        },
        treeTypes: {
            visible: false,
        },
        visible: false,
        action: 'new',
    }
}

export const prompt = `
████████╗██████╗ ███████╗███████╗██████╗ ██╗   ██╗██╗██╗     ██████╗ ███████╗██████╗ 
╚══██╔══╝██╔══██╗██╔════╝██╔════╝██╔══██╗██║   ██║██║██║     ██╔══██╗██╔════╝██╔══██╗
   ██║   ██████╔╝█████╗  █████╗  ██████╦╝██║   ██║██║██║     ██║  ██║█████╗  ██████╔╝
   ██║   ██╔══██╗██╔══╝  ██╔══╝  ██╔══██╗██║   ██║██║██║     ██║  ██║██╔══╝  ██╔══██╗
   ██║   ██║  ██║███████╗███████╗██████╦╝╚██████╔╝██║███████╗██████╔╝███████╗██║  ██║
   ╚═╝   ╚═╝  ╚═╝╚══════╝╚══════╝╚═════╝  ╚═════╝ ╚═╝╚══════╝╚═════╝ ╚══════╝╚═╝  ╚═╝
`;