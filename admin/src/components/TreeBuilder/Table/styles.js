const IS_CHROME = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

export const styles = theme => ({
    tab: {
        width: '100%',
        height: '100%'
    },
    column: {
        display: 'inline-block',
        verticalAlign: 'top',
        marginRight: 20,
        height: '100%',
        overflow: 'hidden'
    },
    columnDiv: {
        height: 'calc(100% - 40px)',
        overflow: 'auto',
        minWidth: 300
    },
    filter: {
        margin: 0,
    },
    button: {
        marginRight: 20
    },
    buttonLinkedDevices: {
        background: '#17faff'
    },
    devLineExpand: {
        marginRight: 10,
    },
    devLineEnabled: {
        position: 'absolute',
        right: 0,
        top: 0,
    },
    devLineEdit: {
        position: 'absolute',
        top: 5,
        right: 50
    },
    devLineDelete: {
        position: 'absolute',
        top: 5,
        right: 0
    },
    devLineName: {

    },
    devLineNumber: {
        display: 'inline-block',
        verticalAlign: 'middle',
        width: 15,
    },
    editedId: {
        fontStyle: 'italic'
    },
    enumLineSubName: {
        fontStyle: 'italic',
    },
    devLine: {
        height: 48,
        width: '100%',
        position: 'relative'
    },
    devLineDescription: {
        display: 'block',
        fontStyle: 'italic',
        fontSize: 12
    },
    devLineActions: {
        fontStyle: 'italic',
        fontSize: 12,
        paddingLeft: 50,
        display: 'inline-block',
    },
    devLineProgress: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    channelLineActions: {
        width: 80
    },
    devLineNameBlock: {
        display: 'inline-block',
        width: 'calc(100% - 350px)'
    },
    columnHeader: {
        background: theme.palette.primary.light,
        padding: 10,
        color: theme.palette.primary.contrastText
    },
    devModified: {
        fontStyle: 'italic'
    },
    actionIcon: {
        width: 16
    },

    devSubLine: {
        position: 'relative',
        height: 48
    },
    devSubLineName: {
        marginLeft: 5,
        marginTop: 14,
        display: 'inline-block',
        fontSize: 13,
        width: 'calc(100% - 400px)'
    },
    devSubSubLineName: {
        fontSize: 8,
        fontStyle: 'italic',
        display: 'block'
    },
    devSubLineByOn: {
        marginLeft: 5
    },
    devSubLineDelete: {
        position: 'absolute',
        top: 12,
        right: 12,
        padding: 0
    },
    devSubLineEdit: {
        position: 'absolute',
        top: 12,
        right: 62,
        padding: 0
    },
    devSubLineTypeTitle: {
        marginTop: 0
    },
    orderSelector: {
        marginRight: 10,
    },
    paperTable: {
        width: '100%',
        height: 'calc(100% - 57px)',
        overflowX: 'hidden',
        overflowY: 'auto',
        marginTop: 5,
    },
    tableLine: {
        height: 50,
        '&:hover': {
            background: `#3399cccc !important`,
            '& *': {
                color: '#ffffff !important'
            }
        }
    },
    tableIconImg: {
        width: 20,
        height: 20,
        color: theme.palette.type === 'dark' ? '#FFF' : '#000',
    },
    tableIcon: {
        width: 24,
        height: 24,
        display: 'flex',
        padding: 2,
        background: theme.palette.type === 'dark' ? '#3b3b3b' : '#e0e0e0',
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tableNameCell: {
        whiteSpace: 'nowrap',
        width: IS_CHROME ? undefined : 150,
        textOverflow: 'ellipsis',
    },
    tableSmartName: {
        fontSize: 10,
        opacity: 0.8,
    },
    tableIdCell: {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        maxWidth: 150,
        overflow: 'hidden',
        direction: 'rtl',
        textAlign: 'left'
    },
    headerCell: {
        fontWeight: 'bold'
    },
    tableExpandIconCell: {
        padding: 0,
        width: 40,
    },
    tableIconCell: {
        padding: 0,
        width: 40
    },
    tableEditButtonCell: {
        padding: 0,
        width: 40,
    },
    buttonsCellHeader: {
        width: 90,
    },
    buttonsCell: {
        width: IS_CHROME ? undefined : 90,
        padding: '0 !important',
    },
    tableGroup: {
        background: theme.palette.secondary.main,
        borderTop: '5px solid ' + theme.palette.background.paper,
    },
    tableGroupCell: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFF',
        cursor: 'pointer',
        textTransform: 'uppercase'
    },
    tableExpandIcon: {
        marginRight: 5,
        marginLeft: 10,
        marginTop: 6,
        color: '#FFF',
        width: 20,
        height: 20,
        cursor: 'pointer',
    },
    tableGroupIcon: {
        height: 20,
        marginRight: 5,
        color: '#ffffff'
    },

    enumsEdit: {
        minHeight: 20,
        minWidth: 100,
        textAlign: 'left',
        justifyContent: 'left',
        padding: 3,
        whiteSpace: 'nowrap',
        '&:hover, &$focusVisible': {
            zIndex: 1,
            opacity: 0.7,
            borderRadius: 3,
            background: 'gray'
        },
    },
    enumsEditFocusVisible: {},
    wrapperButtonEnum: {
        maxWidth: 200,
        display: 'flex',
        overflow: 'hidden'
    },
    emptyClear: {
        width: 32
    },
    wrapperButton: {
        marginRight: 10,
        display: 'flex',
        justifyContent: 'flex-end'
    },
    emptyBlock: {
        width: 24
    },
    displayFlex: {
        display: 'flex',
        alignItems: 'center'
    },
    iconCommon: {
        width: 20,
        height: 20,
        position: 'absolute',
        top: 10,
        left: 8,
        opacity: 0.8
    },
    iconStyle: {
        position: 'relative',
        minWidth: 24
    },
    fontStyle: {
        // maxWidth: 160,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        fontWeight: 'bold'
    },
    wrapperTitleAndId: {
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
    },
    fontStyleId: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        fontWeight: 'bold',
        fontSize: 9,
        opacity: 0.6,
        fontStyle: 'italic'
    },
    wrapperIconEnumCell: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 3,
        marginRight: 3
    },
    enumIcon: {
        width: 16,
        height: 16,
    },
    iconInSelect: {
        marginRight: 4,
    },
    nameEnumCell: {
        marginLeft: 3
    },
    emptyBlockFlex: {
        flexGrow: 1
    },
    wrapperName: {
        fontWeight: 800,
        display: 'flex',
        alignItems: 'center',
        marginRight: 10
    },
    table: {
        '& th': {
            background: theme.name === 'dark' ? '#202020' : theme.name === 'blue' ? '#22292d' : 'white'
        }
    },
    spaceBetween: {
        justifyContent: 'space-between'

    },
    iconWrapper: {
        display: 'flex',
        alignItems: 'center'
    },
    iconStyleType: {
        width: 16,
        height: 16,
        margin: '0 3px'
    },
    emptyIcon: {
        width: 16,
        height: 16,
        margin: '0 3px'
    },
    typeCellNameAndIcon: {
        display: 'flex',
        alignItems: 'center'
    },
    iconOpen: {
        transform: 'skew(147deg, 183deg) scale(0.5) translate(-43px, 11px)'
    },
    hoverRow: {
        '&:hover:after': {
            width: '100%',
        },
        position: 'relative',
        transform: 'scale(1)',
        '&:after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            background: '#ffffff36',
            pointerEvents: 'none'
        }
    },
    selected: {
        background: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    },
    wrapperHeadButtons:{
        display: 'flex',
        overflowY: 'auto',
        marginRight: 'auto'
    },
    '@media screen and (max-width: 700px)': {
        hide700: {
            display: 'none'
        },
        wrapperName:{
            marginLeft:10
        }
    },
    '@media screen and (max-width: 600px)': {
        emptyBlock: {
            width: 24
        },
    },
    '@media screen and (max-width: 500px)': {
        wrapperTitleAndId: {
            maxWidth: 200
        },
    },
    '@media screen and (max-width: 440px)': {
        wrapperTitleAndId: {
            maxWidth: 150
        },
        fontStyle: {
            fontSize: 11
        },
        fontStyleId: {
            fontSize: 7
        },
        wrapperName:{
            '& span':{
                display: 'none'
            }
        }
    },
    '@media screen and (max-width: 360px)': {
        wrapperTitleAndId: {
            maxWidth: 120
        },
    },
    filterType: {
        minWidth: 100
    },
    searchText: {
        color: 'orange'
    },
    textStyle: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        padding: '0 16px 0 16px'
    },
    cell: {
        padding: '0 24px 0 16px',
    },
    cellMobile: {
        padding: '6px 24px 6px 16px',
    }
});