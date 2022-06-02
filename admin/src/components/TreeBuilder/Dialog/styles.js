export const styles = theme => ({
    header: {
        width: '100%',
        fontSize: 16,
        textTransform: 'capitalize',
        textAlign: 'center',
        paddingBottom: 20,
        color: '#000',
    },
    nameDiv: {
        width: '50%',
        display: 'inline-block',
        verticalAlign: 'top',
    },
    viewDiv: {
        width: '50%',
        display: 'inline-block',
    },
    type: {
        marginTop: 10
    },
    input: {
        width: 200
    },
    icon: {
        display: 'inline-block',
    },
    selectIcon: {
        paddingRight: theme.spacing(1),
        verticalAlign: 'middle',
        width: 20,
        height: 20
    },
    selectText: {
        verticalAlign: 'middle',
    },
    enumIcon: {
        width: 24,
        height: 24,
        marginRight: 10
    },
    renderValueWrapper: {
        display: 'flex'
    },
    renderValueCurrent: {
        display: 'flex',
        alignItems: 'center',
        marginRight: 10
    },
    blockFields: {
        display: 'flex',
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        margin: 5
    },
    container: {
        display: 'flex',
        overflowX: 'hidden',
        flexFlow: 'wrap'
    },
    treeDiv: {
        width: '100%',
        flex: 1,
        margin: 5,
        overflow: 'hidden'
    },
    titleColor: {
        '& h2': {
            overflow: 'hidden',
            direction: 'rtl',
            textOverflow: 'ellipsis',
            textAlign: 'end'
        },
    },
    iconStyle: {
        width: 16,
        height: 16,
        margin: '0 3px'
    },
    emptyIcon: {
        width: 16,
        height: 16,
        margin: '0 3px'
    },
    itemChildrenWrapper: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between'
    },
    iconWrapper: {
        display: 'flex',
        alignItems: 'center'
    }
});