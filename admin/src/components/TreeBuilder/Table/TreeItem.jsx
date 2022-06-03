/**
 * Copyright 2022-2022 Tyantreides <tyantreides@pocketpromotion.de>
 *
 * MIT License
 *
 **/
import React, {useContext} from 'react';
import Utils from '@iobroker/adapter-react/Components/Utils';

import { TableRow } from '@material-ui/core';
import {ListItemIcon, Tooltip} from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';

import {FaFolder as IconFolder, FaFolderOpen as IconFolderOpened} from 'react-icons/fa';
import {MdDelete as IconDelete, MdModeEdit as IconEdit} from 'react-icons/md';
import IconButton from '@material-ui/core/IconButton';

import clsx from 'clsx';
import Icon from '@iobroker/adapter-react/Components/Icon';

import {styles} from './styles';
import { TreeBuilderContext } from '../Core/TreeBuilderContext';
import { globalActions } from '../Core/actions';
import { treeTypes } from '../Core/Constants/TreeTypes';

const TreeItem = ({items, item, classes}) => {
    const treeBuilderContext = useContext(TreeBuilderContext);

    const toggleExpanded = (itemId) => {
        console.log(itemId);
    };

    const onSelect = (selected) => {
        treeBuilderContext.changeState({type: globalActions.SET.TREE.SELECTED, payload: selected});
    };

    const onEdit = (itemId) => {
        console.log('onEdit');
        treeBuilderContext.changeState({type: globalActions.SET.DIALOG.TREEELEMENTS.EDIT.ITEM, payload: itemId});
        treeBuilderContext.changeState({type: globalActions.SET.DIALOG.TREEELEMENTS.EDIT.VISIBLE, payload: true});
    };

    const renderTreeType = (itemType) => {
        return treeTypes.find(t => t.name === itemType)?.label;
    };


    const renderRow = (items, item) => {
        const children = items.filter(i => i.native.parentId === item.native.id);
        const isExpanded = true;

        const depthPx = item.native.depth * 20 + 10;

        const style = Object.assign({
            paddingLeft: depthPx,
            cursor: 'pointer',
            opacity: 1,
        });

        const iconStyle = {};
        const countSpan = children.length ? <span className={classes.childrenCount}>{children.length}</span> : null;

        const searchStyle = {};

        if (!countSpan) {
            iconStyle.opacity = 0.5;
        }

        iconStyle.color = '#448dde';
        iconStyle.width = 36;
        iconStyle.height = 36;

        let background;
        const device = treeBuilderContext.state.treeItems.find(el => el.native.id === item.native.id);

        // let color;
        // let index;

        if (device) {
            background = item.color;
            // color = Utils.invertColor(background, true);
            // index = treeBuilderContext.state.treeItems.indexOf(device);
        } else {
            background = item.color;
            //color = Utils.invertColor(background, true);
        }
        const itemRow =
            <TableRow key={item.native.id} className={Utils.clsx(classes.hoverRow, treeBuilderContext.state.tree.selectedItem === item.native.id && classes.selected)} padding="default" style={{ ...style, background }} onClick={() => onSelect(item.native.id)}>
                <TableCell
                    id={'td_' + item._id}
                    colSpan={3}
                    size="small"
                    style={Object.assign({ maxWidth: 300 }, style)}
                    onDoubleClick={() => {/* expand handle */}}
                    className={clsx(classes.cell, item.type === 'channel' ? classes.folder : classes.element)}
                >
                    <div className={classes.displayFlex}>
                        <ListItemIcon className={classes.iconStyle}>
                            {isExpanded ? <IconFolderOpened onClick={() => toggleExpanded(item._id)} style={iconStyle} /> : <IconFolder onClick={() => toggleExpanded(item._id)} style={iconStyle} />}
                            {item.type === 'channel' && item.icon &&
                        <div className={clsx(isExpanded && classes.iconOpen)} onClick={() => toggleExpanded(item._id)}>
                            <Icon className={classes.iconCommon} onClick={() => toggleExpanded(item._id)} alt={item.type} src={item.icon} />
                        </div>}
                        </ListItemIcon>
                        <Tooltip title={<div><div>{`${item.native.name}`}</div></div>}>
                            <div className={classes.wrapperTitleAndId}>
                                <div
                                    style={searchStyle}
                                    className={clsx(classes.fontStyle, classes.textStyle)}
                                >{item.native.name}</div>
                            </div>
                        </Tooltip>
                    </div>
                </TableCell>
                <TableCell size="small" className={classes.cell}>{renderTreeType(item.native.type)}</TableCell>
                <TableCell align="right" size="small" className={clsx(classes.cell, classes.buttonsCell)}>
                    <div className={classes.wrapperButton}>
                        <Tooltip title="editieren">
                            <IconButton
                                size="small"
                                onClick={() => {onEdit(item.native.id);}}>
                                <IconEdit />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="löschen">
                            <IconButton
                                size="small"
                                onClick={() => {/*  delete handle */}}
                            >
                                <IconDelete />
                            </IconButton>
                        </Tooltip>

                    </div>
                </TableCell>
            </TableRow>;

        const result = [itemRow];
        children.forEach(it => result.push(renderRow(items, it)));
        return result;
    };
    return renderRow(items,item);
};

export default withStyles(styles)(TreeItem);