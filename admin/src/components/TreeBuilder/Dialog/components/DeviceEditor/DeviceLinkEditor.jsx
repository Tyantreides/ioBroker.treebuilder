import {
    AppBar,
    Divider, 
    Grid, 
} from '@mui/material';
import Box from '@mui/material/Box';

import React from 'react';
import { useState } from 'react';
import DeviceLinkInput from './DeviceLinkInput';
import DeviceLinkOutput from './DeviceLinkOutput';
import DeviceLinkModifier from './DeviceLinkModifier';
import { Tab, Tabs } from '@material-ui/core';

const readLinks = [
    {
        label: 'read1',
        src: 'alias.0.read1',
        target: 'ON',
        modifier: 'untouched',
    },
    {
        label: 'read2',
        src: 'alias.0.read2',
        target: 'ON',
        modifier: 'untouched',
    },
    {
        label: 'read3',
        src: 'alias.0.read3',
        target: 'ON',
        modifier: 'untouched',
    },
]

const writeLinks = [
    {
        label: 'write1',
        src: 'alias.0.write1',
        target: 'ON',
        modifier: 'untouched',
    },
    {
        label: 'write2',
        src: 'alias.0.write2',
        target: 'ON',
        modifier: 'untouched',
    },
    {
        label: 'write3',
        src: 'alias.0.write3',
        target: 'ON',
        modifier: 'untouched',
    },
]

function TabPanel(props) {
    const { children, activeTab, tabIndex } = props;

    return (
        <div
            role="tabpanel"
            hidden={activeTab !== tabIndex}
            id={`devicelink-tabpanel-${tabIndex}`}
        >
        {activeTab === tabIndex && (
            <Box sx={{ p: 3 }}>
                {children}
            </Box>
        )}
        </div>
    );
}
  

function DeviceLinkEditor({classes}) {
    const [activeTab, setActiveTab] = useState(0);
    const [deviceLinks, setDeviceLinks] = useState(readLinks);

    const handleChange = (event, newValue) => {
        newValue === 0 ? setDeviceLinks(readLinks) : setDeviceLinks(writeLinks)
        setActiveTab(newValue);
    };

    return (
        <Box width={'100%'}>
            <Divider />
            <Tabs value={activeTab} onChange={handleChange}>
                <Tab label={'Lesen'} />
                <Tab label={'Schreiben'} />
            </Tabs>

            <TabPanel activeTab={activeTab} tabIndex={0}>
                <Box sx={{ width: '100%' }}>
                    {deviceLinks.map((deviceLink, index) => (
                        <AppBar key={index} position='relative' style={{margin: '15px', borderRadius: '10px'}}>
                            <Grid container justifyContent={'space-between'}>
                                <Grid xs={5} item><DeviceLinkInput index={index} link={deviceLink} classes={classes} /></Grid>
                                <Grid xs={4} item><DeviceLinkModifier link={deviceLink} /></Grid>
                                <Grid xs={3} item><DeviceLinkOutput link={deviceLink} /></Grid>
                            </Grid>
                        </AppBar>
                    ))}
                </Box>
            </TabPanel>

            <TabPanel activeTab={activeTab} tabIndex={1}>
                <Box sx={{ width: '100%' }}>
                    {deviceLinks.map((deviceLink, index) => (
                        <AppBar key={index} position='relative' style={{margin: '15px', borderRadius: '10px'}}>
                            <Grid container justifyContent={'space-between'}>
                                <Grid xs={5} item><DeviceLinkInput index={index} link={deviceLink} classes={classes} /></Grid>
                                <Grid xs={4} item><DeviceLinkModifier link={deviceLink} /></Grid>
                                <Grid xs={3} item><DeviceLinkOutput link={deviceLink} /></Grid>
                            </Grid>
                        </AppBar>
                    ))}
                </Box>
            </TabPanel>
            
        </Box>
    );
}

export default DeviceLinkEditor;
