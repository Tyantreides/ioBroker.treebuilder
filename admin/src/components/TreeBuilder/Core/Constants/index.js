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
        rootItem: 'root',
        selectedItem: false,
        expandedItems: [],
        windowWidth: 1980,
    },
    dialog: {
        selectId: {
            visible: false,
        },
        treeElements: {
            new: {
                visible: false
            },
            edit: {
                visible: false,
                item: false
            },
            delete: {
                visible: false,
                item: false
            },
            createLink: {
                visible: false,
            },
            createDevice: {
                visible: false,
            }
        },
        treeTypes: {
            visible: false,
        },
    }
};

export const prompt = `
████████╗██████╗ ███████╗███████╗██████╗ ██╗   ██╗██╗██╗     ██████╗ ███████╗██████╗ 
╚══██╔══╝██╔══██╗██╔════╝██╔════╝██╔══██╗██║   ██║██║██║     ██╔══██╗██╔════╝██╔══██╗
   ██║   ██████╔╝█████╗  █████╗  ██████╦╝██║   ██║██║██║     ██║  ██║█████╗  ██████╔╝
   ██║   ██╔══██╗██╔══╝  ██╔══╝  ██╔══██╗██║   ██║██║██║     ██║  ██║██╔══╝  ██╔══██╗
   ██║   ██║  ██║███████╗███████╗██████╦╝╚██████╔╝██║███████╗██████╔╝███████╗██║  ██║
   ╚═╝   ╚═╝  ╚═╝╚══════╝╚══════╝╚═════╝  ╚═════╝ ╚═╝╚══════╝╚═════╝ ╚══════╝╚═╝  ╚═╝
`;