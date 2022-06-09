/**
 * Copyright 2022-2022 Tyantreides <tyantreides@pocketpromotion.de>
 *
 * MIT License
 *
 **/
export const globalActions = {
    SET: {
        ADAPTERNAME: 'GLOBAL_SET_ADAPTERNAME',
        ADAPTERINSTANCE: 'GLOBAL_SET_ADAPTERINSTANCE',
        SOCKET: 'GLOBAL_SET_SOCKET',
        TEST: 'GLOBAL_SET_TEST',
        INSTANCES: 'GLOBAL_SET_INSTANCES',
        OBJECTS: 'GLOBAL_SET_OBJECTS',
        TREEITEMS: 'GLOBAL_SET_TREEITEMS',
        ISLOADING: 'GLOBAL_SET_ISLOADING',
        ISFETCHING: 'GLOBAL_SET_ISFETCHING',
        ISRELOADING: 'GLOBAL_SET_ISRELOADING',
        DIALOG: {
            SELECTID: {
                VISIBLE: 'GLOBAL_SET_DIALOG_SELECTID_VISIBLE',
            },
            TREEELEMENTS: {
                NEW: {
                    VISIBLE: 'GLOBAL_SET_DIALOG_TREEELEMENTS_NEW_VISIBLE',
                },
                EDIT: {
                    VISIBLE: 'GLOBAL_SET_DIALOG_TREEELEMENTS_EDIT_VISIBLE',
                    ITEM: 'GLOBAL_SET_DIALOG_TREEELEMENTS_EDIT_ITEM',
                },
                DELETE: {
                    VISIBLE: 'GLOBAL_SET_DIALOG_TREEELEMENTS_DELETE_VISIBLE',
                    ITEM: 'GLOBAL_SET_DIALOG_TREEELEMENTS_DELETE_ITEM',
                },
                CREATELINK: {
                    VISIBLE: 'GLOBAL_SET_DIALOG_TREEELEMENTS_CREATELINK_VISIBLE',
                },
            },
            TREETYPES: {
                VISIBLE: 'GLOBAL_SET_DIALOG_TREETYPES_VISIBLE',
            },
            VISIBLE: 'GLOBAL_SET_DIALOG_VISIBLE',
        },
        TREE: {
            SELECTED: 'GLOBAL_SET_TREE_SELECTED',
            EXPANDED: {
                SET: 'GLOBAL_TREE_EXPANDED_SET',
                ADD: 'GLOBAL_TREE_EXPANDED_ADD',
                REMOVE: 'GLOBAL_TREE_EXPANDED_REMOVE',
            }
        }
    }
};