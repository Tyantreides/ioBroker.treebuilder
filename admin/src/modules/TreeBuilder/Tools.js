/**
 * Gets the first part of a dot path
 * @param {*} path
 * @returns
 */
export const getPathRoot = (path) => {
    const parts = path.split('.');
    return parts[0];
};

/**
 * Gets the last part of a dot path
 * @param {*} path
 * @returns
 */
export const getPathEnd = (path) => {
    const parts = path.split('.');
    return parts[parts.length-1];
};

/**
 * Removes the last part of a given dot path
 * @param {*} path
 * @returns
 */
export const cleanStateFromPath = (path) => {
    const parts = path.split('.');
    return cleanPath('.'+parts[parts.length-1], path);
};


export const getParentPath = (path) => {
    return cleanStateFromPath(path);
};

/**
 * Removes a given String from a string
 * @param {*} part
 * @param {*} stringToClean
 * @returns
 */
export const cleanPath = (part, stringToClean) => {
    return stringToClean.replace(part, '');
};

export const cloneObject = (obj) => {
    return JSON.parse(JSON.stringify(obj));
};

export const getParentTreeItemByNativeId = (treeItems, id) => {
    return treeItems.find(item => item.native.id === id);
};

export const getNewNativeParentId = (treeBuilderContext) => {
    return treeBuilderContext.state.tree.selectedItem ? treeBuilderContext.state.tree.selectedItem : treeBuilderContext.state.tree.rootItem;
};

export const getNewItemDepth = (treeBuilderContext) => {
    const ownParent = getNewNativeParentId(treeBuilderContext);
    if (ownParent !== treeBuilderContext.state.tree.rootItem) {
        const ownParentItem = getParentTreeItemByNativeId(treeBuilderContext.state.treeItems, ownParent);
        return ownParentItem.native.depth + 1;
    }
    return 0;
};