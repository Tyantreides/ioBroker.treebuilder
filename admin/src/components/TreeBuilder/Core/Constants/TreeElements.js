/**
 * Copyright 2022-2022 Tyantreides <tyantreides@pocketpromotion.de>
 *
 * MIT License
 *
 **/
export const defaultItem = {
    'id': '', //iobroker id
    'type': 'channel', //keep that channel for now
    'common': {
        'name': 'Neues Element', //iobroker name
        'role': '' //treebuilder role
    },
    'native': {
        'id': '', //treebuilder id - uuid maybe?
        'type': '', //treebuilder role and type
        'name': 'Neues Element', //treebuilder name
        'parentId': 'root', // id of treebuilder parent element
        'depth': 0,
        'link': null,
    }
};

export const defaultLink = {
    ...defaultItem,
    native: {
        ...defaultItem.native,
        target: null
    }
}

export const defaultValue = {
    ...defaultItem,
    native: {
        ...defaultItem.native,
        target: null,
        read: true,
        write: true,
    }
}

export const defaultFilter = {
    ...defaultItem,
    native: {
        ...defaultItem.native,
    }
}

export const defaultTrigger = {
    ...defaultItem,
    native: {
        ...defaultItem.native,
    }
}

export const defaultDevice = {
    ...defaultItem,
    native: {
        ...defaultItem.native,
        values: [],
        filters: [],
        triggers: []
    }
}




