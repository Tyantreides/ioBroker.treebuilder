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
    }
};

export const defaultType = {
    'id': '',
    'name': '',
    'label': '',
    'icon': ''
};

export const basicType = {
    'id': '',
    'name': 'room',
    'label': 'Raum',
    'icon': ''
};