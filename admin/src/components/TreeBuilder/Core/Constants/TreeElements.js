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

export const defaultDevice = {
    ...defaultItem,
    native: {
        ...defaultItem.native,
        exports: [],
        modifiers: [],
        imports: [],
    }
}

export const defaultDeviceExport = {
    id: '',
    label: 'Export',
    src: '',
    type: ''
}

export const defaultDeviceImport = {
    id: '',
    label: 'Import',
    linkId: false,
    type: ''
}

export const defaultModifierLink = {
    id: '',
    from: [],
    to: [],
    modifier: 'none'
    // conversion: 'none', //+, -, *, /, !
    // aggregation: 'none', 
    // split: 'none'
}

export const defaultDeviceModifier = {
    id: '',
    imports: [],
    exports: [],
    links: [],
}



